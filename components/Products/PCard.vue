<template>
  <div ref='productCard' :class='["card", {left: left}, {wide: wide}]'>
    <div class='text'>
      <slot></slot>
    </div>
    <div v-if='image' class='image'>
      <img :src='image' alt=''>
    </div>
    <div ref="skew" class='skew'>
      <img src='~/assets/images/products/skew-3.svg' alt=''>
      <img src='~/assets/images/products/skew-2.svg' alt=''>
      <img src='~/assets/images/products/skew-1.svg' alt=''>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    left: {
      type: Boolean,
      default: true
    },
    image: {
      type: String,
      default: null
    },
    wide: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      tlCard: null
    }
  },
  mounted() {
    this.animateCard()
    setTimeout(() => {
      const tlArr = [this.tlCard]
      for (const item of tlArr) {
        item.scrollTrigger.refresh()
      }
    }, 200)
  },
  methods: {
    animateCard() {
      if (process.client) {
        const text = this.$refs.productCard.querySelector('.text')
        const img = this.$refs.productCard.querySelector('.image')
        const icons = this.$refs.productCard.querySelector('.text').querySelector('.icons-small-block')
        const smallImage = this.$refs.productCard.querySelector('.text').querySelector('.small-image')
        const skews = this.$refs.skew.querySelectorAll('img')
        this.tlCard = this.gsap.timeline({
          scrollTrigger: {
            trigger: this.$refs.productCard,
            start: 'center bottom'
          }
        })
          .from(skews, {
            rotate: '-5deg',
            x: '-5%',
            transformOrigin: 'left bottom',
            duration: 1.5,
            opacity: 0,
            stagger: 0.3
          })
        this.tlCard.from([text, icons,smallImage, img], {
          x: !this.left ? '-50px' : '50px',
          opacity: 0,
          stagger: 0.2,
          duration: 1.5
        }, '<1')

      }
    }
  }
}
</script>
<style lang='scss' scoped>
.card {
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-bottom: 200px;
  position: relative;

  .text {
    max-width: 350px;
    margin-left: 130px;
    margin-top: 190px;
    margin-right: 40px;
    position: relative;
    z-index: 3;

    h4 {
      margin-bottom: 30px;
    }

    ul {
      margin-top: 30px;
      list-style: initial;
      margin-left: 20px;

      li {
        @include h5_desc();
      }
    }

    .icons-small-block {
      position: absolute;
      display: flex;
      flex-direction: row;
      z-index: 3;
      background: #FAFFFD;
      border: 3px solid #080708;
      border-radius: 30px;
      margin-top: 100px;
      padding: 20px;

      .icon {
        max-width: 130px;
        width: 130px;

        &:nth-child(1), &:nth-child(2), &:nth-child(3) {
          margin-right: 30px;
        }
      }
    }
    .small-image {
      position: absolute;
      &.image-1 {
        top: 0;
        width: 581px;
        left: 709px;
      }
      &.image-2 {
        top: 130px;
        width: 470px;
        right: 460px;
      }
      &.image-3 {
        top: 227px;
        width: 736px;
        left: 460px;
      }
    }
  }

  .image {
    margin-top: 90px;
    position: relative;
    z-index: 2;
  }

  .skew {
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    img {
      position: absolute;
      width: 1390px;
      &:nth-child(3) {
        right: 70px;
        top: 0;
      }
      &:nth-child(2) {
        right: 100px;
        top: 30px;
      }
      &:nth-child(1) {
        right: 130px;
        top: 60px;
      }
    }
  }

  &.left {
    .text {
      order: 2;
      margin-right: 130px;
      margin-left: 40px;
    }

    .image {
      order: 1;

    }

    .skew {
      transform: scaleX(-1);
      left: unset;
      right: 0;
    }
  }

  &.wide {
    .text {
      max-width: 520px;
      margin-top: 125px;
    }
  }
}
</style>
