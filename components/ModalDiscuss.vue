<template>
  <div class='modal-form'>
    <div class='container page'>
      <div class='column'>
        <h3>Let’s Discuss</h3>
        <div class='close' @click='close'>
          <img src='~/assets/images/svg/close-modal.svg' alt=''>
        </div>
        <h3 class='mtTop'>When suits you best?</h3>
        <h5>Time to make this thing official...</h5>
      </div>
      <div class='column calendly'>
        <div
          class='calendly-inline-widget'
          data-url='https://calendly.com/al-dwynn-jobs/test?hide_event_type_details=1&hide_gdpr_banner=1'
        />
        <script
          type='text/javascript'
          src='https://assets.calendly.com/assets/external/widget.js'
          async
        />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ModalDiscuss',
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
  height: 100vh;
  background-color: $white;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 101;

  .container {
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    .calendly {
      margin-right: 110px;
      position: relative;

      .calendly-inline-widget {
        position: absolute !important;
        top: 0;
        right: 0;
        overflow: hidden;
        width: 650px;
        height: 610px;
        border: 3px solid #080708;
        border-radius: 30px;
        background-color: #fff;
      }
    }

    .close {
      position: absolute;
      top: 0;
      right: 0;
    }
  }
}
</style>
