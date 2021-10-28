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
    <img src='~/assets/images/svg/404-1.svg' alt='' class='svg svg-1'>
    <img src='~/assets/images/svg/404-2.svg' alt='' class='svg svg-2'>
    <img src='~/assets/images/svg/404-3.svg' alt='' class='svg svg-3'>
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
  width: 593px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 200px;
}
.text {
  width: 610px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 200px;
  z-index: 10;
  h2, h4 {
    margin-bottom: 30px;
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

  }
}
.svg {
  width: 56vw;
  position: absolute;
  left: 44vw;
  top: -70px;
  height: calc(100vh + 70px);
  &.svg-1 {
    z-index: 3;
  }
  &.svg-2 {
    left: calc(44vw + 60px);
    z-index: 2;
  }
  &.svg-3 {
    left: calc(44vw + 120px);
    z-index: 1;
  }
}
</style>
