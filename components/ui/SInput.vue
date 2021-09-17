<template>
  <label class="s-input">
    {{ label }}
    <input
      v-bind="$attrs"
      type="text"
      :value="modelValue"
      @input="$emit('input', $event.target.value)"
    />
  </label>
</template>

<script>
export default {
  name: 'SInput',
  inheritAttrs: true,
  model: {
    event: 'input',
    prop: 'modelValue',
  },
  props: {
    modelValue: {
      type: [String, Number],
      default: '',
    },
    label: {
      type: String,
      default: '',
    },
  },
}
</script>

<style scoped lang="scss">
.s-input {
  position: relative;
  display: block;

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

  input {
    width: 100%;
    border: none;
    height: 46px;
    padding: 0 10px;
    background-color: $white;

    @include default_desc();
  }
}
</style>
