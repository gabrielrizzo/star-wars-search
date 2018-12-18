<template>
  <md-field>
      <label>Initial Value</label>
      <md-input v-model="model"></md-input>
  </md-field>
</template>

<script>
export default {
  name: 'InputText',
  data: () => {
    return {
      model: ''
    }
  }
}
</script>

<style>
</style>
