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
  @media (max-width: 1366px) {
    min-height: 431px;
  }
  @media (max-width: 1024px) {
    min-height: 370px;
    width: 381px;
  }
  @media (max-width: 435px) {
    width: 312px;
    height: 286px;
  }

  .mask {
    mask-image: url("~assets/images/svg/triangle.svg");
    mask-position: center;
    mask-size: contain;
    mask-repeat: no-repeat;
    height: 100%;
    width: 100%;
    min-height: 587px;
    position: relative;
    @media (max-width: 1366px) {
      min-height: 431px;
    }
    @media (max-width: 1024px) {
      min-height: 370px;
    }
    @media (max-width: 435px) {
      width: 312px;
      height: 286px;
    }

    video {
      height: 99%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translateX(-50%) translateY(-50%);
      min-height: calc(100% - 2px);
      width: unset;
      object-fit: cover;
      max-width: 99%;
    }
  }

  .middle-triangle {
    position: absolute;
    width: calc(100% - 26.09%);
    top: 6.47%;
    left: 50%;
    transform: translateX(-50%);
    @media (max-width: 1024px) {
      width: calc(100% - 15.09%);
    }
    @media (max-width: 435px) {
      top: 12.5%;
    }
  }
  .small-triangle {
    position: absolute;
    width: calc(100% - 46.38%);
    top: 12.95%;
    left: 50%;
    transform: translateX(-50%);
    @media (max-width: 1024px) {
      width: calc(100% - 31.09%);
    }
    @media (max-width: 435px) {
      top: 17.5%;
    }
  }
}
</style>
