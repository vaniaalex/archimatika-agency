<template>
  <div ref="root" class="anim-vertical">
    <div class="anim-vertical-item" />
    <div class="anim-vertical-item" />
    <div class="anim-vertical-item" />
    <div class="anim-vertical-item" />
    <div class="anim-vertical-item" />
    <img src="../assets/images/home-four.jpg" alt="" />
  </div>
</template>

<script>
export default {
  name: 'AnimVertical',
  mounted() {
    const root = this.$refs.root
    const child = this.$refs.root.querySelectorAll('.anim-vertical-item')

    const tl = this.$gsap.timeline({
      scrollTrigger: {
        trigger: '.anim-vertical',
        start: 'top center',
      },
    })

    tl.from(root, {
      opacity: 0,
      duration: 2,
    }).from(
      child,
      {
        width: '50%',
        height: '50%',
        opacity: 0,
        duration: 1,
        stagger: 0.2,
      },
      '<'
    )
  },
}
</script>

<style scoped lang="scss">
.anim-vertical {
  position: relative;
  max-width: 610px;
  width: 100%;
  border: 3px solid $white;
  border-radius: 50% 50% 4.9% 4.9% / 34% 34% 3.2% 3.2%;
  overflow: hidden;
  z-index: 1;

  &:before {
    display: block;
    padding-top: 151%;
    content: '';
  }

  &-item {
    border: inherit;
    border-radius: inherit;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);

    @for $i from 1 through 5 {
      $radiusX: calc(4.9% * 2 * #{$i});
      $radiusY: calc(3.4% * 2 * #{$i});

      $i_rev: 6 - $i;

      &:nth-child(#{$i_rev}) {
        top: calc(1.7% * #{$i});
        width: calc(100% - 10% * #{$i});
        height: calc(100% - 10% * #{$i});
        border-radius: 50% 50% $radiusX $radiusX / 34% 34% $radiusY $radiusY;
      }
    }
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
  }
}
</style>
