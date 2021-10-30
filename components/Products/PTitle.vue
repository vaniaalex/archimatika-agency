<template>
  <div class='title'>
    <h3 v-html='title'></h3>
  </div>
</template>
<script>
export default {
  name: 'PTitle',
  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>
