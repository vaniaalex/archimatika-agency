<template>
  <div ref="root" class="anim-play">
    <div class="anim-play-item" />
    <div class="anim-play-item" />
    <div class="anim-play-item" />
    <div class="anim-play-item" />
    <div class="anim-play-item" />
    <div class="anim-play-btn">
      <span class="anim-play-btn-text">Play</span>
      <span class="anim-play-btn-bg" />
    </div>
    <img src="../assets/images/home-one.jpg" alt="" />
  </div>
</template>

<script>
export default {
  name: 'AnimPlay',
  mounted() {
    const root = this.$refs.root
    const child = this.$refs.root.querySelectorAll('.anim-play-item')
    const play = document.querySelectorAll('.anim-play-btn')
    const playBg = document.querySelectorAll('.anim-play-btn-bg')

    const tl = this.$gsap.timeline({
      scrollTrigger: {
        trigger: '.anim-play',
        markers: false,
        start: 'top center',
      },
    })

    tl.from(root, { opacity: 0, duration: 2 })
      .from(play, { scale: 0, duration: 0.7 }, '<')
      .from(playBg, { opacity: 0, duration: 0.7 }, '<10%')
      .from(playBg, { scale: 0.7, duration: 0.7 }, '<75%')
      .from(
        child,
        {
          width: `40%`,
          height: `40%`,
          opacity: 0,
          stagger: 0.2,
          duration: 0.7,
        },
        '<-=10%'
      )
    // child.forEach((el, idx) => {
    //   if (!child[child.length - 2 - idx]) return
    //   const step = 50 + 10 * (idx + 1)
    //   tl.to(
    //     child[child.length - 2 - idx],
    //     {
    //       width: `${step}%`,
    //       height: `${step}%`,
    //       opacity: 1,
    //       ease: 'none',
    //     },
    //     '<20%'
    //   )
    // })
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
  z-index: 1;

  &:before {
    display: block;
    padding-top: 65%;
    content: '';
  }

  &-item {
    border: 3px solid $white;
    border-start-end-radius: 33% 50%;
    border-end-end-radius: 33% 50%;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);

    @for $i from 1 through 5 {
      $i_rev: 6 - $i;
      &:nth-child(#{$i_rev}) {
        width: calc(100% - 10% * #{$i});
        height: calc(100% - 10% * #{$i});
        right: calc(1.7% * #{$i});
        border-start-start-radius: calc(6.6% * #{$i}) calc(10% * #{$i});
        border-end-start-radius: calc(6.6% * #{$i}) calc(10% * #{$i});
        background: opacity($white, calc(0.1 * #{$i}));
      }
    }
  }

  &-btn {
    position: absolute;
    top: 50%;
    right: 10.2%;
    width: 27%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border-radius: 50%;
    transform: translateY(-50%);

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
