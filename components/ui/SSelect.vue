<template>
  <div
    :class="['s-select', { 's-select--open': isOpen }]"
    @click="isOpen = !isOpen"
  >
    <span :class="['s-select-label', { 's-select-label--active': getLabel }]">
      {{ getLabel || label }}
    </span>
    <s-svg name="select" />
    <div ref="scroll" class="s-select-list">
      <h4>Pick your industry:</h4>
      <ul ref="selectList">
        <li
          v-for="(option, idx) in options"
          ref="options"
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
      isOpen: true,
      scroll: 0,
      center: 0,
      touches: {
        diff: 0,
        touchstart: { x: -1, y: -1 },
        touchmove: { x: -1, y: -1 },
        touchend: false,
        direction: 'undetermined',
      },
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
  mounted() {
    console.log(this.$refs.selectList.getBoundingClientRect().top)
    this.center = this.$refs.selectList.offsetHeight / 2
    this.$refs.scroll.addEventListener('touchstart', this.touch)
    this.$refs.scroll.addEventListener('touchend', this.touch)
    this.$refs.scroll.addEventListener('touchmove', (e) => {
      this.touch(e)
      // if (this.animationFrame) return
      //
      // this.animationFrame = true
      // requestAnimationFrame(() => {
      // })
    })
  },
  methods: {
    touch(event) {
      this.animationFrame = false
      event.preventDefault()
      const touch = event.touches[0]

      switch (event.type) {
        case 'touchstart':
          this.touches.touchmove.y = touch.clientY
          break

        case 'touchmove':
          this.touches.diff += this.touches[event.type].y - touch.clientY
          this.move()
          this.touches[event.type].y = touch.clientY
          break
      }
    },
    move() {
      this.gsap.to(this.$refs.options, {
        y: -this.touches.diff,
        opacity: (idx, elm) => {
          return this.getCenter(elm)
        },
        scale: (idx, elm) => {
          return (1 - 0.9) * this.getCenter(elm) - (0 - 0.9) // 1 || 0 1 = 100% 0 = 60%
          // ((begin - finish) * scroll - (pos.end * begin - pos.start * finish)) / (pos.start - pos.end);
        },
        // rotateX: (idx, elm) => {
        //   // console.log(this.getCenter(elm) * 10)
        //   return 90 - this.getCenter(elm) * 90
        // },
        overflow: 5,
        duration: 0.1,
        ease: 'auto',
      })
    },
    getCenter(el) {
      const center =
        el.getBoundingClientRect().top -
        this.$refs.selectList.getBoundingClientRect().top -
        this.center +
        el.offsetHeight / 2

      const centerOffset = Math.abs(center) - el.offsetHeight
      if (centerOffset > 0) {
        return (
          1 - (centerOffset / (this.center - el.offsetHeight * 2)).toFixed(2)
        )
      }
      return 1
    },

    // 120 === 120
    // 60 === 0

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
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: $white;
    z-index: 98;
    border: 2px solid $black;
    border-radius: 30px;
    text-align: center;
    padding: 30px 30px 0;
    height: 50vh;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 125.9%;

    ul {
      //height: 140px;
      //overflow: hidden;

      position: relative;

      &:after {
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        height: 25px;
        width: 100%;
        background-color: $blue;
        content: '';
        z-index: -1;
      }
    }
  }

  &-item {
    //transition: 0.3s;
    margin: 30px 0;

    &.s-select-item-active,
    &:hover {
      background-color: opacity($black, 0.1);
    }
  }
}
</style>
