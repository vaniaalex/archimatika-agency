<template>
  <div ref="root" :class="`animation animation--${name}`">
    <div v-for="idx in countItem" :key="idx" ref="items" class="animation-item">
      <slot v-if="idx === 1" name="item" />
    </div>
    <slot />
    <s-image
      v-if="imageName"
      ref="image"
      class="animation-bg i-cover"
      :src="imageName"
    />
  </div>
</template>

<script>
import SImage from './ui/SImage'
export default {
  name: 'SAnimation',
  components: { SImage },
  props: {
    countItem: {
      type: Number,
      default: 5,
    },
    imageName: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      tl: null,
      root: null,
      items: null,
      image: null,
    }
  },
  mounted() {
    this.root = this.$refs.root
    this.items = this.$refs.items
    this.image = this.$refs.image?.$el

    this.tl = this.gsap.timeline({
      scrollTrigger: {
        trigger: this.root,
        markers: false,
        start: 'center bottom',
      },
    })

    this[this.name]?.()
    // Props name === method name && root class
  },
  methods: {
    btnPlay() {
      const btn = this.$slots.default[0]
      const btnBg = this.findByClass(btn.children, 'btn-bg')

      this.tl
        .from(this.image, { opacity: 0, duration: 3 })
        .from(btn.elm, { scale: 0.3, opacity: 0, duration: 1 }, '<')
        .from(btnBg, { scale: 0.4, opacity: 0, duration: 1 }, '<13%')
        .from(
          this.items,
          {
            width: `40%`,
            height: `40%`,
            stagger: 0.1,
            duration: 1,
          },
          '<'
        )
        .from(
          this.items,
          {
            opacity: 0,
            stagger: 0.1,
            duration: 1,
          },
          '<13%'
        )
    },

    learn() {
      this.tl
        .from(this.image, {
          opacity: 0,
          duration: 2,
        })
        .from(
          this.items,
          {
            left: 0,
            width: '50%',
            height: '60%',
            opacity: 0,
            duration: 1,
            stagger: 0.25,
          },
          '<'
        )
    },
    vertical() {
      this.tl
        .from(this.image, {
          opacity: 0,
          duration: 2,
        })
        .from(
          this.items,
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

    findByClass(children, cls) {
      return children.find((child) => {
        return child.tag && [...child.elm?.classList].includes(cls)
      }).elm
    },
  },
}
</script>

<style scoped lang="scss">
.animation {
  position: relative;
  width: 100%;
  border: 3px solid $white;
  overflow: hidden;
  z-index: 1;

  &:before {
    display: block;
    padding-top: 65%;
    content: '';
  }

  &-item {
    border: inherit;
    position: absolute;
  }

  &--btnPlay {
    max-width: 1200px;
    border-start-start-radius: 4% 6%;
    border-start-end-radius: 33% 50%;
    border-end-start-radius: 4% 6%;
    border-end-end-radius: 33% 50%;

    @include max-w-laptop() {
      max-width: 1000px;
    }

    .animation-item {
      top: 50%;
      transform: translateY(-50%);
      border-start-end-radius: 33% 50%;
      border-end-end-radius: 33% 50%;

      @for $i from 1 through 5 {
        $i_rev: 6 - $i;
        &:nth-child(#{$i_rev}) {
          width: calc(100% - 10% * #{$i});
          height: calc(100% - 10% * #{$i});
          right: calc(20px * #{$i});
          border-start-start-radius: calc(6.6% * #{$i}) calc(10% * #{$i});
          border-end-start-radius: calc(6.6% * #{$i}) calc(10% * #{$i});
          background: opacity($white, calc(0.1 * #{$i}));
        }
      }
    }

    .btn {
      position: absolute;
      top: 50%;
      right: 120px;
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
  }

  &--learn {
    max-width: 1520px;
    border-radius: 150px;

    &:before {
      padding-top: 59%;
    }

    .animation-item {
      top: 50%;
      transform: translateY(-50%);

      @for $i from 1 through 4 {
        &:nth-child(#{$i}) {
          $i_rev: 5 - $i;
          left: calc(20px * #{$i_rev});
          height: calc(100% - 8.8% * #{$i_rev});
          width: calc(100% - 12.5% * #{$i_rev});
          border-radius: calc(150px - 10px * #{$i_rev});
          background: opacity($white, calc(0.1 * #{$i_rev}));
          z-index: $i_rev;
          @if ($i == 1) {
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: shadow($green, 0.3);
          }
        }
      }

      @include max-w-laptop() {
        @for $i from 1 through 4 {
          &:nth-child(#{$i}) {
            @if ($i == 1) {
              width: 700px;
              height: calc(100% - 260px);
            }
            @if ($i == 2) {
              width: 63%;
              height: calc(100% - 180px);
            }
            @if ($i == 3) {
              width: 75%;
              height: calc(100% - 120px);
            }
            @if ($i == 4) {
              width: 87%;
              height: calc(100% - 60px);
            }
          }
        }
      }
    }

    .learn-content {
      max-width: 520px;

      h3 {
        margin-bottom: 50px;
      }

      h5 {
        margin: 50px 0;

        @include max-w-laptop() {
          margin: 30px 0;
        }
      }
    }
  }

  &--vertical {
    margin-left: auto;
    max-width: 610px;
    border-radius: 50% 50% 4.9% 4.9% / 34% 34% 3.2% 3.2%;

    @include max-w-laptop() {
      max-width: 540px;
    }

    &:before {
      padding-top: 151%;
    }

    .animation-item {
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
  }

  &--cube {
    width: 615px;
    border-radius: 100px;
    box-shadow: shadow($green, 0.5);
    transform: rotate(45deg);

    &:before {
      padding-top: 100%;
    }

    .animation-item {
      &:nth-child(1) {
        left: 20px;
        bottom: 20px;
        width: 70%;
        height: 70%;
        border-radius: 80px;
      }

      &:nth-child(2) {
        left: 43px;
        bottom: 43px;
        width: 50%;
        height: 50%;
        border-radius: 60px;
      }
    }
  }

  &--circle {
    max-width: 1130px;
    overflow: visible;

    &:before {
      padding-top: 100%;
      background: radial-gradient(
        79.25% 79.25% at 100% 50%,
        $white 0%,
        opacity($white, 0) 100%
      );
    }

    .animation-bg {
      border-radius: 50%;
    }

    .animation-item {
      top: 50%;
      transform: translateY(-50%);

      &:nth-child(1) {
        width: 55%;
        height: 55%;
        border-radius: 50%;
        right: 72px;
        box-shadow: shadow($green, 0.3);
        background-color: opacity($white, 0.4);
        z-index: 1;
      }
      &:nth-child(2) {
        width: 75%;
        height: 75%;
        border-radius: 50%;
        right: 36px;
        background-color: opacity($white, 0.4);
      }
    }

    .circle-content {
      width: 870px;
      position: absolute;
      top: 50%;
      right: 0;
      transform: translate(45%, -50%);
      z-index: 2;

      h2 {
        margin: 50px 0;
      }
    }
  }
}
</style>
