<template>
  <md-button @click="click">
    <md-icon class="search">search</md-icon>
  </md-button>
</template>

<script>
export default {
  name: 'SearchCharacterButton',
  props: {
    value: {
      type: String,
      default: ''
    },
    character: {
      type: Array,
      default: () => []
    },
    load: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    click ($event) {
      this.$emit('click', $event)
    }
  }
}
</script>

<style>
</style>
