<template>
  <div class='icons-block'>
    <div v-for='(item, index) in content' :key='item.id' :class='[{title: item.title}, {"icon-block": item.img}]'>
      <translate-wrapper start='center' :delay='(index < 3 ? index : index - 3 )* 0.3'>
      <h2 v-if='item.title' v-html='item.title'></h2>
      <img v-if='item.img' :src='item.img' alt=''>
      </translate-wrapper>
      <translate-wrapper v-if='item.text' :delay='(index < 3 ? index : index - 3 )* 0.4' start='center'>
      <h4 v-if='item.text' v-html='item.text'></h4>
      </translate-wrapper>
    </div>
  </div>
</template>
<script>
import TranslateWrapper from '../TranslateWrapper'
export default {
  name: 'PIcons',
  components: { TranslateWrapper },
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
