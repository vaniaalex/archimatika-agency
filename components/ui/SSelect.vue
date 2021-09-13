<template>
  <div
    :class="['s-select', { 's-select--open': isOpen }]"
    @click="isOpen = !isOpen"
  >
    <span :class="['s-select-label', { 's-select-label--active': getLabel }]">
      {{ getLabel || label }}
    </span>
    <s-svg name="select" />
    <ul v-if="isOpen" class="s-select-list">
      <li
        v-for="(option, idx) in options"
        :key="idx"
        :class="[
          's-select-item',
          { 's-select-item--active': isActive === idx },
        ]"
        @click="$emit('change', option)"
      >
        {{ getOptionLabel(option) }}
      </li>
    </ul>
  </div>
</template>

<script>
import { isEqual } from '../../helpers'
import SSvg from './SSvg'

export default {
  name: 'SSelect',
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
    labelKey: {
      type: String,
      default: null,
    },
    modelValue: {
      type: [Object, String, Number],
      default: () => {},
    },
    options: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      isOpen: false,
    }
  },
  computed: {
    getLabel() {
      return this.modelValue?.[this.labelKey] || this.modelValue
    },
    isActive() {
      if (this.labelKey) {
        return this.options.findIndex((option) => {
          return isEqual({ ...option }, { ...this.modelValue })
        })
      } else {
        return this.options.findIndex((option) => option === this.modelValue)
      }
    },
  },
  methods: {
    getOptionLabel(option) {
      return option?.[this.labelKey] || option
    },
  },
}
</script>

<style scoped lang="scss">
.s-select {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  height: 46px;
  cursor: pointer;
  user-select: none;

  &--open {
    .s-svg {
      transform: rotate(180deg);
    }
  }

  &:after {
    position: absolute;
    left: 0;
    bottom: 0;
    content: '';
    width: 100%;
    height: 3px;
    background: $black;
    border-radius: 3px;
  }

  &-label {
    color: opacity($black, 0.5);

    &.s-select-label--active {
      color: $black;
    }
  }

  &-list {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: $white;
    transform: translateY(100%);
  }

  &-item {
    padding: 10px;
    transition: 0.3s;

    &.s-select-item-active,
    &:hover {
      background-color: opacity($black, 0.1);
    }
  }
}
</style>
