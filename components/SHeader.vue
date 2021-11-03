<template>
  <div>
    <header ref='header' class='s-header'>
      <div class='container'>
        <div class='row'>
          <transition name='slide-logo'>
            <router-link
              v-show='!toggleLogo'
              to='/'
              @click.native='toggleTransition(toggleModal, isOpenMenu ? "from" : "", 1400)'
            >
              <s-image src='svg/logo-top.svg' />
            </router-link>
          </transition>
          <s-button ref='btn' color='green' size='small' icon='arr-btn' @click='toggleTransition(showProject, showProjectModal ? "from" : "to", 500)'>
            Start a project
          </s-button>
          <div
            ref='burger'
            :class="['burger', { 'burger--open': isOpenMenu }]"
            @click='toggleTransition(toggleModal, isOpenMenu ? "from" : "to", 1400)'
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </header>

    <div v-show='isOpenMenu' ref='menu' class='menu-modal'>
      <div class='container'>
        <ul>
          <li v-for='(item, idx) in menuProducts' ref='menuItem' :key='idx'>
            <span>Product</span>
            <router-link :to='item.src' @click.native='toggleTransition(toggleModal, isOpenMenu ? "from" : "to", 1400)'>
              {{ item.label }}
            </router-link>
          </li>
        </ul>
        <ul>
          <li v-for='(item, idx) in menu' ref='menuItem' :key='idx'>
            <span>0{{ idx + 1 }}</span>
            <router-link :to='item.src' @click.native='toggleTransition(toggleModal, isOpenMenu ? "from" : "to", 1400)'>
              {{ item.label }}
            </router-link>
          </li>
        </ul>
      </div>
    </div>
    <ModalProject v-show='showProjectModal' ref='projectModal'
                  :home='home' @close='toggleTransition(showProject, showProjectModal ? "from" : "to", 500)'></ModalProject>
    <ModalDiscuss v-show='showDiscussLocal' ref='discussModal'></ModalDiscuss>
    <STransition v-if='include' :reverse='reverse'></STransition>
  </div>
</template>

<script>
import STransition from '../components/STransition'
import SButton from './ui/SButton'
import SImage from './ui/SImage'
import ModalProject from './ModalProject'
import ModalDiscuss from './ModalDiscuss'

export default {
  name: 'SHeader',
  components: { ModalDiscuss, ModalProject, SImage, SButton, STransition },
  data() {
    return {
      include: false,
      reverse: false,
      animeRunning: false,
      showProjectModal: false,
      showDiscussLocal: false,
      discussTl: null,
      tl: null,
      tl2: null,
      tl3: null,
      prodTl: null,
      animModal: null,
      isOpenMenu: false,
      menu: [
        { label: 'About', src: '/about' },
        { label: 'Services', src: '/services' },
        { label: 'Contacts', src: '/contacts' }
      ],
      menuProducts: [
        { label: 'Real Estate', src: '/products/real-estate' },
        { label: 'Industrial', src: '/products/industrial-process' }
      ],
      toggleLogo: false,
      animationFrame: false
    }
  },
  computed: {
    home() {
      return this.$store.state.home
    },
    showDiscuss() {
      return this.$store.state.showDiscuss
    }
  },
  watch: {
    '$store.state.loaded'(value) {
      if (value) this.start()
    },
    $route() {
      this.toggleModalFunc()
    },
    '$store.state.showDiscuss'(newValue) {
      this.toggleTransition(this.showDiscus, this.showDiscussLocal ? "from" : "to", 500)
    }
  },
  mounted() {
    // eslint-disable-next-line nuxt/no-env-in-hooks
    if (process.client) {
      window.addEventListener('scroll', () => {
       this.toggleModalFunc()
      })
    }
    this.$store.dispatch('getHome')
    this.tl = this.gsap.timeline({ paused: true })
    this.tl2 = this.gsap.timeline({ paused: true })
    this.tl3 = this.gsap.timeline({ paused: true })
    const self = this
    this.animModal = this.tl
      .from(this.$refs.menuItem, 0.6, {
        onStart() {
          self.isOpenMenu = true
        },
        onReverseComplete() {
          self.isOpenMenu = false
        },
        opacity: 0,
        y: '-150%',
        stagger: 0.2
      })
    this.prodTl = this.tl2.from(this.$refs.projectModal.$el, 0.6, {
      onStart() {
        self.showProjectModal = true
      },
      onReverseComplete() {
        self.showProjectModal = false
      },
      opacity: 0,
      y: '-50%'
    })
    this.discussTl = this.tl3.from(this.$refs.discussModal.$el, 0.6, {
      onStart() {
        self.showDiscussLocal = true
      },
      onReverseComplete() {
        self.showDiscussLocal = false
      },
      opacity: 0,
      y: '-50%'
    })
  },
  methods: {
    showProject() {
        this.showProjectModal ? this.prodTl.reverse() : this.prodTl.play()
    },
    showDiscus() {
      this.showDiscussLocal ? this.discussTl.reverse() : this.discussTl.play()
    },
    toggleTransition(func, dir, time) {
      if(!this.animeRunning) {
        const self = this
        if (dir === 'to') {
          this.animeRunning = true
          self.reverse = false
          this.include = true
          setTimeout(function() {
            func()
            self.animeRunning = false
          }, 1800)
        } else if (dir === 'from') {
          this.animeRunning = true
          func()
          setTimeout(function() {
            self.reverse = true
          }, time - 100 - 400)
          setTimeout(function() {
            self.include = false
            self.animeRunning = false
          }, 2000 + time - 100)
        }
      }
    },
    toggleModalFunc() {
      this.toggleLogo = window.scrollY > 100 && this.$route.path !== '/services'
    },
    toggleModal() {
      this.isOpenMenu ? this.animModal.reverse() : this.animModal.play()
    },
    start() {
      const homeText = document.querySelector('.home .absolute')
      const burgerSpans = document.querySelector('.burger').getElementsByTagName('span')
      if (homeText) {
        this.gsap.from(homeText, {
          opacity: 0,
          y: '100%',
          duration: 1.5
        })
      }
      const buttonWrapper = this.$refs.btn.$el.getElementsByClassName('s-button-wrapper')[0]
      this.gsap.from(this.$refs.header, {
        opacity: 0,
        duration: 1.5,
      })
      this.gsap.from(burgerSpans, {
        width: 0,
        transformOrigin: 'center',
        duration: 0.7,
        clearProps: 'all',
      })
      const tl = this.gsap.timeline()
      tl.from(this.$refs.btn.$el, {
          scaleX: 0,
          duration: 1.3,
          clearProps: 'all',
        delay: 0.2
        })
      .from(buttonWrapper, {
        opacity: 0,
        duration: 0.5,
        clearProps: 'all'
      }, ">-0.3")
    }
  }
}
</script>

<style scoped lang='scss'>
.s-header {
  padding-top: 32px;
  position: fixed;
  left: 0;
  width: 100%;
  top: 0;
  z-index: 100;

  .row {
    align-items: center;
  }

  .s-button {
    margin-left: auto;
    margin-right: 50px;

    &.no-transition {
      ::v-deep .s-button-wrapper {
        opacity: 0;
        transition: 0s;
      }
    }
  }

  .burger {
    width: 46px;
    height: 46px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    span {
      display: block;
      height: 3px;
      width: 26px;
      background-color: $black;
      border-radius: 6px;
      transition: 0.5s transform, 0.5s opacity;

      &:nth-child(1) {
        transform-origin: left center;
      }

      &:nth-child(3) {
        transform-origin: left center;
      }

      &:nth-child(2) {
        width: 12px;
        margin: 7px 0;
      }
    }

    &--open {
      span:nth-child(2) {
        opacity: 0;
      }

      span:nth-child(1) {
        transform: rotate(45deg) translateY(1px);
      }

      span:nth-child(3) {
        transform: rotate(-45deg) translateY(-1px);
      }
    }
  }
}

.menu-modal {
  width: 100vw;
  height: 100vh;
  background-color: $white;
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  z-index: 99;
  .container {
    display: flex;
    ul:first-child {
      margin-right: 250px;
    }
  }
  ul {
    li {
      margin-bottom: 80px;
      position: relative;
      @include max-w-laptop() {
        margin-bottom: 50px;
      }

      &:last-child {
        margin-bottom: 0;
      }
      a {
        @include h2_desc();
        font-family: Stolzl Display, sans-serif;

        @include max-w-laptop() {
          font-size: 40px;
        }
        transition: 0.5s background-color ease-in-out;

      }

      span {
        font-weight: bold;
        position: absolute;
        left: 0;
        top: -34px;
        color: #3C91E6;
        transition: 0.5s;
      }
      &:hover {
        @media (min-width: 1280px) {
          a {
            background: #9cf50b;
          }
          span {
            transform: translateY(50%);
          }
        }
      }
    }


  }
}
</style>
