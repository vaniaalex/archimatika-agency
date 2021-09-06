<template>
  <component :is="type" :to="to" :class="classButton" @click="$emit('click')">
    <s-svg v-if="icon && iconPosition === 'left'" :name="icon" />
    <slot />
    <s-svg v-if="icon && iconPosition === 'right'" :name="icon" />
  </component>
</template>

<script>
import SSvg from '../SSvg'
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
      default: null,
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
        this.border && 's-button-border',
        this.color && `s-button-${this.color}`,
        this.fWidth && 's-button-full-width',
        this.size && `s-button-size-${this.size}`,
        this.icon && `s-button-icon s-button-icon-${this.iconPosition}`,
      ]
    },
  },
}
</script>

<style scoped lang="scss">
.s-button {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 40px;
  height: 80px;
  border-radius: 30px;
  border: 3px solid $black;
  background-color: $white;
  cursor: pointer;
  font-family: Stolzl Display, sans-serif;
  @include btn_desc();

  &-icon {
    .s-svg {
      width: 20px;
      height: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-left: 10px;
    }

    &-left {
      .s-svg {
        margin-right: 10px;
        margin-left: 0;
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
