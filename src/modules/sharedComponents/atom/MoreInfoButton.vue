<template>
  <div class="button">
    <md-button @click="moreInfo()">{{ exibition_name }}</md-button>
  </div>
</template>

<script>
export default {
  name: 'ButtonComponent',
  props: {
    exibition_name: {
      type: String,
      default: ''
    }
  },
  methods: {
    moreInfo ($event) {
      this.$emit('click', $event)
      // this.$router.push({
      //   name: this.name,
      //   params: {
      //     obj: this.object
      //   }
      // })
    }
  }
}
</script>

<style scoped>
<style>
