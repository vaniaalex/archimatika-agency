<template>
  <div class='container page'>
    <div class='title-contacts'>
      <h3 v-html='contacts.heading'></h3>
    </div>
    <div class='contacts-block' :style='style'>
      <h2 v-html='contacts.title'></h2>
      <h4 v-html='contacts.desc'></h4>
      <div class='buttons'>
        <s-button color='green' @click='openDiscuss'>{{ contacts.buttonDiscuss }}</s-button>
        <s-button color='green' :border='true' @click='openProject'>{{ contacts.buttonProject }}</s-button>
      </div>
    </div>

  </div>
</template>
<script>
import SButton from '../components/ui/SButton'

export default {
  components: {
    SButton
  },
  async asyncData(context) {
    const lang = context.store.state.lang
    const contacts = await context.$content(`contacts${lang === 0 ? '' : '_ru'}`).fetch()
    return { contacts }
  },
  data() {
    return {
      style: ''
    }
  },
  created() {
    if (process.client) {
      const self = this
      // eslint-disable-next-line nuxt/no-globals-in-created
      window.addEventListener('resize', function() {
        self.getStyle()
      })
    }
  },
  mounted() {
    this.getStyle()
  },
  methods: {
    openDiscuss() {
      this.$store.dispatch('setDiscuss', true)
    },
    openProject() {
      this.$store.dispatch('setProject', true)
    },
    getStyle() {
      if (process.client) {
        if (window.innerWidth < 1280 && window.innerWidth > 600) {
          const footer = document.getElementsByTagName('footer')[0]
          const footerHeight = footer.offsetHeight
          this.style = `height: ${Math.max(window.innerHeight - footerHeight - 180, window.innerWidth > 1024 ? 350 : 250)}px`
        } else {
          this.style = ''
        }
      }
    }
  }
}
</script>
<style lang='scss' scoped>
.title-contacts {
  margin-bottom: 82px;
  @media (max-width: 1366px) {
    display: none;
  }
}

.contacts-block {
  max-width: 739px;
  margin-left: 131px;
  padding-bottom: 300px;
  @media (max-width: 1536px) {
    padding-bottom: 0;
  }
  @media (max-width: 1366px) {
    margin-left: 92px;
  }
  @media (max-width: 1024px) {
    margin-left: 52px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  @media (max-width: 600px) {
    max-width: 100%;
    margin-left: 0;
    padding-top: 70px;
    display: block;
    min-height: calc(var(--app-height) - 120px);
  }

  h2, h4 {
    margin-bottom: 30px;
  }

  .buttons {
    display: flex;
    @media (max-width: 600px) {
      flex-direction: column;
    }

    button:first-child {
      margin-right: 30px;
      @media (max-width: 600px) {
        margin-right: 0;
        margin-bottom: 30px;
        max-width: 200px;
      }
    }

    button:nth-child(2) {
      @media (max-width: 600px) {
        max-width: 250px;
      }
    }
  }
}
.ru {
  .contacts-block {
    @media (min-width: 1681px) {
      max-width: 1300px;
    }
    .buttons {
      .s-button {
        &:first-child {
          @media (max-width: 600px) {
            max-width: 260px;
          }
        }
        &:last-child {
          @media (max-width: 600px) {
            max-width: 260px;
          }
        }
      }
    }
  }
}
</style>
