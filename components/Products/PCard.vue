<template>
  <div :class='["card", {left: left}, {wide: wide}]'>
    <div class='text'>
      <slot></slot>
    </div>
    <div v-if='image' class='image'>
      <img :src='image' alt=''>
    </div>
    <div class='skew'></div>
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

    h4 {
      margin-bottom: 30px;
    }
    ul{
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

        &:nth-child(1), &:nth-child(2), &:nth-child(3) {
          margin-right: 30px;
        }
      }
    }
  }

  .image {
    margin-top: 90px;
    position: relative;
    z-index: 2;
  }

  .skew {
    background-image: url('~assets/images/products/real-estate/skew-card.svg');
    position: absolute;
    width: 1450px;
    height: 860px;
    top: 0;
    left: 0;
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
