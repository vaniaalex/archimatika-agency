<template>
  <div class="nav-links">
    <h3>Services</h3>
    <div class="nav-links-list">
      <router-link to="#" class="nav-links-item active">
        Web Design & Development
      </router-link>
      <router-link to="#" class="nav-links-item">
        Custom Interactive Map
      </router-link>
      <router-link to="#" class="nav-links-item">
        Property Websites
      </router-link>
      <router-link to="#" class="nav-links-item"> WOW-websites </router-link>
      <router-link to="#" class="nav-links-item">
        Branding & Identity
      </router-link>
      <router-link to="#" class="nav-links-item"> Renderings </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavLinks',
}
</script>

<style scoped lang="scss">
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

    &:last-child {
      margin-right: 0;
    }

    &.active {
      border: 2px solid $green;
    }
  }
}
</style>
