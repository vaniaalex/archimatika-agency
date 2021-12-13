<template>
  <div>
    <header ref='header' class='s-header'>
      <div class='container'>
        <div class='row'>
          <transition name='slide-logo'>
            <a
              v-show='!toggleLogo'
              @click='$route.path === "/" ? toggleTransition(toggleModal, isOpenMenu ? "from" : "", 1400) : !isOpenMenu ? goToPage("/") : toggleTransition(() => {toggleModal(); $router.push("/")}, isOpenMenu ? "from" : "", 1400)'
            >
              <svg width="220" height="31" viewBox="0 0 220 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0)">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M209.898 16.2881C207.569 16.2881 205.741 18.2043 205.741 20.4915C205.741 22.7787 207.569 24.6949 209.898 24.6949C210.953 24.6949 212.075 24.3111 212.876 23.7107C213.679 23.1086 213.848 22.5596 213.848 22.2501H213.889V18.9152C213.889 18.6268 213.706 18.0156 212.858 17.3462C212.033 16.6937 210.917 16.2881 209.898 16.2881ZM213.889 10.7822C212.632 10.2713 211.269 9.98304 209.898 9.98304C204.26 9.98304 199.63 14.6535 199.63 20.4915C199.63 26.3295 204.261 31 209.898 31C211.25 31 212.617 30.7322 213.889 30.2368V31H220V9.98304H213.889V10.7822Z" fill="#080708"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M179.514 31.0001V1.83908H185.625V18.7443L193.082 8.13271L198.03 11.8336L192.459 19.7615L197.338 23.3275V31.0001H191.227V26.588L185.625 22.494V31.0001H179.514Z" fill="#080708"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M169.329 30.9999V9.72028H175.44V30.9999H169.329Z" fill="#080708"/>
                  <path d="M176.204 3.94068C176.204 6.11705 174.494 7.88136 172.384 7.88136C170.275 7.88136 168.565 6.11705 168.565 3.94068C168.565 1.7643 170.275 0 172.384 0C174.494 0 176.204 1.7643 176.204 3.94068Z" fill="#080708"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M154.306 9.98311V5.77972H160.417V9.98311H166.528V16.2882H160.417V24.695H166.528V31.0001H154.306V16.2882H150.996V9.98311H154.306Z" fill="#080708"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M138.092 16.2881C135.763 16.2881 133.935 18.2043 133.935 20.4915C133.935 22.7787 135.763 24.6949 138.092 24.6949C139.147 24.6949 140.269 24.3111 141.07 23.7107C141.873 23.1086 142.042 22.5596 142.042 22.2501H142.083L142.083 18.9152C142.083 18.6268 141.9 18.0156 141.053 17.3462C140.227 16.6937 139.111 16.2881 138.092 16.2881ZM142.083 10.7822C140.827 10.2713 139.463 9.98304 138.092 9.98304C132.455 9.98304 127.824 14.6535 127.824 20.4915C127.824 26.3295 132.455 31 138.092 31C139.444 31 140.812 30.7322 142.083 30.2368V31H148.194V9.98304H142.083V10.7822Z" fill="#080708"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M94.7224 9.98304H124.769V31H118.658V16.2881H112.801V31H106.69V16.2881H100.833V31H94.7224V9.98304Z" fill="#080708"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M84.7917 31V10.2457H90.9028V31H84.7917Z" fill="#080708"/>
                  <path d="M91.6665 3.94068C91.6665 6.11705 89.9565 7.88136 87.8471 7.88136C85.7376 7.88136 84.0276 6.11705 84.0276 3.94068C84.0276 1.7643 85.7376 0 87.8471 0C89.9565 0 91.6665 1.7643 91.6665 3.94068Z" fill="#080708"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M62.1299 2.10166H68.241V10.2457H80.7178V31H74.6067V16.5508H68.241V31H62.1299V2.10166Z" fill="#080708"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M48.8887 16.2881C46.6387 16.2881 44.8146 18.17 44.8146 20.4915C44.8146 22.813 46.6387 24.6949 48.8887 24.6949C49.9157 24.6949 51.0122 24.3165 51.7977 23.7209C52.5826 23.1257 52.7577 22.5757 52.7577 22.2501H58.8689C58.8689 25.1574 57.2568 27.4061 55.4169 28.8013C53.5776 30.1961 51.2119 31 48.8887 31C43.2636 31 38.7035 26.2952 38.7035 20.4915C38.7035 14.6878 43.2636 9.98304 48.8887 9.98304C51.3118 9.98304 53.7041 10.8975 55.5227 12.351C57.3227 13.7897 58.9098 16.0668 58.9098 18.9152H52.7987C52.7987 18.6111 52.6096 17.9984 51.7801 17.3354C50.9692 16.6872 49.8787 16.2881 48.8887 16.2881Z" fill="#080708"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M24.4443 9.98304H37.1758V16.2881H30.5554V31H24.4443V9.98304Z" fill="#080708"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M10.2682 16.2881C7.93886 16.2881 6.11111 18.2043 6.11111 20.4915C6.11111 22.7787 7.93886 24.6949 10.2682 24.6949C11.3232 24.6949 12.4447 24.3111 13.2457 23.7107C14.0489 23.1086 14.2178 22.5596 14.2178 22.2501H14.2593L14.2593 18.9152C14.2593 18.6268 14.0759 18.0156 13.2286 17.3462C12.4028 16.6937 11.2874 16.2881 10.2682 16.2881ZM14.2593 10.7822C13.0024 10.2713 11.6394 9.98304 10.2682 9.98304C4.63065 9.98304 0 14.6535 0 20.4915C0 26.3295 4.63066 31 10.2682 31C11.6199 31 12.9874 30.7322 14.2593 30.2368V31H20.3704V9.98304H14.2593V10.7822Z" fill="#080708"/>
                </g>
                <defs>
                  <clipPath id="clip0">
                    <rect width="220" height="31" fill="white"/>
                  </clipPath>
                </defs>
              </svg>

            </a>
          </transition>
          <s-button ref='btn' color='green' size='small' icon='arr-btn' @click='animeRunning ? "" : $store.dispatch("setProject", true); $gtm.push({ event: "open_project"}); $yandexMetrika.reachGoal("open_project")'>{{home.header.button}}</s-button>
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
          <li v-for='(item, idx) in home.header.menuProducts' ref='menuItem' :key='idx'>
            <span>{{home.header.product}}</span>
            <nuxt-link :to='item.src' @click.native='toggleTransition(toggleModal, isOpenMenu ? "from" : "to", 1400)'>
              {{ item.label }}
            </nuxt-link>
          </li>
          <li v-for='(item, idx) in home.header.menu' ref='menuItem' :key='idx + 100' class='mobile'>
            <span>0{{ idx + 1 }}</span>
            <nuxt-link :to='item.src' @click.native='toggleTransition(toggleModal, isOpenMenu ? "from" : "to", 1400)'>
              {{ item.label }}
            </nuxt-link>
          </li>
        </ul>
        <ul class='desktop'>
          <li v-for='(item, idx) in home.header.menu' ref='menuItem' :key='idx'>
            <span>0{{ idx + 1 }}</span>
            <nuxt-link :to='item.src' @click.native='toggleTransition(toggleModal, isOpenMenu ? "from" : "to", 1400)'>
              {{ item.label }}
            </nuxt-link>
          </li>
        </ul>
      </div>
    </div>
    <ModalProject v-show='showProjectModal' ref='projectModal'
                  :home='home' @close='toggleTransition(showProject, showProjectModal ? "from" : "to", 500)'></ModalProject>
    <ModalDiscuss v-show='showDiscussLocal' ref='discussModal' :show='showDiscussLocal' :text='home.discussModal'></ModalDiscuss>
    <STransition v-if='include' :reverse='reverse' :once='once'></STransition>
    <transition name='fadeFromBottom'>
      <SToast v-if='toast !== ""' :type='toast' :message='toastMessage'/>
    </transition>
  </div>
</template>

<script>
import STransition from '../components/STransition'
import SButton from './ui/SButton'
import ModalProject from './ModalProject'
import ModalDiscuss from './ModalDiscuss'
import SToast from './ui/SToast'

export default {
  name: 'SHeader',
  components: { SToast, ModalDiscuss, ModalProject, SButton, STransition },
  data() {
    return {
      include: false,
      reverse: false,
      animeRunning: false,
      showDiscussLocal: false,
      showProjectModal: false,
      discussTl: null,
      toggleRunning: false,
      tl: null,
      tl2: null,
      tl3: null,
      prodTl: null,
      once: false,
      animModal: null,
      isOpenMenu: false,
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
    },
    pageTransition() {
      return this.$store.state.pageTransition
    },
    nextPage() {
      return this.$store.state.nextPage
    },
    toast() {
      return this.$store.state.toast
    },
    toastMessage() {
      return this.$store.state.toastMessage
    }
  },
  watch: {
    '$store.state.loaded'(value) {
      if (value) this.start()
    },
    $route() {
      this.toggleModalFunc()
    },
    '$store.state.showDiscuss'() {
      this.toggleTransition(this.showDiscus, this.showDiscussLocal ? "from" : "to", 500)
    },
    '$store.state.showProject'() {
      this.toggleTransition(this.showProject, this.showProjectModal ? "from" : "to", 500)
    },
    pageTransition(newValue) {
      if(newValue === true) {
        const self = this
        this.toggleTransition(() => {this.$router.push(this.nextPage)}, "to", 0, true)
        // setTimeout(function(){
        //   self.toggleTransition(() => {self.$router.push(self.nextPage)}, "from", 0)
        //   self.$store.dispatch('setNextPage', '/')
        //   self.$store.dispatch('setPageTransition', false)
        // }, 2300)
      }
    },
    isOpenMenu(newValue) {
      this.toggleOverflow(newValue)
    },
    showDiscussLocal(newValue) {
      this.toggleOverflow(newValue)
    },
    showProjectModal(newValue) {
      this.toggleOverflow(newValue)
    },
  },
  mounted() {
    // eslint-disable-next-line nuxt/no-env-in-hooks
    if (process.client) {
      window.addEventListener('scroll', () => {
       this.toggleModalFunc()
      })
    }
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
    toggleOverflow(bool) {
      if(process.client) {
        if(bool === true) {
          document.getElementsByTagName('body')[0].classList.add('touch')
          document.getElementsByTagName('body')[0].style.overflow = 'hidden'
          document.getElementsByTagName('html')[0].style.overflow = 'hidden'
        }
        else if(bool === false) {
          document.getElementsByTagName('body')[0].classList.remove('touch')
          document.getElementsByTagName('body')[0].style.overflow = ''
          document.getElementsByTagName('html')[0].style.overflow = ''
        }
      }
    },
    goToPage(page) {
      this.$store.dispatch('setNextPage', page)
      this.$store.dispatch('setPageTransition', true)
    },
    showProject() {
        this.showProjectModal ? this.prodTl.reverse() : this.prodTl.play()
    },
    showDiscus() {
      this.showDiscussLocal ? this.discussTl.reverse() : this.discussTl.play()
    },
    toggleTransition(func, dir, time, once) {
      if(!this.animeRunning) {
        if(once) {
          this.once = true
        }
        const self = this
        if (dir === 'to') {
          this.animeRunning = true
          this.reverse = once
          this.include = true
          setTimeout(function() {
            func()
            self.animeRunning = false
          }, this.once ? 1000 : 2200)
          if(once) {
            setTimeout(function() {
                  self.include = false;
                  self.$store.dispatch('setPageTransition', false)
                self.once = false
            }, 3600)

          }
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
          duration: 1.5,
          clearProps: 'all'
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
  a {
    cursor: pointer;
    width: 220px;
    @media (max-width: 810px) {
      width: 150px;
    }
    @media (max-width: 370px) {
      width: 130px;
    }
  }
  .s-button {
    margin-left: auto;
    margin-right: 50px;
    @media (max-width: 810px) {
      margin-right: 40px;
    }
    @media (max-width: 600px) {
      margin-right: 30px;
    }
    @media (max-width: 370px) {
      margin-right: 0;
    }

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
  height: var(--app-height);
  background-color: $white;
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  z-index: 99;
  .container {
    display: flex;
    @media (max-width: 810px) {
      flex-direction: column;
      align-items: center;
      height: calc(var(--app-height) - 78px - 50px);
      margin-top: auto;
      justify-content: center;
    }
    @media (max-width: 600px) {
      height: calc(var(--app-height) - 78px - 25px);
    }
    @media only screen and (max-device-width: 1024px) and (orientation: landscape) and (-webkit-min-device-pixel-ratio: 2) {
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      height: calc(var(--app-height) - 78px - 25px);
      margin-top: auto;
    }
    ul:first-child {
      margin-right: 250px;
      @media (max-width: 810px) {
        margin-right: 0;
        margin-bottom: 0;
      }
    }
  }
  ul {
    &.desktop {
      @media (max-width: 810px) {
        display: none;
      }
      @media only screen and (max-device-width: 1024px) and (orientation: landscape) and (-webkit-min-device-pixel-ratio: 2) {
        display: block;
      }
    }
    li {
      margin-bottom: 80px;
      position: relative;
      @include max-w-laptop() {
        margin-bottom: 50px;
      }
      @media (max-width: 810px) {
        margin-bottom: 84px;
      }
      @media (max-width: 600px) {
        margin-bottom: 40px;
      }
      @media only screen and (max-device-width: 1024px) and (orientation: landscape) and (-webkit-min-device-pixel-ratio: 2) {
        margin-bottom: 30px;
      }
      &.mobile {
        display: none;
        @media (max-width: 810px) {
          display: block;
        }
        @media only screen and (max-device-width: 1024px) and (orientation: landscape) and (-webkit-min-device-pixel-ratio: 2) {
          display: none;
        }
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
        @media (max-width: 380px) {
          top: -20px;
        }
        @media only screen and (max-device-width: 1024px) and (orientation: landscape) and (-webkit-min-device-pixel-ratio: 2) {
          top: -20px;
        }
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
.fadeFromBottom-enter-active, .fadeFromBottom-leave-active {
  transition: 0.5s opacity ease-in-out, 0.5s transform ease-in-out;
}
.fadeFromBottom-enter, .fadeFromBottom-leave-active {
  opacity: 0;
  transform: translateY(100px);
}
.ru {
  .menu-modal {
    .container {
      @media (max-width: 940px) and (min-width: 811px) {
        justify-content: space-between;
      }
      ul {
        &:first-child {
          @media (max-width: 940px) {
            margin-right: 0;
          }
        }
        li {
          a {
            @media (max-width: 450px) {
              font-size: 36px;
            }
            @media (max-width: 380px) {
              font-size: 32px;
            }
          }
        }
      }
    }
  }
}
</style>
