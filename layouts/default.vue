<template>
  <div>
    <s-preloader />
    <s-header />
    <Nuxt />
    <footer :class='{contact: $route.path === "/contacts"}'>
      <div class='container'>
        <div class='row'>
          <div class='col'>
            <s-svg name='logo-top' />
            <h4>General</h4>
            <a class='mail' href='mailto:hallo@archimatika.agency'>
              hallo@archimatika.agency
            </a>
            <h4>New Business</h4>
            <a class='mail' href='mailto:thomas@archimatika.agency'>
              thomas@archimatika.agency
            </a>
          </div>
          <div class='col'>
            <h4>Services</h4>
            <div class='row'>
              <div class='col'>
                <a
                  @click.prevent='$route.path !== "/services" ? goToPage("/services?section=web-design") : goToService("web-design")'>Web
                  Design & Development</a>
                <a
                  @click.prevent='$route.path !== "/services" ? goToPage("/services?section=interactive-map") : goToService("interactive-map")'>Custom
                  map</a>
                <a
                  @click.prevent='$route.path !== "/services" ? goToPage("/services?section=property-websites") : goToService("property-websites")'>Property
                  Websites</a>
              </div>
              <div class='col'>
                <a
                  @click.prevent='$route.path !== "/services" ? goToPage("/services?section=wow-websites") : goToService("wow-websites")'>WOW
                  sites</a>
                <a
                  @click.prevent='$route.path !== "/services" ? goToPage("/services?section=branding") : goToService("branding")'>Branding
                  & Identity</a>
                <a
                  @click.prevent='$route.path !== "/services" ? goToPage("/services?section=rendering") : goToService("rendering")'>Renderings</a>
              </div>
            </div>
          </div>

          <div class='col'>
            <div class='row'>
              <div class='col'>
                <h4>Products</h4>
                <a @click.prevent='goToPage("products/real-estate")'>Real estate</a>
                <a @click.prevent='goToPage("/products/industrial-process")'>Industrial</a>
              </div>
              <div class='col'>
                <h4><br /></h4>
                <a @click.prevent='goToPage("/contacts")'>Contacts</a>
              </div>
            </div>
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
  watch: {
    $route() {
      this.scrollTop()
    }
  },
  created() {
    if(process.client) {
      // eslint-disable-next-line nuxt/no-globals-in-created
      window.addEventListener('resize', this.resize)
    }
  },
  mounted() {
    this.scrollTop()
    this.resize()
  },
  methods: {
    scrollTop() {
      if (process.client) {
        window.scroll(0, 0)
      }
    },
    resize() {
      if(process.client) {
        if(window.innerWidth > 1120) {
          this.$store.dispatch('setMobile', false)
        }
        else {
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
    justify-content: space-between;


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
      margin-right: 120px;
      .row {
        @media (max-width: 1280px) {
          flex-direction: column;
        }
      }
      @include max-w-laptop() {
        margin-right: 0px;
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
        margin-right: 55px;

        @include max-w-laptop() {
          margin-right: 70px;

          &:last-child {
            margin-right: 0;
          }
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
    margin-top: 30px;
    margin-bottom: 10px;
    @media (max-width: 1280px) {
      br {
        display: none;
      }
    }
  }

  a {
    margin-top: 10px;
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
