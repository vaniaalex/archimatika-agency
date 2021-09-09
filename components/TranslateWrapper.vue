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
      default: 'bottom',
    },
    opacity: {
      type: [Number, String],
      default: 0,
    },
    y: {
      type: [Number, String],
      default: '100%',
    },
    x: {
      type: [Number, String],
      default: 0,
    },
    duration: {
      type: Number,
      default: 1,
    },
  },
  mounted() {
    const tl = this.$gsap.timeline({
      scrollTrigger: {
        trigger: this.$refs.wrapper,
        start: `top ${this.start}`,
      },
    })

    tl.from(this.$refs.root, this.duration, {
      opacity: this.opacity,
      y: this.y,
      x: this.x,
      delay: this.delay,
    })
  },
}
</script>
