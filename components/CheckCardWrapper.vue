<template>
  <div ref='root' class='check-card-wrapper'>
    <div v-for='(card, idx) in data' :key='idx'>
      <slot
        name='item'
        :card='{ data: card, length: data.length, idx }'
        :next='next'
        :prev='prev'
        :play='play'
        :reverse='reverse'
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'CheckCardWrapper',
  props: {
    autoplay: {
      type: Boolean,
      default: true
    },
    data: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      tl: null,
      cardHeading: null,
      cards: null,
      wrapper: null,
      maxHeight: null,
      step: 25,
      active: 0,
      animationRunning: false
    }
  },
  created() {
    if(process.client) {
      // eslint-disable-next-line nuxt/no-globals-in-created
      window.addEventListener('resize', this.resize)
    }
  },
  beforeDestroy() {
    // eslint-disable-next-line nuxt/no-env-in-hooks
        if(process.client) {
      // eslint-disable-next-line nuxt/no-globals-in-created
      window.removeEventListener('resize', this.resize)
    }
  },
  mounted() {
    this.tl = this.gsap.timeline(
      this.autoplay
        ? {
          scrollTrigger: {
            trigger: this.$refs.root,
            start: 'center bottom'
          },
        }
        : { paused: true }
    )

    this.wrapper = this.$refs.root
    this.cards = [...this.wrapper.querySelectorAll('.check-card')]
    this.cardHeading = this.cards[0]?.querySelectorAll(
      '.check-card-heading, .check-card-content'
    )

    this.maxHeight = Math.max(...this.cards.map((card) => card.offsetHeight))
    this.setStyle(this.cards, this.maxHeight)

    this.init()
  },
  methods: {
    resize() {
      this.wrapper = this.$refs.root
      if(this.wrapper) {
        this.cards = [...this.wrapper.querySelectorAll('.check-card')]
        this.setEmptyStyle(this.cards)
        this.cardHeading = this.cards[0]?.querySelectorAll(
          '.check-card-heading, .check-card-content'
        )

        this.maxHeight = Math.max(...this.cards.map((card) => card.offsetHeight))
        this.setStyle(this.cards, this.maxHeight)
      }
    },
    init() {
      this.tl.from(this.wrapper, {y: '100px', duration: 1})
      this.tl.to(this.wrapper, { opacity: 1, x: 0, duration: 1 }, '<')
      this.tl.fromTo(
        this.cardHeading,
        { opacity: 0, x: 250 },
        { opacity: 1, x: 0, duration: 0.7 },
        '<40%'
      )

      const cards = [...this.cards].splice(1, this.cards.length)
      cards.forEach((card, idx) => {
        const offset = this.step * idx
        const offsetNext = this.step + offset

        this.tl.fromTo(
          card,
          { opacity: 0, x: offset, y: offset },
          {
            opacity: 1,
            x: offsetNext,
            y: offsetNext,
            duration: 0.5
          },
          idx === 0 ? '<+=10%' : '<+=20%'
        )
      })
    },

    play() {
      this.setStyle(this.cards, this.maxHeight)
      this.tl.play()
    },

    reverse() {
      this.tl.reverse()
      this.$emit('reverse-start', this.tl.time())
    },

    next(idx) {
      if(!this.animationRunning) {
        this.$gtm.push({ event: "next_step_form"})
        this.$yandexMetrika.reachGoal("next_step_form")
        this.animationRunning = true
        const self = this
        const cards = [...this.cards]
        const prevCard = cards.splice(0, idx + 1)[idx]
        this.gsap.to(prevCard, {
          x: `100%`,
          duration: 0.8,
          delay: 0
        })
        this.gsap.to(cards, {
          x: `-=${this.step}px`,
          y: `-=${this.step}px`,
          duration: 0.5,
          stagger: 0.1,
          onComplete() {
            self.animationRunning = false
          }
        })
      }
    },

    prev(idx) {
      if(!this.animationRunning) {
        this.animationRunning = true
        const self = this

        if (!idx) {
          this.reverse()
          return
        }
        const cards = [...this.cards]
        const prevCard = cards.splice(0, idx)[idx - 1]
        this.gsap.to(prevCard, {
          x: `-=100%`,
          duration: 0.5,
          delay: 0
        })
        this.gsap.to(cards, {
          x: `+=${this.step}px`,
          y: `+=${this.step}px`,
          duration: 0.8,
          stagger: 0.1,
          onComplete() {
            self.animationRunning = false
          }
        })
      }
    },
    setEmptyStyle(cards) {
      this.wrapper.style.height = `auto`
      cards.forEach((card, idx) => {
        card.style.zIndex = cards.length - idx
        card.style.height = `auto`
      })
    },
    setStyle(cards, height) {
      this.wrapper.style.height = `${height}px`
      cards.forEach((card, idx) => {
        card.style.zIndex = cards.length - idx
        card.style.height = `${height}px`
      })
    }
  }
}
</script>

<style scoped lang='scss'>
.check-card-wrapper {
  width: 100%;
  position: relative;
  opacity: 0;
  transform: translateX(100%);
  @media (max-width: 1024px) {
    width: calc(100% - 50px);
    margin-left: auto;
  }
  @media (max-width: 600px) {
    width: calc(100% - 24px);
  }
}
</style>
