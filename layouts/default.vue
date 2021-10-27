<template>
  <div>
    <s-preloader />
    <s-header />
    <Nuxt />
    <footer>
      <div class='container'>
        <div class='row'>
          <div class='col'>
            <s-svg name='logo-top' />
            <h4>Phone</h4>
            <a class='tel' href='tel:+375 33 62 5555 6'>+375 33 62 5555 6</a>
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
                <router-link to='/services'>Web Design & Development</router-link>
                <router-link to='/services'>Custom map</router-link>
                <router-link to='/services'>Property Websites</router-link>
              </div>
              <div class='col'>
                <router-link to='/services'>WOW sites</router-link>
                <router-link to='/services'>Branding & Identity</router-link>
                <router-link to='/services'>Renderings</router-link>
              </div>
            </div>
          </div>

          <div class='col'>
            <div class='row'>
              <div class='col'>
                <h4>Products</h4>
                <router-link to='/products/real-estate'>Real estate</router-link>
                <router-link to='/products/industrial-process'>Industrial</router-link>
              </div>
              <div class='col'>
                <h4><br /></h4>
                <!--                <router-link to="#">Expertise</router-link>-->
                <router-link to='/contacts'>Contacts</router-link>
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
  mounted() {
    this.scrollTop()
  },
  methods: {
    scrollTop() {
      if (process.client) {
        window.scroll(0, 0)
      }
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

    & > .col {
      margin-right: 120px;

      @include max-w-laptop() {
        margin-right: 0px;
      }

      .col {
        margin-right: 55px;

        @include max-w-laptop() {
          margin-right: 70px;

          &:last-child {
            margin-right: 0;
          }
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
</style>
