<template>
  <h1>{{ obj.name }}</h1>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  props: {
    obj: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style>
</style>
