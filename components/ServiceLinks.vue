<template>
  <div class="service-links">
    <router-link
      v-for="(link, idx) in data"
      :key="idx"
      to="#"
      class="service-links-item"
    >
      <h4>{{ link.label }}</h4>
      <s-svg name="arr-list" />
      <div class="service-links-hover">
        <div />
        <div />
        <div />
        <div>
          <s-image :src="link.src" />
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
import SSvg from './SSvg'
import SImage from './ui/SImage'
export default {
  name: 'ServiceLinks',
  components: { SImage, SSvg },
  props: {
    data: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style scoped lang="scss">
.service-links {
  margin-bottom: 100px;
  margin-top: 120px;

  &-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 150px;
    border-bottom: 3px solid $black;
    padding-right: 200px;
    position: relative;

    &:hover .service-links-hover {
      opacity: 1;
      transform: translateY(-40%) rotate(-20deg) scale(1);

      div {
        @for $i from 1 through 4 {
          &:nth-child(#{$i}) {
            $deg: calc(3deg * #{$i});
            $y: calc(10px * #{$i});
            transform: rotate($deg);
          }
        }
      }
    }
  }

  &-hover {
    position: absolute;
    top: 50%;
    right: 300px;
    width: 370px;
    transition: 0.5s;
    opacity: 0;
    transform: translateY(-50%) rotate(-20deg) scale(0.4);

    &:before {
      padding-top: 55%;
      display: block;
      content: '';
    }

    div {
      transform-origin: right center;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border: 2px solid $black;
      border-radius: 20px;
      overflow: hidden;
      background-color: $white;
      transition: 0.5s;
      transition-delay: 0.3s;

      img {
        max-width: calc(100% + 4px);
        width: calc(100% + 4px);
        height: calc(100% + 4px);
        margin: -2px;
        object-fit: cover;
        object-position: center center;
      }
    }
  }
}
</style>
