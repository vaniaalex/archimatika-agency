<template>
  <div ref="root" class="check-card-wrapper">
    <slot :next="next" :prev="prev" :length="cards?.length" />
  </div>
</template>

<script>
export default {
  name: 'CheckCardWrapper',
  data() {
    return {
      tl: null,
      cards: null,
      wrapper: null,
      step: 50,
      active: 0,
    }
  },
  mounted() {
    this.wrapper = this.$refs.root
    this.cards = [...this.wrapper.querySelectorAll('.check-card')]

    const maxHeight = Math.max(...this.cards.map((card) => card.offsetHeight))
    this.setStyle(this.cards, maxHeight)

    const checkCardFirstContent = this.cards[0]?.querySelectorAll(
      '.check-card-heading, .check-card-content'
    )

    this.tl = this.$gsap.timeline({
      scrollTrigger: {
        trigger: this.wrapper,
        start: 'center bottom',
      },
    })

    this.tl
      .to(this.wrapper, { opacity: 1, x: 0, duration: 1 })
      .fromTo(
        checkCardFirstContent,
        { opacity: 0, x: 100 },
        { opacity: 1, x: 0, duration: 0.4 },
        '<60%'
      )

    const cards = [...this.cards]
    cards.shift()
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
  methods: {
    setStyle(cards, height) {
      this.wrapper.style.height = `${height}px`
      cards.forEach((card, idx) => {
        card.style.zIndex = cards.length - idx
        card.style.height = `${height}px`
      })
    },
    next(idx) {
      const cards = [...this.cards]
      const prevCard = cards.splice(0, idx + 1)[idx]
      this.tl
        .to(prevCard, {
          x: `100%`,
          duration: 0.5,
          delay: 0.2,
        })
        .to(
          cards,
          {
            x: `-=${this.step}px`,
            y: `-=${this.step}px`,
            duration: 0.5,
            stagger: 0.2,
          },
          '<'
        )
    },
    prev(idx) {
      const cards = [...this.cards]
      const prevCard = cards.splice(0, idx)[idx - 1]
      this.tl
        .to(prevCard, {
          x: `-=100%`,
          duration: 0.5,
          delay: 0.2,
        })
        .to(
          cards,
          {
            x: `+=${this.step}px`,
            y: `+=${this.step}px`,
            duration: 0.5,
            stagger: 0.2,
          },
          '<'
        )
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
