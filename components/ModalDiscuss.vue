<template>
  <div class='modal-form'>
    <div class='container'>
      <div class='column'>
        <h3 v-html='text.title'></h3>
        <div class='close' @click='close'>
          <img src='~/assets/images/svg/close-modal.svg' alt=''>
        </div>
        <h3 class='mtTop' v-html='text.subtitle'></h3>
        <h5 v-html='text.desc'></h5>
      </div>
      <div v-if='show' class='column calendly'>
        <div
          class='calendly-inline-widget'
          data-url='https://calendly.com/archimatika/meeting-with-archimatika?hide_event_type_details=1&hide_gdpr_banner=1'
        />
        <script
          type='text/javascript'
          src='https://assets.calendly.com/assets/external/widget.js'
          async
        />
      </div>
    </div>
    <div class='overlay'>
      <h2 v-html='text.rotate'></h2>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ModalDiscuss',
  props: {
    show: {
      type: Boolean,
      default: false
    },
    text: {
      type: Object,
      required: true
    }
  },
  methods: {
    close() {
      this.$store.dispatch('setDiscuss', false)
    }
  }
}
</script>
<style lang='scss' scoped>
.mtTop {
  margin-top: 255px;
  margin-bottom: 10px;
}
.modal-form {
  width: 100vw;
  height: var(--app-height);
  background-color: $white;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 101;
  .overlay {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #9cf50b;
    @media only screen and (max-device-width: 900px) and (orientation: landscape) and (-webkit-min-device-pixel-ratio: 2) {
      display: block;
    }
    h2 {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translateX(-50%) translateY(-50%);
    }
  }
  .container {
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    min-height: min(var(--app-height), 100vh);
    height: 100%;
    @media (max-width: 1120px) {
      justify-content: space-between;
    }
    @media (max-width: 600px) {
      max-width: calc(100% - 80px);
      flex-direction: column;
      justify-content: center;
    }
    @media only screen and (max-device-width: 1024px) and (orientation: landscape) and (-webkit-min-device-pixel-ratio: 2) {
      max-width: calc(100% - 80px);
    }


    .column {
      & > * {
        &:nth-child(3), &:nth-child(4) {
          @media (max-width: 600px) {
            display: none;
          }
        }
      }
      @media (max-width: 600px) {
        margin-bottom: 30px;
      }
    }
    .calendly {
      margin-right: 110px;
      position: relative;
      min-width: 610px;
      height: 610px;
      margin-left: 50px;
      @media (max-width: 1120px) {
        min-width: 400px;
        height: 500px;
        margin-right: 0;
      }
      @media (max-width: 600px) {
        margin-left: 0;
        margin-bottom: 0;
        min-width: 100%;
        height: 400px;
      }

      .calendly-inline-widget {
        position: absolute !important;
        top: 0;
        right: 0;
        overflow: hidden;
        width: 610px;
        height: 610px;
        border: 3px solid #080708;
        border-radius: 30px;
        background-color: #fff;
        @media (max-width: 1120px) {
          width: 400px;
          height: 500px;
        }
        @media (max-width: 600px) {
          width: 100%;
          height: 400px;
        }
      }
    }

    .close {
      position: absolute;
      top: 3%;
      right: 0;
      cursor: pointer;
      @media (min-width: 1680px) {
        top: 10%;
      }
    }
  }
}
</style>
