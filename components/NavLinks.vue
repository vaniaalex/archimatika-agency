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

  &-list {
    display: flex;
    margin-left: 50px;
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

    &:last-child {
      margin-right: 0;
    }

    &.active {
      border: 2px solid $green;
    }
  }
}
</style>
