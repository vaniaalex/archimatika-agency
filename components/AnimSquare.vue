<template>
  <div ref="root" class="anim-square">
    <div class="anim-square-item">
      <div class="content-square">
        <h3>Openness to innovation From sketch to launch</h3>
        <h5>
          Setting up a good plan, adjusting it throughout the project, and
          sharing the same vision within the whole team is the key to the
          successful and smooth launch.
        </h5>
        <s-button color="green">Learn more about our services</s-button>
      </div>
    </div>

    <div class="anim-square-item" />
    <div class="anim-square-item" />
    <div class="anim-square-item" />

    <img src="../assets/images/home-three.jpg" alt="" />
  </div>
</template>

<script>
import SButton from './ui/SButton'
export default {
  name: 'AnimSquare',
  components: { SButton },
  mounted() {
    const root = this.$refs.root
    const child = [...this.$refs.root.querySelectorAll('.anim-square-item')]

    const tl = this.$gsap.timeline({
      scrollTrigger: {
        trigger: '.anim-square',
        start: 'top center',
      },
    })

    tl.from(root, {
      opacity: 0,
      duration: 2,
    }).from(
      child,
      {
        left: 0,
        width: '50%',
        height: '60%',
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
.anim-square {
  position: relative;
  max-width: 1520px;
  width: 100%;
  border: 3px solid $white;
  border-radius: 150px;
  overflow: hidden;

  &:before {
    display: block;
    padding-top: 59.1%;
    content: '';
  }

  &-item {
    position: absolute;
    border: inherit;
    top: 50%;
    transform: translateY(-50%);

    @for $i from 1 through 4 {
      &:nth-child(#{$i}) {
        $i_rev: 5 - $i;
        left: calc(1.7% * #{$i_rev});
        height: calc(100% - 10% * #{$i_rev});
        width: calc(100% - 12.5% * #{$i_rev});
        border-radius: calc(150px - 10px * #{$i_rev});
        background: opacity($white, calc(0.1 * #{$i_rev}));
        z-index: $i_rev;
        @if ($i == 1) {
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: shadow($green, 0.5);
        }
      }
    }
  }

  .content-square {
    max-width: 520px;

    h5 {
      margin: 50px 0;
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
