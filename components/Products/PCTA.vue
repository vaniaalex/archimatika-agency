<template>
  <div class='call-to-action'>
    <div class='text' :style='`box-shadow: 0px 0px 100px 0px ${color};`'>
      <h3>
        We turn investments into profit via Interactive visualization.
      </h3>
      <button :style='`background: ${buttonColor};`'>Let’s work together!</button>
    </div>
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "PCTA",
  props: {
    color: {
      type: String,
      default: '#0EFBCA80'
    },
    // eslint-disable-next-line vue/prop-name-casing
    buttonColor: {
      type: String,
      default: '#0EFBCA'
    }
  }
}
</script>
<style lang='scss' scoped>
.call-to-action {
  margin-bottom: 350px;
  height: 680px;
  position: relative;
  display: flex;
  align-items: center;
  .text {
    margin-left: 137px;
    border: 6px solid #080708;
    padding: 50px 120px 50px 80px;
    border-radius: 95px;
    box-shadow: 0px 0px 100px 0px #0EFBCA80;
    h3 {
      max-width: 569px;
      margin-bottom: 50px;
    }
    button {
      background: #0EFBCA;
      border: 0;
      outline: 0;
      cursor: pointer;
      border-radius: 30px;
      font-family: "Stolzl Display", sans-serif;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 19px;
      letter-spacing: 0em;
      text-align: center;
      padding: 30.5px 40px;
    }
  }
  svg {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
  }
}
</style>
