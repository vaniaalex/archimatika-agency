<template>
  <div class='service-links'>
    <template v-for='(link, idx) in data'>
      <translate-wrapper :key='idx' start='bottom'>
        <a
          class='service-links-item'
          @mouseenter='src = link.src'
          @click.prevent='goToPage(link.to)'
        >
          <h4>{{ link.label }}</h4>
          <s-svg name='arr-list' />
        </a>
      </translate-wrapper>
    </template>
    <transition name='fade'>
      <div v-show='hover' ref='preview' class='service-links-hover'>
        <div v-for='idx in 4' :key='idx' ref='scrub'>
          <s-image v-if='src && idx === 4' :src='src' />
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import SSvg from './ui/SSvg'
import SImage from './ui/SImage'
import TranslateWrapper from './TranslateWrapper'

export default {
  name: 'ServiceLinks',
  components: { SImage, TranslateWrapper, SSvg },
  props: {
    data: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      hover: false,
      src: null,
      x: 0,
      y: 0,
      prevX: 0,
      rotate: 0,
      timeout: null
    }
  },
  watch: {
    hover(value) {
      if (value) {
        this.gsap.set(this.$refs.scrub, {
          x: this.x + 10,
          y: this.y - 10
        })
      }
    }
  },
  mounted() {
    document.body.addEventListener('wheel', this.onHover)
    document.body.addEventListener('mousemove', this.onHover)
  },
  destroyed() {
    document.body.removeEventListener('wheel', this.onHover)
    document.body.removeEventListener('mousemove', this.onHover)
  },
  methods: {
    goToPage(page) {
      this.$store.dispatch('setNextPage', page)
      this.$store.dispatch('setPageTransition', true)
    },
    onHover(target) {
      this.x = target.x
      this.y = target.y - 200
      this.hover = this.isClosest(target.x, target.y)
      if (!this.hover) return

      this.rotate = this.prevX - target.x
      if (this.rotate > 15) this.rotate = 15
      if (this.rotate < -15) this.rotate = -15
      this.prevX = target.x

      this.anim()
    },

    anim() {
      this.gsap.to(this.$refs.scrub, {
        duration: 0.3,
        x: this.x + 10,
        y: this.y - 10,
        stagger: -0.02,
        rotate: -this.rotate,
        ease: 'auto'
      })

      if (this.timeout) clearTimeout(this.timeout)
      this.timeout = setTimeout(() => {
        this.gsap.to(this.$refs.scrub, {
          duration: 0.3,
          stagger: -0.02,
          rotate: 0,
          ease: 'auto'
        })
      }, 50)
    },

    isClosest(x, y) {
      return !!document.elementFromPoint(x, y).closest('.service-links')
    }
  }
}
</script>

<style scoped lang='scss'>
.service-links {
  margin-bottom: 100px;
  margin-top: 120px;
  position: relative;
  z-index: 2;

  @include max-w-laptop() {
    margin-top: 60px;
  }

  @include max-w-laptop_sm() {
    margin-bottom: 30px;
  }

  &-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 150px;
    border-bottom: 3px solid $black;
    padding-right: 200px;
    position: relative;
    transition: 0.7s;
    cursor: pointer;
    @media (max-width: 1024px) {
      height: 60px;
      padding-right: 20px;
    }
    .s-svg {
      @media (max-width: 1024px) {
        width: 15px;
      }
    }

    &:hover {
      @media (min-width: 1024px) {
        padding-left: 30px;
        padding-right: 230px;
      }
    }
  }

  &-hover {
    @media (min-width: 1024px) {
      pointer-events: none;

      div {
        transform: translateY(-100%);
        width: 370px;
        height: 200px;
        position: fixed;
        top: 0;
        left: 0;
        border: 2px solid $black;
        border-radius: 20px;
        overflow: hidden;
        background-color: $white;

        img {
          max-width: calc(100% + 4px);
          width: calc(100% + 4px);
          height: calc(100% + 4px);
          margin: -2px;
          object-fit: cover;
          object-position: center center;
        }
      }
    }
  }
}
</style>
