<template>
  <div>
    <header ref='header' class='s-header'>
      <div class='container'>
        <div class='row'>
          <transition name='slide-logo'>
            <router-link
              v-show='!toggleLogo'
              to='/'
              @click.native='isOpenMenu && toggleModal()'
            >
              <s-image src='svg/logo-top.svg' />
            </router-link>
          </transition>
          <s-button ref='btn' color='green' size='small' icon='arr-btn' @click='showProjectModal = true'>
            Start a project
          </s-button>
          <div
            ref='burger'
            :class="['burger', { 'burger--open': isOpenMenu }]"
            @click='toggleModal'
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </header>

    <div ref='menu' class='menu-modal'>
      <div class='container'>
        <ul>
          <li v-for='(item, idx) in menuProducts' ref='menuItem' :key='idx'>
            <span>Product</span>
            <router-link :to='item.src' @click.native='toggleModal'>
              {{ item.label }}
            </router-link>
          </li>
        </ul>
        <ul>
          <li v-for='(item, idx) in menu' ref='menuItem' :key='idx'>
            <span>0{{ idx + 1 }}</span>
            <router-link :to='item.src' @click.native='toggleModal'>
              {{ item.label }}
            </router-link>
          </li>
        </ul>
      </div>
    </div>
    <ModalProject v-if='showProjectModal' :home='home' @close='showProjectModal = false' ></ModalProject>
    <ModalDiscuss v-show='showDiscuss'></ModalDiscuss>
  </div>
</template>

<script>
import SButton from './ui/SButton'
import SImage from './ui/SImage'
import ModalProject from './ModalProject'
import ModalDiscuss from './ModalDiscuss'

export default {
  name: 'SHeader',
  components: { ModalDiscuss, ModalProject, SImage, SButton },
  data() {
    return {
      showProjectModal: false,
      tl: null,
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

    this.animModal = this.tl
      .fromTo(
        this.$refs.menu,
        0.8,
        {
          opacity: 0,
          scale: 0.6,
          zIndex: -1
        },
        {
          opacity: 1,
          scale: 1,
          zIndex: 99,
          duration: 300
        }
      )
      .from(this.$refs.menuItem, 0.7, {
        opacity: 0,
        y: '100%',
        stagger: 0.4
      })
  },
  methods: {
    toggleModalFunc() {
      this.toggleLogo = window.scrollY > 100
    },
    toggleModal() {
      this.isOpenMenu ? this.animModal.reverse() : this.animModal.play()
      this.isOpenMenu = !this.isOpenMenu
    },
    start() {
      const homeText = document.querySelector('.home .absolute')
      const burgerSpans = document.querySelector('.burger').getElementsByTagName('span')
      if (homeText) {
        this.gsap.from(homeText, {
          opacity: 0,
          y: '100%',
          duration: 1.5,
        })
      }
      this.gsap.from(this.$refs.header, {
        opacity: 0,
        duration: 1.5,
      })
      this.gsap.from(burgerSpans, {
        scaleX: 0,
        duration: 1,
        transformOrigin:"center",
        clearProps: 'All'
      })
      this.gsap
        .from(this.$refs.btn.$el, {
          scaleX: 0,
          duration: 1.5,
        })
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
      transition: 0.5s;

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
  z-index: -1;
  opacity: 0;
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

    }

    a {
      @include h2_desc();
      font-family: Stolzl Display, sans-serif;

      @include max-w-laptop() {
        font-size: 40px;
      }
    }

    span {
      font-weight: bold;
      position: absolute;
      left: 0;
      top: -34px;
      color: #3C91E6;
      transition: 0.5s;
    }
  }
}
</style>
