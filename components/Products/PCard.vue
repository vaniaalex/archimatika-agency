<template>
  <div ref='productCard' :class='["card", {left: left}, {wide: wide}, {icon: icon}]'>
    <div class='text'>
      <slot></slot>
    </div>
    <div v-if='image' class='image'>
      <nuxt-picture :src='image' quality='100'  sizes='xs:320px iphone7:374px iphone7plus:414px iphoneBig:450 sm:500 md:768'/>
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
    },
    icon: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      tlCard: null
    }
  },
  computed: {
    mobile() {
      return this.$store.state.mobile
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
            duration: 0.8,
            opacity: 0,
            stagger: 0.1
          })
        this.tlCard.from([text, icons,smallImage, img], {
          x: !this.left ? '-50px' : '50px',
          opacity: 0,
          stagger: 0.2,
          duration: 0.7
        }, `<${this.mobile ? 0 : 0.7}`)

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
  @media (max-width: 1366px) {
    margin-bottom: 175px;
  }
  @media (max-width: 1120px) {
    flex-direction: column-reverse;
    margin-bottom: 100px;
  }
  .text {
    max-width: 350px;
    margin-left: 130px;
    margin-top: 190px;
    margin-right: 40px;
    position: relative;
    z-index: 3;
    @media (max-width: 1680px) {
      margin-left: 47px;
      margin-top: 125px;
      margin-right: 38px;
    }
    @media (max-width: 1366px) {
      margin-left: 0;
      max-width: 300px;
    }
    @media (max-width: 1120px) {
      margin-top: 30px;
      margin-right: 0;
      max-width: 100%;
    }
    @media (max-width: 600px) {
      margin-top: 50px;
    }


    h4 {
      margin-bottom: 30px;

      @media (max-width: 1120px) {
        font-size: 32px;
        line-height: 40px;
        margin-bottom: 20px;
      }

    }
    h5 {
      @media (max-width: 1366px) {
        font-size: 16px;
        line-height: 24px;
      }
    }

    ul {
      margin-top: 30px;
      list-style: initial;
      margin-left: 20px;
      @media (max-width: 1024px) and (min-width: 600px) {
        margin-top: 0;
        margin-left: 40px!important;
      }

      li {
        @include h5_desc();
        @media (max-width: 1366px) {
          font-size: 16px;
          line-height: 24px;
        }
      }
    }
    .flex {
      @media (max-width: 1120px) and (min-width: 600px) {
        display: flex;
        width: 100%;
        & > * {
          flex: 0 0 50%;
          &:nth-child(2) {
            margin-left: 20px;
          }

        }
        ul {
          margin-top: 0;
          margin-left: 40px!important;
          flex: 0 0 calc(50% - 40px)
        }

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
      @media (max-width: 1680px) {
        margin-left: 51px;
      }
      @media (max-width: 1366px) {
        padding: 10px;
      }
      @media (max-width: 1120px) {
        margin-top: 0;
        margin-left: 57px;
        top: -95px;
      }
      @media (max-width: 600px) {
        flex-direction: column;
        border-radius: 15px;
        right: 24px;
        top: unset;
        bottom: 0;
        margin-left: 0;
      }
      .icon {
        max-width: 130px;
        width: 130px;
        @media (max-width: 1680px) {
          width: 80px;
        }
        &:nth-child(1), &:nth-child(2), &:nth-child(3) {
          margin-right: 30px;
          @media (max-width: 1366px) {
            margin-right: 40px;
          }
          @media (max-width: 600px) {
            margin-right: 0;
            margin-bottom: 30px;
          }
        }
      }
    }
    .small-image {
      position: absolute;
      &.image-1 {
        top: 0;
        width: 581px;
        left: 709px;
        @media (max-width: 1680px) {
          width: 471px;
          top: 84px;
        }
        @media (max-width: 1366px) {
          width: 371px;
          top: 93px;
          left: 609px;
        }
        @media (max-width: 1120px) {
          width: 50%;
          left: 40%;
          top: -48vw;
        }
        @media (max-width: 700px) {
          top: -46vw;
        }
        @media (max-width: 600px) {
          top: -56vw;
        }
      }
      &.image-2 {
        top: 130px;
        width: 470px;
        right: 460px;
        @media (max-width: 1680px) {
          width: 370px;
        }
        @media (max-width: 1366px) {
          width: 273px;
          top: 187px;
          right: 400px
        }
        @media (max-width: 1120px) {
          width: 40%;
          left: 50%;
          top: -48vw;
        }
        @media (max-width: 700px) {
          top: -46vw;
        }
        @media (max-width: 600px) {
          top: -56vw;
        }
      }
      &.image-3 {
        top: 227px;
        width: 736px;
        left: 460px;
        @media (max-width: 1680px) {
          width: 630px;
        }
        @media (max-width: 1366px) {
          width: 511px;
          top: 187px;
          right: 400px
        }
        @media (max-width: 1120px) {
          width: 80%;
          left: 10%;
          top: -48vw;
        }
        @media (max-width: 700px) {
          top: -46vw;
        }
        @media (max-width: 600px) {
          top: -56vw;
        }
      }
    }
  }

  .image {
    margin-top: 90px;
    position: relative;
    z-index: 2;
    width: 100%;
    @media (max-width: 1680px) {
      margin-top: 112px;
    }
    @media (max-width: 1366px) {
      margin-top: 90px;
    }
    @media (max-width: 1120px) {
      margin-top: 0;
      max-width: 90vh;
    }
  }

  .skew {
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    @media (max-width: 1120px) {
      display: none;
    }
    img {
      position: absolute;
      width: 1390px;
      @media (max-width: 1680px) {
        width: 100%;
      }
      &:nth-child(3) {
        right: 50px;
        top: 0;
      }
      &:nth-child(2) {
        right: 72px;
        top: 30px;
      }
      &:nth-child(1) {
        right: 95px;
        top: 60px;
      }
    }
  }

  &.left {
    .text {
      order: 2;
      margin-right: 130px;
      margin-left: 40px;
      @media (max-width: 1680px) {
        margin-right: 47px;
        margin-left: 38px;
      }
      @media (max-width: 1366px) {
        margin-right: 0;
      }
      @media (max-width: 1120px) {
        order: 0;
        margin-left: 0;
      }

    }

    .image {
      order: 1;
      @media (max-width: 1120px) {
        order: 0;
      }
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
      @media (max-width: 1120px) {
        margin-top: 30px;
        max-width: 100%;
      }
    }
  }
  &.icon {
    .text {
      h4, h5 {
        @media (max-width: 600px) {
          max-width: calc(100% - 140px);
        }
      }
    }
  }
}
</style>
