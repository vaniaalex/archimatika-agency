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
  @media (max-width: 1366px) {
    margin-bottom: 180px;
  }
  @media (max-width: 1120px) {
    margin-bottom: 100px;
  }
  div {
    flex: 0 0 33%;
    @media (max-width: 600px) {
      flex: 0 0 50%;
    }

    &.icon-block {
      img {
        max-width: 350px;
        @media (max-width: 1680px) {
          max-width: 255px;
          margin-left: auto;
          margin-right: auto;
        }
        @media (max-width: 1120px) {
          max-width: 152px;
        }
        @media (max-width: 600px) {
          margin-left: 0;
        }
      }

      h4 {
        max-width: 350px;
        @media (max-width: 1680px) {
          margin-left: auto;
          margin-right: auto;
        }
        @media (max-width: 1366px) {
          font-size: 23px;
          font-weight: 400;
          line-height: 30px;
          max-width: 255px;
        }
        @media (max-width: 1120px) {
          max-width: 152px;
          font-size: 18px;
          line-height: 133.4%;
        }
        @media (max-width: 600px) {
          margin-left: 0;
        }
      }

      &:nth-child(4), &:nth-child(5), &:nth-child(6) {
        margin-top: 50px;
        @media (max-width: 600px) {
          margin-top: 0;
        }
      }
    }
  }
}
</style>
