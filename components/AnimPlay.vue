<template>
  <div ref="root" class="anim-play">
    <img src="../assets/images/home-one.jpg" alt="" />
    <div class="child-list">
      <div class="child-item" />
      <div class="child-item" />
      <div class="child-item" />
      <div class="child-item" />
      <div class="child-item" />
    </div>
    <div class="btn-play">
      <span class="btn-play-text">Play</span>
      <span class="btn-play-bg" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'AnimPlay',
  mounted() {
    const root = this.$refs.root
    const child = this.$refs.root.querySelectorAll('.child-item')
    const play = document.querySelectorAll('.btn-play')
    const playBg = document.querySelectorAll('.btn-play-bg')

    const tl = this.$gsap.timeline({
      scrollTrigger: {
        trigger: '.anim-play',
        markers: false,
        start: 'top center',
      },
    })

    tl.to(root, { opacity: 1, duration: 1 })
      .to(play, { scale: 1 }, '<')
      .to(playBg, { opacity: 1 }, '<10%')
      .to(playBg, { scale: 1 }, '<80%')

    tl.to(
      child[4],
      {
        width: `50%`,
        height: `50%`,
        opacity: 1,
        ease: 'none',
      },
      '<'
    )
    child.forEach((el, idx) => {
      if (!child[child.length - 2 - idx]) return
      const step = 50 + 10 * (idx + 1)
      tl.to(
        child[child.length - 2 - idx],
        {
          width: `${step}%`,
          height: `${step}%`,
          opacity: 1,
          ease: 'none',
        },
        '<20%'
      )
    })
  },
}
</script>

<style scoped lang="scss">
.anim-play {
  position: relative;
  max-width: 1200px;
  width: 100%;
  border: 3px solid $white;
  border-start-start-radius: 4% 6%;
  border-start-end-radius: 33% 50%;
  border-end-start-radius: 4% 6%;
  border-end-end-radius: 33% 50%;
  overflow: hidden;
  opacity: 0;

  &:before {
    display: block;
    padding-top: 65%;
    content: '';
  }

  .child-list {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }

  .child-item {
    border: 3px solid $white;
    border-start-end-radius: 33% 50%;
    border-end-end-radius: 33% 50%;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 40%;
    height: 40%;
    opacity: 0;
  }

  @for $i from 1 through 5 {
    .child-item:nth-child(#{$i}) {
      right: calc(1.7% * #{$i});
      border-start-start-radius: calc(6.6% * #{$i}) calc(10% * #{$i});
      border-end-start-radius: calc(6.6% * #{$i}) calc(10% * #{$i});
      background: opacity($white, calc(0.1 * #{$i}));
    }
  }

  .btn-play {
    position: absolute;
    top: 50%;
    right: 10.2%;
    width: 27%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border-radius: 50%;
    transform: translateY(-50%) scale(0);

    &:before {
      display: block;
      padding-top: 100%;
      content: '';
    }

    &-text {
      @include h2_desc();
      font-weight: bold;
      font-family: Stolzl Display, sans-serif;
    }

    &-bg {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background-color: opacity($white, 0.6);
      border: 3px solid $white;
      box-shadow: shadow($green, 0.5);
      z-index: -1;
      opacity: 0;
      transform: scale(0.7);
    }
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    left: 0;
    top: 0;
  }
}
</style>
