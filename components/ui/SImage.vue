<template>
  <img :src="getImage(src)" :alt="alt" />
</template>

<script>
export default {
  name: 'SImage',
  props: {
    src: {
      type: String,
      default: '',
    },
    alt: {
      type: String,
      default: '',
    },
  },
  methods: {
    getImage(src) {
      try {
        return src.includes('https://')
          ? src
          : require('@/assets/images/' + src)
      } catch (e) {
        // eslint-disable-next-line no-console
        console.log(e)
      }
    },
  },
}
</script>
