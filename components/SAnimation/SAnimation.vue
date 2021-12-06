<template>
  <div>
    <div ref="root" :class="`animation animation--${name} ${color} ${finished ? 'finished' : ''}`">
      <div
        v-for="idx in countItem"
        :key="idx"
        ref="items"
        :class="[{desktop: idx > 1},'animation-item']"
      >
        <slot v-if="idx === 1" name="item" />
      </div>
      <slot ref='testRef'/>
      <nuxt-img v-if='imageName && $store.state.webp'
                    ref='image'
                    :src='`/images/${imageName}`' class='animation-bg i-cover' quality='100'
                    sizes='xs:100vw sm:100vw md:100vw lg:100vw xl:100vw 2xl: 100vw' format='webp'/>
      <nuxt-img v-if='imageName && !$store.state.webp'
                ref='image'
                :src='`/images/${imageName}`' class='animation-bg i-cover' quality='100'
                sizes='xs:100vw sm:100vw md:100vw lg:100vw xl:100vw 2xl: 100vw'/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SAnimation',
  props: {
    countItem: {
      type: Number,
      default: 5,
    },
    imageName: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      default: null,
    },
    color: {
      type: String,
      default: 'green'
    },
  },
  data() {
    return {
      tl: null,
      root: null,
      items: null,
      image: null,
      finished: false,
      time: this.duration || 3,
      ease: 'defaultEase',
    }
  },
  mounted() {
    this.root = this.$refs.root
    this.items = this.$refs.items
    this.image = this.$refs.image?.$el

    this.tl = this.gsap.timeline({
      defaults: {
        ease: this.ease,
      },
      scrollTrigger: {
        trigger: this.root,
        start: 'center bottom',
      },
    })

    this[this.name]?.() // Props name === method name && root class
    setTimeout(() => {
      this.tl.scrollTrigger.refresh()
    }, 200)
  },
  methods: {
    play() {
      this.tl = this.gsap.timeline({
        defaults: {
          ease: this.ease,
        },
      })
      this[this.name]?.()
    },
    btnPlay() {
      const self = this
      // 300 all time 100%
      // 90 duration 30%
      // 40 delay 13.3%

      const btn = this.$slots.default[0]
      const btnBg = this.findByClass(btn.children, 'btn-bg')
      const btnText = this.findByClass(btn.children, 'btn-text')

      const time = this.time
      const duration = this.getTime(time, 20)
      const delay = this.getTime(time, 13.3)

      this.tl
      .from(this.image, { opacity: 0, duration: time, clearProps: 'transform' })
        .from(btnBg, { scale: 0.44, opacity: 0, duration, clearProps: 'transform' }, '<' + delay)
        .from(btnText, {scale: 0, opacity: 0, duration, clearProps: 'transform'}, '<')
        .from(btn.elm, { scale: 0.34, opacity: 0, duration, clearProps: 'transform' }, '<')
        .from(
          this.items,
          {
            width: `-=18.3%`,
            height: `-=19%`,
            stagger: delay,
            duration,
            clearProps: 'all'
          },
          '<'
        )
        .from(
          this.items,
          {
            opacity: 0,
            stagger: delay,
            duration,
            clearProps: 'all',
            onComplete() {
              self.finished = true
            }
          },
          '<'
        )

    },

    learnMore() {
      // 500 all time 100%
      // 200 duration 40%
      // 100 delay 20%

      const time = this.time
      const duration = this.getTime(time, 40)
      const delay = this.getTime(time, 20)

      this.tl
        .from(this.root, {
          opacity: 0,
          scale: 0.8,
          duration: 1,
          clearProps: 'all'
        })
        .from(
          [this.items[1], this.items[0]],
          1,
          {
            x: '-20%',
            stagger: 0.2,
            opacity: 0,
            clearProps: 'all'
          },
          '<'
        )
    },

    vertical() {
      // 300 all time 100%
      // 100 duration 33.3%
      // 50 delay 16.6%
      const time = this.time
      const duration = this.getTime(time, 33.3)
      const delay = this.getTime(time, 16.6)

      this.tl
        .from(this.image, {
          opacity: 0,
          duration: duration * 2,
        })
        .from(
          this.items,
          {
            width: '35%',
            height: '35%',
            opacity: 0,
            duration,
            stagger: delay,
          },
          '<'
        )
    },
    cube() {
      this.tl
        .from(this.$refs.root, {
          opacity: 0,
          duration: 1,
        })
        .from(
          this.items,
          {
            width: '35%',
            height: '35%',
            opacity: 0,
            duration: 1,
            stagger: 0.2,
          },
          '<'
        )
    },
    circle() {
      this.tl
        .from(this.image, {
          opacity: 0,
          scale: 0,
          transformOrigin: 'right',
          duration: 1,
          clearProps: 'all'
        })
        .from(
          this.items,
          {
            width: '35%',
            height: '35%',
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            clearProps: 'all'
          },
          '<'
        )
      .from(this.$scopedSlots.default()[0].elm, {
        x: '30%',
        opacity: 0,
        duration: 1,
        clearProps: 'all'
      }, '<0.3')
    },
    slide(){
      this.tl
        .from(this.$refs.root, {
          opacity: 0,
          duration: 2,
          clearProps: 'all'
        })
        .from(
          this.items,
          {
            left: '50%',
            x: '-50%',
            duration: 1.5,
            clearProps: 'all'
          },
          '<0.2'
        )
    },

    getTime(time, percent) {
      return (percent * time) / 100
    },

    findByClass(children, cls) {
      return children.find((child) => {
        return child.tag && [...child.elm?.classList].includes(cls)
      }).elm
    },
  },
}
</script>

<style scoped lang="scss">
.animation {
  position: relative;
  width: 100%;
  border: 3px solid $white;
  overflow: hidden;
  z-index: 1;


  &:before {
    display: block;
    padding-top: 65%;
    content: '';
  }

  &-item {
    border: 3px solid #fafffd;
    position: absolute;
    &.desktop {
      @media (max-width: 1120px) {
        display: none;
      }
    }
  }

  @import 'btnPlay';
  @import 'learnMore';
  @import 'vertical';
  @import 'cube';
  @import 'circle';
  @import 'slide';
  &.animation--btnPlay, &.animation--vertical {
    border: 0;
    .animation-item {
      &.desktop {
        @media (max-width: 1120px) {
          display: block;
        }
      }
    }
  }
}
</style>
