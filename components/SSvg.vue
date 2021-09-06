<template>
  <!--  eslint-disable-next-line vue/no-v-html-->
  <div class="s-svg" v-html="svg" />
</template>

<script>
export default {
  name: 'SSvg',
  props: {
    name: {
      type: String,
      required: true,
    },
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

<style scoped></style>
