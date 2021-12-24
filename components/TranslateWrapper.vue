<template>
  <div ref="wrapper" class="translate-wrapper">
    <div ref="root">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'TranslateWrapper',
  props: {
    delay: {
      type: [Number, String],
      default: 0,
    },
    start: {
      type: String,
      default: 'top',
    },
    opacity: {
      type: [Number, String],
      default: 0,
    },
    y: {
      type: [Number, String],
      default: '100px',
    },
    x: {
      type: [Number, String],
      default: 0,
    },
    duration: {
      type: Number,
      default: 1,
    },
    mobile: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      tl: null
    }  },
  mounted() {
    const self = this
    this.tl = this.gsap.timeline({
      scrollTrigger: {
        trigger: this.$refs.wrapper,
        start: 'top bottom',
        toggleActions: 'play none none reset'
      },
    })

    let useless = false
    // eslint-disable-next-line nuxt/no-env-in-hooks
    if(process.client) {
      if(window.innerWidth < 1120 && !this.mobile) {
        useless = true
      }
      else {
        this.tl.from(this.$refs.root, {
          duration: this.duration,
          opacity: this.opacity,
          y: this.y,
          x: this.x,
          delay: this.delay,
        })
        setTimeout(() => {
          self.tl.scrollTrigger.refresh()
        }, 400)
      }
    }

  },
  beforeDestroy() {
    this.tl.pause().kill()
  }
}
</script>
