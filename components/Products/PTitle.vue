<template>
  <div class='title'>
    <h3 v-html='title'></h3>
  </div>
</template>
<script>
export default {
  name: 'PTitle',
  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>
<style scoped lang='scss'>
h3 {
  @media (max-width: 1024px) and (min-width: 600px) {
    font-size: 45px;
    line-height: 50px;
  }
}
</style>
