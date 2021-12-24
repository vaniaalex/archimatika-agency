<template>
  <label class="s-textarea">

    <textarea
      :value='modelValue'
      required='true'
      v-bind='$attrs'
      @input="$emit('input', $event.target.value)"
    />
    <span class='label'>{{ label }}</span>
  </label>
</template>

<script>
export default {
  name: 'STextarea',
  inheritAttrs: true,
  model: {
    event: 'input',
    prop: 'modelValue',
  },
  props: {
    modelValue: {
      type: String,
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
.s-textarea {
  position: relative;
  display: flex;

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

  &:before {
    position: absolute;
    right: 5px;
    bottom: 5px;
    content: '';
    background: $white;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 0 9px 9px;
    border-color: transparent transparent $black transparent;
    pointer-events: none;
  }

  textarea {
    width: 100%;
    border: none;
    height: 100%;
    padding: 10px;
    min-height: 46px;
    resize: none;
    background-color: $white;
    @include default_desc();

    &::-webkit-resizer {
      border-color: transparent transparent transparent transparent;
    }
  }
}
.label {
  position: absolute;
  left: 10px;
  top: 10px;
  transition: 0.3s font-size ease-in-out, 0.3s top ease-in-out;
}
textarea:focus + .label,
textarea:valid + .label{
  top: -14px;
  font-size: 12px;
  @media (max-width: 600px) {
    top: -8px;
  }
}
</style>
