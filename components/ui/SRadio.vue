<template>
  <label :class="classRadio">
    {{ label }}
    <input
      :name="name"
      :checked="isChecked"
      type="radio"
      :value="value"
      @change="$emit('change', value)"
    />
    <span class="s-radio-check">
      <s-svg name="check" />
    </span>
  </label>
</template>

<script>
import SSvg from '../SSvg'
import { isEqual } from '../../helpers'
export default {
  name: 'SRadio',
  components: { SSvg },
  model: {
    prop: 'modelValue',
    event: 'change',
  },
  props: {
    label: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      default: 'radio',
    },
    modelValue: {
      type: [Object, String, Boolean],
      default: () => {},
    },
    value: {
      type: [Object, String, Boolean],
      default: () => {},
    },
  },
  computed: {
    classRadio() {
      return ['s-radio', this.isChecked && 's-radio-active']
    },
    isChecked() {
      if (typeof this.modelValue === 'object') {
        return isEqual({ ...this.value }, { ...this.modelValue })
      } else {
        return this.value === this.modelValue
      }
    },
  },
}
</script>

<style scoped lang="scss">
.s-radio {
  display: inline-flex;
  align-items: center;
  border-radius: 30px;
  padding: 12px 7px 12px 27px;
  border: 3px solid $black;
  background-color: $white;
  cursor: pointer;
  height: 50px;
  font-family: Stolzl Display, sans-serif;
  position: relative;
  transition: 0.3s;
  @include btn_desc();

  &-check {
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 3px solid $black;
    border-radius: 50%;
    margin-left: 17px;
    transition: 0.3s;
    .s-svg {
      transition: 0.3s;
      width: 14px;
      opacity: 0;
      &::v-deep svg path {
        transition: 0.3s;
      }
    }
  }

  &:hover,
  &-active {
    border-color: $green;
    color: $green;

    .s-radio-check {
      border-color: $green;

      .s-svg {
        &::v-deep svg path {
          stroke: $green;
        }
      }
    }
  }

  &-active {
    .s-radio-check {
      .s-svg {
        opacity: 1;
      }
    }
  }

  input {
    display: none;
  }
}
</style>
