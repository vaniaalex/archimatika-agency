<template>
  <div :class='[{left: left}, "product-hero"]'>
    <div class='product-image'>
      <slot></slot>
      <h2 v-html='title'></h2>
      <s-button v-if='button' color='blue' f-width>{{ button.text }}</s-button>
    </div>
    <div class='product-text'>
      <h4 v-html='description'></h4>
      <h5 v-if='secondDescription' v-html='secondDescription'></h5>
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
<style lang='scss'>

.product-hero {
  margin-top: 100px;
  display: flex;
  flex-direction: row;
  position: relative;
  margin-bottom: 280px;

  @media (max-width: 1366px) {
    flex-direction: column;
    margin-top: 60px;
    margin-bottom: 210px;
  }
  @media (max-width: 600px) {
    margin-top: 30px;
    margin-bottom: 100px;
  }

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
    @media (max-width: 1366px) {
      width: calc(100% - 6px);
      height: 230px;
    }
    @media (max-width: 600px) {
      border-radius: 30px;
    }
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
    @media (max-width: 600px) {
      border-radius: 30px;
    }
  }

  .product-image {
    position: relative;
    width: 57%;
    z-index: 11;

    @media (max-width: 1366px) {
      width: 100%;
      height: 236px;
    }
    .s-button {
      display: none;
      @media (max-width: 1366px) {
        display: block;
        max-width: 300px;
        position: absolute;
        right: 70px;
        top: 50%;
        transform: translateY(-50%);
        z-index: 3;
      }
      @media (max-width: 1120px) {
        max-width: 210px;
      }
      @media (max-width: 700px) and (min-width: 601px) {
        top: 70%;
      }
      @media (max-width: 600px) {
        display: none;
      }
    }
    picture {
      img {
        border-radius: 60px;
        width: 100%;
        @media (max-width: 1366px) {
          object-fit: cover;
          height: 100%;
          object-position: center;
        }
        @media (max-width: 600px) {
          border-radius: 30px;
        }
      }
    }

    h2 {
      color: #FAFFFD;
      position: absolute;
      top: 130px;
      left: 130px;
      max-width: 650px;
      @media (max-width: 1366px) {
        left: 70px;
        top: 53px;
        max-width: 539px;
      }
      @media (max-width: 1024px) {
        max-width: 322px;
      }
      @media (max-width: 600px) {
        left: 30px;
        top: unset;
        bottom: 30px;
      }
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
    @media (max-width: 1366px) {
      width: 100%;
      flex-direction: row;
      margin-top: 50px;
      margin-bottom: 50px;
      align-items: flex-start;
    }
    @media (max-width: 1120px) {
      flex-direction: column;
      margin-top: 40px;
      margin-bottom: 40px;
    }
    @media (max-width: 600px) {
      border-radius: 30px;
      margin-top: 30px;
      padding-left: 30px;
      padding-right: 30px;
      margin-bottom: 30px;
    }

    h4, h5 {
      margin-bottom: 40px;
      max-width: 480px;
      @media (max-width: 1680px) {
        margin-bottom: 20px;
      }
      @media (max-width: 1120px) {
        max-width: 100%;
      }
    }
    h4 {
      @media (max-width: 1366px) {
        font-size: 23px;
        line-height: 30px;
        max-width: 572px;
        margin-right: 20px;
        margin-bottom: 0;
      }
      @media (max-width: 1120px) {
        max-width: 100%;
        margin-right: 0;
        margin-bottom: 20px;
      }
      @media (max-width: 600px) {
        font-size: 20px;
        line-height: 25px;
        font-weight: 600;
      }
    }
    h5 {
      @media (max-width: 1366px) {
        font-size: 18px;
        font-weight: 400;
        line-height: 24px;
        margin-bottom: 0;
      }
    }

    .s-button {
      @media (max-width: 1366px) {
        display: none;
      }
      @media (max-width: 600px) {
        display: block;
        margin-top: 30px;
        max-width: 210px;
        margin-left: auto;
      }
    }
  }

  .product-overlay {
    position: absolute;
    border: 3px solid #080708;
    right: 0;
    @media (max-width: 600px) {
      display: none;
    }

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
        @media (max-width: 1366px) {
          top: unset;
          bottom: 30px;
        }
      }
    }
    .product-text {
      @media (min-width: 1367px) {
        justify-content: flex-end;
        h4 {
          margin-bottom: 100px;
        }
      }
      @media (max-width: 1366px) {
        justify-content: flex-start;
        h4 {
          max-width: 100%;
          font-weight: 600;
          font-size: 32px;
          line-height: 40px;
        }
      }
      h4 {
        @media (max-width: 1024px) {
          font-size: 20px;
          line-height: 25px;
        }
      }
    }
    .product-overlay {
      left: 0;
    }
  }
}

.ru {
  .product-hero {
      .product-image {
        h2 {
          @media (max-width: 400px) {
            font-size: 26px;
          }
        }
      }
  }
}
</style>
