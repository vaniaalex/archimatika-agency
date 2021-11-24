<template>
  <div class='cont-error'>
    <div class='four-o-four'>
      <img src='~/assets/images/svg/404_stroke.svg' alt=''>
    </div>
    <div class='text'>
      <h2>No such page exists.</h2>
      <h4>Try starting from the home page</h4>
      <nuxt-link to='/'><button>Go to main page</button></nuxt-link>
    </div>
    <div class='images'>
    <img src='~/assets/images/svg/404-1.svg' alt='' class='svg svg-1'>
    <img src='~/assets/images/svg/404-2.svg' alt='' class='svg svg-2'>
    <img src='~/assets/images/svg/404-3.svg' alt='' class='svg svg-3'>
    </div>
  </div>
</template>
<script>
export default {
  layout: 'error',
  // eslint-disable-next-line vue/require-prop-types
  props: ['error'],
  mounted() {
      this.hide()
  },
  beforeDestroy() {
    this.show()
  },
  methods: {
    hide() {
      if(process.client) {
        const header = document.getElementsByTagName('header')[0]
        const footer = document.getElementsByTagName('footer')[0]
        if(header && footer) {
          header.style.display = 'none'
          footer.style.display = 'none'
        }
      }
    },
    show() {
      if(process.client) {
        const header = document.getElementsByTagName('header')[0]
        const footer = document.getElementsByTagName('footer')[0]
        if(header && footer) {
          header.style.display = 'block'
          footer.style.display = 'block'
        }
      }
    }
  }
}
</script>
<style lang='scss' scoped>
.cont-error {
  overflow: hidden;
}
.four-o-four {
  width: 30.89%;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 10.42%;
  @media (max-width: 1024px) {
    left: 50%;
    transform: translateX(-50%);
    width: 55.21%;
    top: 9.08%
  }
}
.text {
  width: min(610px, 35vw);
  position: absolute;
  top: 50%;
  transform: translateY(-50%) translateX(50%);
  right: 25%;
  z-index: 10;
  @media (max-width: 1024px) {
    width: 274px;
    text-align: center;
    top: unset;
    bottom: 9.77%;
    right: 50%;
    transform: translateX(50%);
  }
  h2, h4 {
    margin-bottom: 30px;
  }
  h2 {
    @media (max-width: 1024px) {
      font-size: 40px;
      font-weight: 400;
      line-height: 50px;
    }
  }
  button {
    font-family: "Stolzl Display", sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 19px;
    letter-spacing: 0;
    text-align: center;
    padding: 30.5px 40px;
    background: #9CF50B;
    border: 0;
    outline: 0;
    border-radius: 30px;
    color: #080708;
    cursor: pointer;
    position: relative;
    z-index: 10;
    @media (max-width: 1024px) {
      padding: 13.5px 40px;
    }

  }
}
.images {
  height: 100vh;
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 44vw;
  width: 56vw;
  @media (max-width: 1024px) {
    height: 50vh;
    width: 100vw;
    left: 50%;
    top: 45%;
    transform: translateX(-50%);
  }
  @media (max-width: 600px) {
    top: 40%;
  }
  @media (max-width: 380px) {
    top: 25%;
  }
  .svg {
    width: 100%;
    position: absolute;
    left: 0;
    top: -3.65%;
    height: calc(100% + 70px);
    @media (max-width: 1024px) {
      transform: translate(-50%) rotate(90deg);
      transform-origin: center;
      left: 50%;
      width: auto;
      max-width: unset;
      height: calc(160% + 70px);
    }
    &.svg-1 {
      z-index: 3;
      @media (max-width: 1024px) {
        top: 0;
      }
    }
    &.svg-2 {
      left: 3.13%;
      z-index: 2;
      @media (max-width: 1024px) {
        transform: translate(-50%) rotate(90deg);
        transform-origin: center;
        left: 50%;
        top: 12px;
      }
    }

    &.svg-3 {
      left: 6.26%;
      z-index: 1;
      @media (max-width: 1024px) {
        transform: translate(-50%) rotate(90deg);
        transform-origin: center;
        left: 50%;
        top: 50px;
      }
    }
  }
}
</style>
