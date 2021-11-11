<template>
  <div ref='wrapper' class='triangle-image'>
    <div class='mask'>
      <slot />
    </div>
    <img ref='middleTriangle' alt='' class='middle-triangle' src='~/assets/images/svg/triangle-inner.svg'>
    <img ref='smallTriangle' alt='' class='small-triangle' src='~/assets/images/svg/triangle-inner.svg'>
  </div>
</template>
<script>
export default {
  name: 'SAnimationTriangle',
  mounted() {
    const tl = this.gsap.timeline({
      scrollTrigger: {
        trigger: this.$refs.wrapper,
        start: `center bottom`,
      }
    })
    tl.from(this.$refs.wrapper, {
      duration: 1,
      opacity: 0
    })
    .from([this.$refs.middleTriangle, this.$refs.smallTriangle], {
      duration: 1,
      scale: 0.7,
      stagger: 0.2,
      y: '-30%'
    }, '<0.2')
    setTimeout(() => {
      tl.scrollTrigger.refresh()
    }, 200)
  }
}
</script>
<style lang='scss' scoped>
.triangle-image {
  filter: drop-shadow(0px 0px 30px rgba(156, 245, 11, 0.5));
  min-height: 587px;
  position: relative;
  width: 100%;

  .mask {
    mask-image: url("~assets/images/svg/triangle.svg");
    mask-composite: intersect;
    mask-position: center;
    mask-size: contain;
    mask-repeat: no-repeat;
    height: 100%;
    width: 100%;
    min-height: 587px;

    video {
      height: 99%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translateX(-50%) translateY(-50%);
      min-height: 585px;
      width: unset;
      object-fit: cover;
      max-width: 99%;
    }
  }

  .middle-triangle {
    position: absolute;
    width: calc(100% - 180px);
    top: 38px;
    left: 50%;
    transform: translateX(-50%);
  }
  .small-triangle {
    position: absolute;
    width: calc(100% - 320px);
    top: 76px;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>
