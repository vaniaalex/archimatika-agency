<template>
  <transition name="fade">
    <div v-if="loading" class="s-preloader">
      <transition-group name="slide-fade" tag="div" class="s-preloader-tick">
        <span
          v-for="(num, i) in numbers"
          v-show="idx === i"
          :key="i + '_key'"
          class="f-stroke"
        >
          {{ num }}
        </span>
      </transition-group>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'SPreloader',
  data() {
    return {
      loading: true,
      time: 2000,
      numbers: [0, 28, 56, 78, 91, 100],
      idx: 0,
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.start()
    })
  },
  methods: {
    start() {
      this.loading = true

      const interval = setInterval(() => {
        this.idx++
        if (this.numbers.length - 1 === this.idx) {
          clearInterval(interval)
          this.finish()
        }
      }, this.time / this.numbers.length - 1)
    },
    finish() {
      setTimeout(() => {
        this.loading = false
        this.$store.commit('set_loaded')
      }, this.time / this.numbers.length - 1)
    },
  },
}
</script>

<style scoped lang="scss">
.s-preloader {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: $white;
  z-index: 1000;

  &-tick {
    width: 100%;
    position: absolute;
    left: 0;
    top: 30%;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    height: 200px;
    overflow: hidden;

    &:after {
      width: 100%;
      height: 40px;
      background: linear-gradient(0deg, $white 60%, opacity($white, 0) 101.76%);
      position: absolute;
      bottom: 0;
      left: 0;
      content: '';
      z-index: 1;
    }

    span {
      font-family: Stolzl Display, sans-serif;
      font-size: 72px;
      line-height: 133.4%;
      text-align: center;
      -webkit-text-stroke-width: 1px;
      position: absolute;
    }
  }
}
</style>
