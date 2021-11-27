<template>
  <div ref='transitionContainer' class='transition-container'>
    <img v-if='mobile' alt='' class='img' src='~/assets/images/transition/6_3.svg'>
    <img v-if='mobile' alt='' class='img' src='~/assets/images/transition/5_3.svg'>
    <img v-if='mobile' alt='' class='img' src='~/assets/images/transition/4_3.svg'>
    <img v-if='mobile' alt='' class='img' src='~/assets/images/transition/3_3.svg'>
    <img v-if='mobile' alt='' class='img' src='~/assets/images/transition/2_3.svg'>
    <img v-if='mobile' alt='' class='img' src='~/assets/images/transition/1_3.svg'>
    <img v-if='!mobile' alt='' class='img' src='~/assets/images/transition/6-i_2.svg'>
    <img v-if='!mobile' alt='' class='img' src='~/assets/images/transition/5-i_2.svg'>
    <img v-if='!mobile' alt='' class='img' src='~/assets/images/transition/4-i_2.svg'>
    <img v-if='!mobile' alt='' class='img' src='~/assets/images/transition/3-i_2.svg'>
    <img v-if='!mobile' alt='' class='img' src='~/assets/images/transition/2-i_2.svg'>
    <img v-if='!mobile' alt='' class='img' src='~/assets/images/transition/1-i_2.svg'>
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
      tl: null,
      mobile: false
    }
  },
  watch: {
    reverse() {
      this.start()
    }
  },
  mounted() {
    if(window.innerWidth < 1280) {
      this.mobile = true
    }
    const self = this
    const targets = this.$refs.transitionContainer.getElementsByTagName('img')
    this.gsap.config({
      force3D: true
    })
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
        let coef = 2
        if(window.innerWidth < 1280) {
          coef = 1.4
        }
        const height = window.innerHeight
        if(i === 0) {
          return height * coef
        }
        return height
      }
    }, {
      y: '0%',
      height() {
        let coef = 2
        if(window.innerWidth < 1280) {
          coef = 1.4
        }
        const height = window.innerHeight
        return height * coef},
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
  height: max(calc(200vw / 1947 * 1175), 200vh);
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
