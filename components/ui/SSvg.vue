<template>
  <!--  eslint-disable-next-line vue/no-v-html-->
  <div :class="[{fullWidth: fullWidth}, 's-svg']" v-html="svg" />
</template>

<script>
export default {
  name: 'SSvg',
  props: {
    name: {
      type: String,
      required: true,
    },
    fullWidth: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  computed: {
    svg() {
      try {
        return require(`images/svg/${this.name}.svg?raw`)
      } catch (e) {
        // eslint-disable-next-line no-console
        return console.error(e)
      }
    },
  },
}
</script>

<style scoped>
.fullWidth {
  width: 100%;
}
</style>
