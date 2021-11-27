<template>
  <label :class="['s-input', getClass]">
    {{ label }}
    <input
      v-bind="$attrs"
      type="text"
      :value="modelValue"
      @input="$emit('input', $event.target.value)"
      @blur="setErrorMessage"
    />
    <span v-if="error && error.$invalid" class="message">{{ message }}</span>
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
    error: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      rules: ['required', 'email', 'phone'],
      errors: {
        required: 'Required',
        email: 'Email is not correct',
        phone: 'Phone number is not correct',
      },
      message: '',
    }
  },
  computed: {
    getClass() {
      if (this.error && this.message.length) {
        return this.error.$invalid ? 's-input-invalid' : 's-input-valid'
      }
      return ''
    },
  },
  methods: {
    setErrorMessage() {
      let keys = []
      if (this.error) {
        keys = Object.keys(this.error).filter((key) => this.rules.includes(key))

        for (let i = 0; i < keys.length; i++) {
          const key = keys[i]
          if (key === 'required' && !this.error.required) {
            this.message = this.errors.required
            break
          } else if (key === 'email' && !this.error.email) {
            this.message = this.errors.email
            break
          } else if (key === 'phone' && !this.error.phone) {
            this.message = this.errors.phone
            break
          }
        }
      }
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
    @media (max-width: 375px) {
      height: 40px;
    }

    @include default_desc();
  }

  .message {
    position: absolute;
    bottom: 0;
    left: 0;
    transform: translateY(100%);
  }

  &-invalid {
    &:after {
      background: $red;
    }
    .message {
      color: $red;
    }
  }
  &-valid {
    &:after {
      background: $green;
    }
    .message {
      color: $green;
    }
  }
}
</style>
