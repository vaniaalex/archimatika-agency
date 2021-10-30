<template>
  <div ref='transitionContainer' class='transition-container'>
    <img src='~/assets/images/transition/6-i.svg' alt=''>
    <img src='~/assets/images/transition/5-i.svg' alt=''>
    <img src='~/assets/images/transition/4-i.svg' alt=''>
    <img src='~/assets/images/transition/3-i.svg' alt=''>
    <img src='~/assets/images/transition/2-i.svg' alt=''>
    <img src='~/assets/images/transition/1-i.svg' alt=''>
  </div>
</template>
<script>
export default {
  name: 'STransition',
  props: {
    reverse: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      tl: null
    }
  },
  watch: {
    reverse() {
      this.start()
    }
  },
  mounted() {
    const self = this
    const targets = this.$refs.transitionContainer.getElementsByTagName('img')
    this.tl = this.gsap.timeline({
      paused: true
    })
    this.tl.from(targets, {
      y: '-100%',
      duration: 1.5,
      stagger: 0.2
    })
    this.tl.to(targets, {
      scaleY: 1.5,
      stagger: 0.2,
      ease: 'linear',
      /* eslint-disable-next-line object-shorthand */
      duration: function(i) {
        return 1.2 - i * 0.100
      }
    }, '<0.3')
    this.start()
  },
  methods: {
    start() {
      this.reverse ? this.tl.reverse() : this.tl.play()
    },
  }
}
</script>
<style lang='scss' scoped>
.transition-container {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  overflow: hidden;
  background: transparent;
  z-index: 98;
  img {
    width: 100%;
    height: auto;
    position: absolute;
    top: 0;
    left: 0;
  }
}
</style>
