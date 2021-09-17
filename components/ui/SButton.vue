<template>
  <component :is="type" :to="to" :class="classButton" @click="$emit('click')">
    <div class="s-button-wrapper">
      <s-svg v-if="icon" :name="icon" class="i-left" />
      <slot />
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
      ]
    },
  },
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
  transition: $transition;
  display: flex;
  align-items: center;
  justify-content: center;

  @include btn_desc();

  &-wrapper {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    transition: $transition;
  }

  &-default {
    &:hover {
      background-color: $green;
    }
  }

  &-icon {
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
    }

    &-left {
      .i-right {
        transform: translateX(100%);
      }

      .s-button-wrapper {
        padding-left: 30px;
      }

      &:hover {
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

    &-right {
      .i-left {
        transform: translateX(-100%);
      }

      .s-button-wrapper {
        padding-right: 30px;
      }

      &:hover {
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

  &-size {
    &-small {
      height: 46px;
    }

    &-big {
      height: 130px;
      @include btn_big_desc();

      &:hover {
        background-color: $green;
        transform: scale(0.9);
      }
    }
  }

  &-full-width {
    width: 100%;
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
</style>
