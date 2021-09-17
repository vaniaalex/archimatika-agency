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
import { isEqual } from '../../helpers'
import SSvg from './SSvg'
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
$transition: 0.5s;
.s-radio {
  display: inline-flex;
  align-items: center;
  border-radius: 30px;
  padding: 15px 10px 15px 30px;
  background-color: $white;
  cursor: pointer;
  height: 50px;
  font-family: Stolzl Display, sans-serif;
  position: relative;
  transition: $transition;
  overflow: hidden;
  @include btn_desc();

  &:before {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    pointer-events: none;
    content: '';
    border: 3px solid $black;
    box-sizing: border-box;
    border-radius: 30px;
    transition: inherit;
  }

  &-check {
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    margin-left: 17px;
    transition: $transition;
    background-color: $white;
    position: relative;
    border: 3px solid $black;
    //
    //&:before {
    //  position: absolute;
    //  left: 50%;
    //  top: 50%;
    //  transform: translate(-50%, -50%);
    //  width: 100%;
    //  height: 100%;
    //  pointer-events: none;
    //  content: '';
    //  box-sizing: border-box;
    //  border-radius: 50%;
    //  transition: inherit;
    //}

    .s-svg {
      transition: $transition;
      width: 14px;
      opacity: 0;
      &::v-deep svg path {
        transition: $transition;
      }
    }
  }

  &:hover,
  &-active {
    background-color: $green;

    &:before {
      // transform: translate(-50%, -50%) scale(1.07, 1.2);
      border-color: $green;
    }

    .s-radio-check {
      border-color: $white;
      //&:before {
      //  transform: translate(-50%, -50%) scale(1.3);
      //}
    }

    //border-color: $green;
    //color: $green;
    //
    //.s-radio-check {
    //  border-color: $green;
    //
    //  .s-svg {
    //    &::v-deep svg path {
    //      stroke: $green;
    //    }
    //  }
    //}
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
