<template>
  <div :class="['s-toast', `s-toast-${type}`]">
    <s-svg :name="getImage()" />
    <h5>{{ message.title }}</h5>
    <p>{{ message.desc }}</p>
  </div>
</template>

<script>
import SSvg from './SSvg'
export default {
  name: 'SToast',
  components: { SSvg },
  props: {
    type: {
      type: String,
      default: 'ok', // ok, warn, error
    },
    message: {
      type: Object,
      default: () => ({
        title: 'Your message success!',
        desc: 'Your message success!',
      }),
    },
  },
  mounted() {
    const self = this
    setTimeout(function() {
      self.$store.dispatch('setToastMEssage', {
        title: 'Your message success!',
        desc: 'Your message success!',})
      self.$store.dispatch('setToast', '')
    }, 5000)
  },
  methods: {
    getImage() {
      let name = 'check-toast'
      switch (this.type) {
        case 'error':
          name = 'error-toast'
          break
        case 'warn':
          name = 'warn-toast'
          break
        case 'ok':
          name = 'check-toast'
          break
      }

      return name
    },
  },
}
</script>

<style scoped lang="scss">
.s-toast {
  position: fixed;
  left: 20px;
  right: 20px;
  bottom: 20px;
  padding: 14px 30px;
  background-color: #fff;
  border-radius: 15px;
  display: flex;
  align-items: center;
  z-index: 102;

  h5 {
    margin: 0 20px;
    font-size: 18px;
    font-weight: 500;
    font-family: Stolzl Display, sans-serif;
  }

  p {
    font-size: 14px;
  }

  .s-svg {
    width: 32px;
  }

  &-ok {
    background-color: $green;
  }
  &-warn {
    background-color: $orange;
  }
  &-error {
    background-color: $red;
    color: $white;
  }
}
</style>
