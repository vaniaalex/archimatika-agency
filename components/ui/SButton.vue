<template>
  <component :is='type' ref='btnBigg' :class='classButton' :to='to' @click="$emit('click')" >
    <div class="s-button-wrapper" :data-text='$slots.default[0].text'>
      <s-svg v-if="icon" :name="icon" class="i-left" />
      <span><slot /></span>
      <s-svg v-if="icon" :name="icon" class="i-right" />
    </div>
  </component>
</template>

<script>
import SSvg from './SSvg'
export default {
  name: 'SButton',
  components: { SSvg },
  props: {
    to: {
      type: String,
      default: null,
    },
    icon: {
      type: String,
      default: null,
    },
    iconPosition: {
      type: String,
      default: 'right',
    },
    color: {
      type: String,
      default: 'default',
    },
    size: {
      type: String,
      default: null,
    },
    border: {
      type: Boolean,
      default: false,
    },
    fWidth: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      tlButton: null
    }
  },
  computed: {
    type() {
      return this.to ? 'router-link' : 'button'
    },
    classButton() {
      return [
        's-button',
        `s-button-${this.color}`,
        this.border && 's-button-border',
        this.fWidth && 's-button-full-width',
        this.size && `s-button-size-${this.size}`,
        this.icon && `s-button-icon s-button-icon-${this.iconPosition}`,
        !(this.size === 'big') && !this.icon ? 's-button-hover' : ''
      ]
    },
  },
  mounted() {
    if(this.size === 'big') {
      this.tlButton = this.gsap.timeline(
        {
          scrollTrigger: {
            trigger: this.$refs.btnBigg,
            start: 'bottom bottom+=200px'
          }
        }
      )
      this.tlButton.fromTo(this.$refs.btnBigg,
        { opacity: 0, width: '10%' },
        {
          width: '100%',
          opacity: 1,
          transformOrigin: 'center center',
          duration: 0.5})
      setTimeout(() => {
        this.tlButton.scrollTrigger.refresh()
      }, 400)
    }
  }
}
</script>

<style scoped lang="scss">
$transition: 0.7s;

.s-button {
  padding: 0 40px;
  height: 80px;
  border-radius: 30px;
  border: 3px solid $black;
  background-color: $white;
  cursor: pointer;
  font-family: Stolzl Display, sans-serif;
  white-space: nowrap;
  display: flex;
  align-items: center;
  justify-content: center;
  -webkit-appearance: none;
  color: black;
  @media (max-width: 1120px) {
    height: 46px;
  }


  @include btn_desc();

  &-wrapper {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    transition: $transition padding-left, $transition padding-right;
  }

  &-default {
    @media (min-width: 1280px) {
      &:hover {
        background-color: $green;
      }
    }
  }

  &-icon {
    @media (max-width: 600px) {
      padding: 14px 23px;
      width: 78px;
    }
    .s-svg {
      width: 30px;
      height: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: $transition;
    }

    .i-left {
      padding-right: 10px;
      position: absolute;
      left: 0;
    }

    .i-right {
      padding-left: 10px;
      position: absolute;
      right: 0;
      @media (max-width: 600px) {
        padding: 0;
        width: 20px;
        right: 50%;
        transform: translateX(50%);
      }
    }

    &-left {
      .i-right {
        transform: translateX(100%);
        @media (max-width: 700px) {
          display: none;
        }
      }

      .s-button-wrapper {
        padding-left: 30px;
      }

      &:hover {
        @media (min-width: 1280px) {
          .s-button-wrapper {
            padding-left: 0;
            padding-right: 30px;
          }

          .i-left {
            transform: translateX(-100%);
          }

          .i-right {
            transform: translateX(0%);
          }
        }
      }
    }

    &-right {
      .i-left {
        transform: translateX(-100%);
        @media (max-width: 600px) {
          display: none;
        }
      }

      .s-button-wrapper {
        padding-right: 30px;
        @media (max-width: 600px) {
          overflow: visible;
        }
        span {
          @media (max-width: 600px) {
            display: none;
          }
        }
      }

      &:hover {
        @media (min-width: 1280px) {
          .s-button-wrapper {
            padding-right: 0;
            padding-left: 30px;
          }

          .i-left {
            transform: translateX(0%);
          }

          .i-right {
            transform: translateX(100%);
          }
        }
      }
    }
  }

  &-size {
    &-small {
      height: 46px;
    }

    &-big {
      height: 130px;
      width: 100%;
      transition: 0.5s background-color ease-in-out, 0.5s transform ease-in-out;
      @include btn_big_desc();
      margin-left: auto;
      margin-right: auto;
      @media (max-width: 1120px) {
        height: 90px;
        font-size: 24px;
        line-height: 30px;
      }
      @media (max-width: 600px) {
        font-size: 16px;
        line-height: 21.34px;
        height: 75px;
        border-radius: 20px;
      }

      &:hover {
        @media (min-width: 1280px) {
          background-color: $green;
          transform: scale(0.9);
        }
      }
    }
  }

  &-full-width {
    width: 100%;
    padding-left: 0;
    padding-right: 0;
  }

  &-green {
    border-color: $green;
    background-color: $green;
  }

  &-blue {
    border-color: $blue;
    background-color: $blue;
  }

  &-border {
    background-color: $white;
  }
}
.s-button-hover {
  .s-button-wrapper {
    overflow: hidden;
    position: relative;
    span {
      transition: 0.7s transform ease-out;
    }
    &:before {
      content: attr(data-text);
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%) translateX(calc(-100% - 20px));
      transition: 0.7s transform ease-out;
    }
  }
  &:hover {
    @media (min-width: 1280px) {
      .s-button-wrapper {
        span {
          transform: translateX(calc(100% + 20px));
        }
        &:before {
          transform: translateY(-50%) translateX(0);
        }
      }
    }
  }
}
.link.s-button {
  @media (max-width: 1024px) {
    span {
      font-size: 12px;
    }
  }
}
</style>
