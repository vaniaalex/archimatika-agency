<template>
  <div :class='[{left: left}, "product-hero"]'>
    <div class='product-image'>
      <slot></slot>
      <h2 v-html='title'></h2>
    </div>
    <div class='product-text'>
      <h4 v-html='description'></h4>
      <h5  v-if='secondDescription' v-html='secondDescription'></h5>
      <s-button v-if='button' color='blue' f-width>{{ button.text }}</s-button>
    </div>
    <div class='product-overlay-4x product-overlay'></div>
    <div class='product-overlay-3x product-overlay'></div>
    <div class='product-overlay-2x product-overlay'></div>
    <div class='product-overlay-1x product-overlay'></div>
  </div>
</template>
<script>
import SButton from '../ui/SButton'
export default {
  name: 'PHero',
  components: {
    SButton
  },
  props: {
    left: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    secondDescription: {
      type: String,
      required: false,
      default: null
    },
    button: {
      type: Object,
      required: false,
      default: null
    }
  }
}
</script>
<style lang='scss' scoped>

.product-hero {
  margin-top: 100px;
  display: flex;
  flex-direction: row;
  position: relative;
  margin-bottom: 280px;

  &:after {
    content: '';
    border: 3px solid #080708;
    border-radius: 60px;
    width: calc(57% - 6px);
    height: calc(100% - 6px);
    top: 0;
    left: 0;
    position: absolute;
    z-index: 10;
  }
  &:before {
    content: '';
    width: calc(100% - 6px);
    height: calc(100% - 6px);
    top: 0;
    left: 0;
    position: absolute;
    background: #FAFFFD;
    border: 3px solid #080708;
    border-radius: 60px;
    z-index: 9;
  }

  .product-image {
    position: relative;
    width: 57%;
    z-index: 10;

    img {
      border-radius: 60px;
      width: 100%;
    }

    h2 {
      color: #FAFFFD;
      position: absolute;
      top: 130px;
      left: 130px;
      max-width: 650px;
    }
  }

  .product-text {
    width: 43%;
    padding-left: 80px;
    padding-right: 90px;
    z-index: 10;
    border-radius: 60px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h4, h5 {
      margin-bottom: 40px;
      max-width: 480px;
    }

    button {
      background: #0EFBCA;
      border: 0;
      outline: 0;
      padding-top: 30px;
      padding-bottom: 30px;
      width: 100%;
      border-radius: 30px;
      font-family: "Stolzl Display", sans-serif;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 21px;
      letter-spacing: 0em;
      text-align: center;
    }
  }

  .product-overlay {
    position: absolute;
    border: 3px solid #080708;
    right: 0;

    &.product-overlay-4x {
      border-radius: 50px;
      width: 83%;
      height: 55%;
      bottom: -20px;
      z-index: 8;
      background: #FAFFFD;
    }

    &.product-overlay-3x {
      border-radius: 40px;
      width: 66%;
      height: calc(55% + 20px);
      bottom: -40px;
      z-index: 7;
      border-width: 2px;
      background: #FAFFFD;
    }

    &.product-overlay-2x {
      border-radius: 30px;
      width: 49%;
      height: calc(55% + 40px);
      bottom: -60px;
      z-index: 6;
      border-width: 1px;
      background: #FAFFFD;
    }

    &.product-overlay-1x {
      border-radius: 20px;
      width: 32%;
      height: calc(55% + 60px);
      bottom: -80px;
      z-index: 5;
      border-width: 0.5px;
      background: #FAFFFD;
    }
  }
  &.left {
    .product-image {
      h2 {
        top: unset;
        bottom: 140px;
      }
    }
    .product-overlay {
      left: 0;
    }
  }
}


</style>
