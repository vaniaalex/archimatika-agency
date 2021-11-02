<template>
  <div ref='transitionContainer' class='transition-container'>
    <img src='~/assets/images/transition/6-i_2.png' alt='' class='img'>
    <img src='~/assets/images/transition/5-i_2.png' alt='' class='img'>
    <img src='~/assets/images/transition/4-i_2.png' alt='' class='img'>
    <img src='~/assets/images/transition/3-i_2.png' alt='' class='img'>
    <img src='~/assets/images/transition/2-i_2.png' alt='' class='img'>
    <img src='~/assets/images/transition/1-i_2.png' alt='' class='img'>
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
    this.tl.fromTo([this.$refs.transitionContainer, targets], {
      // eslint-disable-next-line object-shorthand
      y: function(i) {
        if(i === 0 ) {
          return '-100%';
        }
        return `-${20 + (i - 1) * 5}%`
      },
      // eslint-disable-next-line object-shorthand
      height: function (i) {
        if(i === 0) {
          return 'calc(200vw / 1947 * 1175)'
        }
        return 'calc(100vw / 1947 * 1175)'
      }
    }, {
      y: '0%',
      height: 'calc(200vw / 1947 * 1175)',
      // eslint-disable-next-line object-shorthand
      duration: function(i) {
        if(i === 0) {
          return 2.6
        }
        return 2.6 - (i - 1) * 0.3
      },
      ease: 'cubic',
      // eslint-disable-next-line object-shorthand
      stagger: function(i) {
        if(i < 2) {
          return 0
        }
        return 0.3 * (i-1)
      }
    })

    this.start()
  },
  methods: {
    start() {
      this.reverse ? this.tl.reverse() : this.tl.play()
    }
  }
}
</script>
<style lang='scss' scoped>
.transition-container {
  width: 100vw;
  height: calc(200vw / 1947 * 1175);
  position: fixed;
  top: 0;
  left: 0;
  background: transparent;
  z-index: 98;

  img {
    width: 100vw;
    height: calc(100vw / 1947 * 1175);
    position: absolute;
    top: 0;
    left: 0;
  }
}
</style>
