<template>
  <md-button class="md-icon-button" @click="pushRouteTest()">
      <md-icon>more_vert</md-icon>
  </md-button>
</template>

<script>
export default {
  name: 'OptionsButton',
  props: {
    value: String,
    default: ''
  },
  methods: {
    pushRouteTest (value) {
      this.$router.push({
        name: 'testingProp',
        params: {
          value: this.value
        }
      })
    }
  }
}
</script>

<style>
</style>
