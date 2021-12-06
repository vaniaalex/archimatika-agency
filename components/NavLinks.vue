<template>
  <div class='nav-links container'>
    <h3 v-html='navLinks.title'></h3>
    <div class='nav-links-list'>
      <a v-for='item in navLinks.links' :key='item._id'
         :class="[{active: active === item._id}, 'nav-links-item']" @click.prevent='$emit("goTo", item._linkTo)' v-html='item.title' ></a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavLinks',
  props: {
    active: {
      type: Number,
      default: 0
    },
    navLinks: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped lang='scss'>
.nav-links {
  display: flex;
  align-items: center;
  @media (max-width: 1024px) {
    max-width: calc(100% - 50px);
    margin-right: 0;
  }
  @media (max-width: 600px) {
    max-width: 100%;
  }
  h3 {
    @media (max-width: 1680px) {
      display: none;
    }
  }
  &-list {
    display: flex;
    margin-left: 50px;
    @media (max-width: 1680px) {
      margin-left: 0;
    }
    @media (max-width: 1120px) {
      justify-content: space-between;
      width: 100%;
    }
    @media (max-width: 1024px) {
      overflow-x: scroll;
      width: unset;
      -ms-overflow-style: none;
      scrollbar-width: none;
      &::-webkit-scrollbar-track {
        background: transparent;
      }

      &::-webkit-scrollbar-thumb {
        background: transparent;
      }

      &::-webkit-scrollbar {
        background: transparent;
        display: none;
      }
      @media (max-width: 600px) {
        padding-left: 24px;
      }
    }
  }

  &-item {
    padding: 10px 25px;
    font-family: Stolzl Display, sans-serif;
    font-weight: 500;
    font-size: 12px;
    line-height: 133.4%;
    border: 2px solid $black;
    border-radius: 30px;
    margin-right: 30px;
    cursor: pointer;
    @media (max-width: 1366px) {
      padding: 5px 9px;
    }
    @media (max-width: 1120px) {
      margin-right: 0;
    }
    @media (max-width: 1024px) {
      margin-right: 15px;
      white-space: nowrap;
    }

    &:last-child {
      margin-right: 0;
    }

    &.active {
      border: 2px solid $green;
    }
  }
}
</style>
