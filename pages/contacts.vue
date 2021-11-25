<template>
  <div class='container page'>
    <div class='title-contacts'>
      <h3>Contacts</h3>
    </div>
    <div class='contacts-block' :style='style'>
      <h2>
        Let’s get down<br> to business!
      </h2>
      <h4>
        Please leave a request<br> or schedule a call <br>with one of our specialists.
      </h4>
      <div class='buttons'>
        <s-button color='green' @click='openDiscuss'>Schedule a call</s-button>
        <s-button color='green'  :border='true' @click='openProject'>Request a proposal</s-button>
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
  data() {
    return {
      style: ''
    }
  },
  created() {
    if (process.client) {
      const self = this
      // eslint-disable-next-line nuxt/no-globals-in-created
      window.addEventListener('resize', function(){
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
</style>
