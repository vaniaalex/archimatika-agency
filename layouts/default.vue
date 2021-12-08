<template>
  <div>
    <s-preloader />
    <s-header />
    <Nuxt />
    <footer :class='{contact: $route.path === "/contacts"}'>
      <div class='container'>
        <s-svg name='logo-top' class='tablet' />
        <div class='row'>
          <div class='col first'>
            <s-svg name='logo-top' class='desktop' />
            <h4>{{ footer.general }}</h4>
            <a class='mail' :href='`mailto:${footer.email}`'>
              {{ footer.email }}
            </a>
            <!--            <h4>New Business</h4>-->
            <!--            <a class='mail' href='mailto:thomas@archimatika.agency'>-->
            <!--              thomas@archimatika.agency-->
            <!--            </a>-->
          </div>
          <div class='col'>
            <h4>{{ footer.services.title }}</h4>
            <div class='row'>
              <div class='col'>
                <a
                  v-for='item in footer.services.links1'
                  :key='item._link'
                  @click.prevent='$route.path !== "/services" ? goToPage(`/services?section=${item._link}`) : goToService(item._link)'>{{ item.title
                  }}</a>
              </div>
              <div class='col'>
                <a
                  v-for='item in footer.services.links2'
                  :key='item._link'
                  @click.prevent='$route.path !== "/services" ? goToPage(`/services?section=${item._link}`) : goToService(item._link)'>{{ item.title
                  }}</a>
              </div>
            </div>
          </div>

          <div class='col'>
            <div class='row'>
              <div class='col'>
                <h4>{{ footer.products.title }}</h4>
                <a v-for='item in footer.products.links' :key='item._link'
                   @click.prevent='goToPage(item._link)'>{{ item.title }}</a>
                <a class='tablet' @click.prevent='goToPage("/contacts")'>{{ footer.products.contact }}</a>
              </div>

            </div>
          </div>
          <div class='col desktop'>
            <h4><br /></h4>
            <a @click.prevent='goToPage("/contacts")'>{{ footer.products.contact }}</a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import SHeader from '../components/SHeader'
import SSvg from '../components/ui/SSvg'
import SPreloader from '../components/SPreloader'

export default {
  components: { SPreloader, SSvg, SHeader },
  layout: 'default',
  computed: {
    footer() {
      return this.$store.state.footer
    }
  },
  watch: {
    $route() {
      this.scrollTop()
    }
  },
  created() {
    if (process.client) {
      // eslint-disable-next-line nuxt/no-globals-in-created
      window.addEventListener('resize', this.resize)
    }
  },
  mounted() {
    function canUseWebP() {
      const elem = document.createElement('canvas')
      // eslint-disable-next-line no-extra-boolean-cast
      if (!!(elem.getContext && elem.getContext('2d'))) {
        // was able or not to get WebP representation
        // eslint-disable-next-line eqeqeq
        return elem.toDataURL('image/webp').indexOf('data:image/webp') == 0
      }
      // very old browser like IE 8, canvas not supported
      return false
    }

    // eslint-disable-next-line nuxt/no-env-in-hooks
    if (process.client) {
      if (canUseWebP()) {
        this.$store.dispatch('setWebp', true)
        document.body.classList.add('webp')
        const imgUrl = this.$img('/images/home-two.jpg', { format: 'webp' })
        document.documentElement.style.cssText = `--bghome: url('${imgUrl}')`
      } else {
        this.$store.dispatch('setWebp', false)
        const imgUrl = this.$img('/images/home-two.jpg', {})
        document.documentElement.style.cssText = `--bghome: url('${imgUrl}')`
      }
      if (this.$store.state.lang === 1) {
        document.body.classList.add('ru')
      }
    }
    this.scrollTop()
    this.resize()
    this.disableZoom()

  },
  methods: {
    scrollTop() {
      if (process.client) {
        window.scroll(0, 0)
      }
    },
    resize() {
      if (process.client) {
        const doc = document.documentElement
        doc.style.setProperty('--app-height', `${window.innerHeight}px`)
        if (window.innerWidth > 1120) {
          this.$store.dispatch('setMobile', false)
        } else {
          this.$store.dispatch('setMobile', true)
        }
      }
    },
    goToPage(page) {
      this.$store.dispatch('setNextPage', page)
      this.$store.dispatch('setPageTransition', true)
    },
    goToService(id) {
      this.$store.dispatch('setServiceId', id)
    },
    disableZoom() {
      /* eslint-disable */
      (function(w) {

        var ua = navigator.userAgent
        if (!(/iPhone|iPad|iPod/.test(navigator.platform) && /OS [1-5]_[0-9_]* like Mac OS X/i.test(ua) && ua.indexOf('AppleWebKit') > -1)) {
          return
        }

        var doc = w.document
        if (!doc.querySelector) {
          return
        }

        var meta = doc.querySelector('meta[name=viewport]')
        var initialContent = meta && meta.getAttribute('content')
        var disabledZoom = initialContent + ',maximum-scale=1'
        var enabledZoom = initialContent + ',maximum-scale=10'
        var enabled = true
        var x, y, z, aig

        if (!meta) {
          return
        }

        function restoreZoom() {
          meta.setAttribute('content', enabledZoom)
          enabled = true
        }

        function disableZoom() {
          meta.setAttribute('content', disabledZoom)
          enabled = false
        }

        function checkTilt(e) {
          aig = e.accelerationIncludingGravity
          x = Math.abs(aig.x)
          y = Math.abs(aig.y)
          z = Math.abs(aig.z)

          if ((!w.orientation || w.orientation === 180) && (x > 7 || ((z > 6 && y < 8 || z < 8 && y > 6) && x > 5))) {
            if (enabled) {
              disableZoom()
            }
          } else if (!enabled) {
            restoreZoom()
          }
        }

        w.addEventListener('orientationchange', restoreZoom, false)
        w.addEventListener('devicemotion', checkTilt, false)

      })(this)
    }
  }
}
</script>

<style scoped lang='scss'>
footer {
  padding-bottom: 48px;
  padding-top: 147px;
  background-color: $white;

  .s-svg {
    max-width: 170px;
    margin-bottom: 20px;
  }

  .tel,
  .mail {
    @include h5_desc();
  }

  .container > .row {
    justify-content: flex-start;
    @media (max-width: 1366px) {
      justify-content: space-between;
    }


    a {
      transition: 0.3s color ease-in-out;
      cursor: pointer;

      &:hover {
        @media (min-width: 1280px) {
          color: #9CF50B;
        }
      }
    }

    & > .col {
      margin-right: 100px;

      &:last-child {
        margin-right: 0;
      }

      .row {

        @media (max-width: 1280px) {
          flex-direction: column;
        }
      }

      @include max-w-laptop() {
        margin-right: 100px;
      }
      @media (max-width: 1366px) {
        margin-right: 0;
      }

      &:first-child {
        @media (max-width: 700px) {
          width: 100%;
          margin-bottom: 60px;
        }
      }

      &:nth-child(2) {
        @media (max-width: 360px) {
          width: 100%;
          margin-bottom: 60px;
        }
      }

      .col {
        margin-right: 80px;

        &:last-child {
          margin-right: 0;
        }

        @include max-w-laptop() {
          margin-right: 70px;

          &:last-child {
            margin-right: 0;
          }
        }
        @media (max-width: 1366px) {
          margin-right: 40px;
        }
        @media (max-width: 810px) {
          margin-right: 0;
        }
      }
    }
  }

  .col {
    display: flex;
    flex-direction: column;
  }

  h4:first-child {
    margin-top: 0;
  }

  h4 {
    margin-top: 20px;
    margin-bottom: 0;
    @media (max-width: 900px) {
      br {
        display: none;
      }
    }
  }

  a {
    margin-top: 10px;
  }

  .first a {
    margin-top: 0;
  }

  .tablet {
    display: none;
  }

  @media (max-width: 900px) {
    .tablet {
      display: block;
      margin-top: 20px;
    }
    .desktop {
      display: none;
    }
  }
}
</style>
<style>
.mb-1 {
  margin-bottom: 10px;
}

.mt-200 {
  margin-top: 200px;
}

@media (max-width: 1366px) {
  .mt-200 {
    margin-top: 100px;
  }
}

@media (max-width: 600px) {
  footer.contact {
    display: none;
  }
}
</style>
<style lang='scss'>
br.noMobile {
  @media (max-width: 700px) {
    display: none;
  }
}

br.mobile {
  display: none;
  @media (max-width: 700px) {
    display: block;
  }
}

br.mobile-mobile {
  display: none;
  @media (max-width: 600px) {
    display: block;
  }
}

br.medium-to-mobile {
  display: none;
  @media (max-width: 1680px) and (min-width: 601px) {
    display: block;
  }
}

br.small-to-big-mobile {
  display: none;
  @media (max-width: 1024px) and (min-width: 700px) {
    display: block;
  }
}

br.small-to-mobile {
  display: none;
  @media (max-width: 1024px) and (min-width: 600px) {
    display: block;
  }
}

br.small-to-small {
  display: none;
  @media (max-width: 1366px) and (min-width: 1020px) {
    display: block;
  }
}

br.medium-to-medium {
  display: none;
  @media (max-width: 1680px) and (min-width: 1367px) {
    display: block;
  }
}

br.small-medium-to-mobile {
  display: none;
  @media (max-width: 1120px) and (min-width: 700px) {
    display: block;
  }
}

br.small-medium-to-mobile-small {
  display: none;
  @media (max-width: 1120px) and (min-width: 600px) {
    display: block;
  }
}

br.mobile-to-mobile-small {
  display: none;
  @media (max-width: 430px) and (min-width: 375px) {
    display: block;
  }
}

br.big-to-medium {
  display: none;
  @media (max-width: 1680px) and (min-width: 1366px) {
    display: block;
  }
}

br.big-to-giant {
  display: none;
  @media (min-width: 1681px) {
    display: block;
  }
}

br.medium-to-giant {
  display: none;
  @media (min-width: 1367px) {
    display: block;
  }
}

br.small-to-giant {
  display: none;
  @media (min-width: 1024px) {
    display: block;
  }
}

br.big-small-to-big {
  display: none;
  @media (min-width: 1120px) and (max-width: 1680px) {
    display: block;
  }
}
</style>
