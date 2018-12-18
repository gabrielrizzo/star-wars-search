<template>
  <img :src="src">
</template>

<script>
export default {
  name: 'IconComponent',
  props: {
    src: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
</style>
