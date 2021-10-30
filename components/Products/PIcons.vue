<template>
  <div class='icons-block'>
    <div v-for='item in content' :key='item.id' :class='[{title: item.title}, {"icon-block": item.img}]'>
      <h2 v-if='item.title' v-html='item.title'></h2>
      <img v-if='item.img' :src='item.img' alt=''>
      <h4 v-if='item.text' v-html='item.text'></h4>
    </div>
  </div>
</template>
<script>
export default {
  name: 'PIcons',
  props: {
    content: {
      type: Array,
      required: true
    }
  }
}
</script>
<style lang='scss' scoped>
.icons-block {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 200px;

  div {
    flex: 0 0 33%;

    &.icon-block {
      img {
        max-width: 350px;
      }

      h4 {
        max-width: 350px;
      }

      &:nth-child(4), &:nth-child(5), &:nth-child(6) {
        margin-top: 50px;
      }
    }
  }
}
</style>
