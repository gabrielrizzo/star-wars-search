<template>
  <div>
    <md-progress-spinner :md-diameter="100" :md-stroke="10" md-mode="indeterminate" class="spin"></md-progress-spinner>
  </div>
</template>

<script>
export default {
  name: 'LoadComponent'
}
</script>

<style scoped>
  .spin {
    margin-top: 20%
  }
</style>
