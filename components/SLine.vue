<template>
  <s-svg ref="root" class="s-line" :name="line" />
</template>

<script>
import SSvg from './ui/SSvg'
export default {
  name: 'SLine',
  components: { SSvg },
  props: {
    line: {
      type: String,
      default: 'line-1',
    },
    autoplay: {
      type: Boolean,
      default: true,
    },
    scroll: {
      type: Boolean,
      default: true,
    },
    delay: {
      type: Number,
      default: 1,
    },
  },
  data() {
    return {
      path: null,
      tl: null
    }
  },
  watch: {
    autoplay(value) {
      if (value) this.start()
    },
  },
  mounted() {
    const self = this
    this.path = this.$refs.root.$el.querySelector('path')
    this.gsap.set(this.path, this.setLineOptions())

    this.autoplay && this.start()
    setTimeout(() => {
      if(self.tl) {
        self.tl.scrollTrigger.refresh()
      }
    }, 400)
  },
  beforeDestroy() {
  this.tl.pause().kill()
    },
  methods: {
    setLineOptions() {
      if(this.line !== 'dotted' ) {
        return {
          strokeDashoffset: (idx, target) => target.getTotalLength(),
          strokeDasharray: (idx, target) => target.getTotalLength(),
          opacity: 1,
        }
      }
      else {
        return {
          opacity: 1
        }
      }
    },

    start() {
      if(this.line !== 'dotted' ) {
        this.tl = this.gsap.to(this.path, {
          strokeDashoffset: 0,
          delay: this.delay,
          duration: 1,
          scrollTrigger: {
            trigger: this.$refs.root.$el,
            start: 'top bottom',
            toggleActions: 'play none none reset'
          },
          clearProps: 'all'
        })
      }
      else {
        this.tl = this.gsap.from(this.path, {
          attr: {d: 'M0 2H0'},
          delay: this.delay,
          duration: 2,
          scrollTrigger: {
            trigger: this.$refs.root.$el,
            start: 'top bottom',
            toggleActions: 'play none none reset'
          },
        })
      }
    },
  },
}
</script>

<style scoped></style>
