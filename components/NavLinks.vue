<template>
  <div class='nav-links container'>
    <h3>Services</h3>
    <div class='nav-links-list'>
      <a :class="[{active: active === 0}, 'nav-links-item']" @click.prevent='$emit("goTo", "web-design")'>
        Web Design & Development
      </a>
      <a :class="[{active: active === 1}, 'nav-links-item']" @click.prevent='$emit("goTo", "interactive-map")'>
        Custom Interactive Map
      </a>
      <a :class="[{active: active === 2}, 'nav-links-item']" @click.prevent='$emit("goTo", "property-websites")'>
        Property Websites
      </a>
      <a :class="[{active: active === 3}, 'nav-links-item']" @click.prevent='$emit("goTo", "wow-websites")'>
        WOW-websites </a>
      <a :class="[{active: active === 4}, 'nav-links-item']" @click.prevent='$emit("goTo", "branding")'>
        Branding & Identity
      </a>
      <a :class="[{active: active === 5}, 'nav-links-item']" @click.prevent='$emit("goTo", "rendering")'> Renderings </a>
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
    max-width: calc(100% - 24px);
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
    @media (max-width: 1000px) {
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
