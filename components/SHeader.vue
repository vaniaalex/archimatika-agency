<template>
  <div>
    <header class="s-header">
      <div class="container">
        <div class="row">
          <transition name="slide-logo">
            <router-link
              v-show="!toggleLogo"
              to="/"
              @click.native="isOpenMenu && toggleModal()"
            >
              <s-image src="svg/logo-top.svg" />
            </router-link>
          </transition>
          <s-button color="green" size="small" icon="arr-btn">
            Start a project
          </s-button>
          <div
            :class="['burger', { 'burger--open': isOpenMenu }]"
            @click="toggleModal"
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </header>

    <div ref="menu" class="menu-modal">
      <ul>
        <li v-for="(item, idx) in menu" ref="menuItem" :key="idx">
          <span>0{{ idx + 1 }}</span>
          <router-link :to="item.src" @click.native="toggleModal">
            {{ item.label }}
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import SButton from './ui/SButton'
import SImage from './ui/SImage'
export default {
  name: 'SHeader',
  components: { SImage, SButton },
  data() {
    return {
      tl: null,
      animModal: null,
      isOpenMenu: false,
      menu: [
        { label: 'About', src: '/about' },
        { label: 'Products', src: '#' },
        { label: 'Services', src: '#' },
        { label: 'Contacts', src: '#' },
      ],
      toggleLogo: false,
      headerTrigger: 0,
    }
  },
  watch: {
    '$route.path'() {
      setTimeout(() => {
        this.setHeaderTrigger()
      }, 100)
    },
  },
  mounted() {
    this.setHeaderTrigger()

    document.body.addEventListener('wheel', () => {
      this.toggleLogo = window.scrollY + 120 > this.headerTrigger
    })

    this.tl = this.gsap.timeline({ paused: true })

    this.animModal = this.tl
      .to(this.$refs.menu, 0.8, {
        opacity: 1,
        scale: 1,
        zIndex: 99,
      })
      .from(this.$refs.menuItem, 0.7, {
        opacity: 0,
        y: 100,
        stagger: 0.4,
      })
  },
  methods: {
    toggleModal() {
      this.isOpenMenu ? this.animModal.reverse() : this.animModal.play()
      this.isOpenMenu = !this.isOpenMenu
    },
    setHeaderTrigger() {
      this.headerTrigger = document
        .querySelector('.header-trigger')
        .getBoundingClientRect().top
    },
  },
}
</script>

<style scoped lang="scss">
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
  transform: scale(0.6);

  ul {
    margin-left: offset(1210px);
    li {
      margin-bottom: 80px;
      position: relative;

      &:last-child {
        margin-bottom: 0;
      }

      &:hover {
        span {
          transform: translate(-100%, 110%);

          @include max-w-laptop() {
            transform: translate(-100%, 80%);
          }
        }
      }
    }
    a {
      @include h2_desc();
      font-family: Stolzl Display, sans-serif;
    }

    span {
      font-weight: bold;
      position: absolute;
      left: -20px;
      transform: translateX(-100%);
      top: 0;
      color: $blue;
      transition: 0.5s;
    }
  }
}
</style>
