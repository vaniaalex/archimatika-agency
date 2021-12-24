<template>
  <div :class="['s-input', getClass]">
  <label class="s-input">

    <input
      :value='modelValue'
      required
      type='text'
      v-bind='$attrs'
      @blur='setErrorMessage'
      @input="$emit('input', $event.target.value)"
    />
    <span class='label'>{{ label }}</span>
    <span v-if="error && error.$invalid" class="message">{{ message }}</span>
  </label>
  </div>
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
    valid: {
      type: Boolean,
      default: true
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
        required: this.$store.state.lang === 0 ? 'Required' : 'Обязательно',
        email: this.$store.state.lang === 0 ? 'Email is not correct' : 'Email заполнен неправильно',
        phone: this.$store.state.lang === 0 ? 'Phone number is not correct' : 'Телефон неверный',
      },
      message: '',
    }
  },
  computed: {
    getClass() {
      if (this.error && this.message.length) {
        return this.error.$invalid ?  's-input-invalid' :'s-input-valid'
      }
      else if(!this.valid) {
        return 's-input-invalid'
      }
      else if(this.error && !this.error.$dirty && !this.error.$invalid && !this.error.phone) {
        return 's-input-valid'
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
    left: 10px;
    transform: translateY(100%);
    @media (max-width: 600px) {
      font-size: 14px;
    }
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
.label {
  position: absolute;
  left: 10px;
  top: 10px;
  transition: 0.3s font-size ease-in-out, 0.3s top ease-in-out;
}
input:focus + .label,
input:valid + .label{
  top: -14px;
  font-size: 12px;
  @media (max-width: 600px) {
    top: -8px;
  }
}
</style>
