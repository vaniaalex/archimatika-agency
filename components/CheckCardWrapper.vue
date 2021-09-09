<template>
  <div ref="root" class="check-card-wrapper">
    <div v-for="(card, idx) in data" :key="idx">
      <slot
        name="item"
        :card="{ data: card, length: data?.length, idx }"
        :next="next"
        :prev="prev"
        :play="play"
        :reverse="reverse"
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
      default: true,
    },
    data: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      gsap: null,
      tl: null,
      cardHeading: null,
      cards: null,
      wrapper: null,
      maxHeight: null,
      step: 50,
      active: 0,
    }
  },
  mounted() {
    this.gsap = this.$gsap
    this.tl = this.gsap.timeline(
      this.autoplay
        ? {
            scrollTrigger: { trigger: this.$refs.root, start: 'center bottom' },
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
    init() {
      this.tl.to(this.wrapper, { opacity: 1, x: 0, duration: 1 })
      this.tl.fromTo(
        this.cardHeading,
        { opacity: 0, x: 100 },
        { opacity: 1, x: 0, duration: 0.4 },
        '<60%'
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
            duration: 0.3,
          },
          idx === 0 ? '<80%' : '>'
        )
      })
    },
    play() {
      this.setStyle(this.cards, this.maxHeight)
      this.tl.play()
    },
    reverse() {
      this.tl.reverse()
    },
    next(idx) {
      const cards = [...this.cards]
      const prevCard = cards.splice(0, idx + 1)[idx]
      this.gsap.to(prevCard, {
        x: `100%`,
        duration: 0.5,
        delay: 0.2,
      })
      this.gsap.to(cards, {
        x: `-=${this.step}px`,
        y: `-=${this.step}px`,
        duration: 0.5,
        stagger: 0.2,
      })
    },
    prev(idx) {
      const cards = [...this.cards]
      const prevCard = cards.splice(0, idx)[idx - 1]
      this.gsap.to(prevCard, {
        x: `-=100%`,
        duration: 0.5,
        delay: 0.2,
      })
      this.gsap.to(cards, {
        x: `+=${this.step}px`,
        y: `+=${this.step}px`,
        duration: 0.5,
        stagger: 0.2,
      })
    },
    setStyle(cards, height) {
      this.wrapper.style.height = `${height}px`
      cards.forEach((card, idx) => {
        card.style.zIndex = cards.length - idx
        card.style.height = `${height}px`
      })
    },
  },
}
</script>

<style scoped lang="scss">
.check-card-wrapper {
  width: 100%;
  position: relative;
  opacity: 0;
  transform: translateX(100%);
}
</style>
