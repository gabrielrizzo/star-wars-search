<template>
  <div class="button">
    <md-button @click="pushRouteUrl(url)">{{name}}</md-button>
  </div>
</template>

<script>
import ButtonMixin from '@/components/mixins/ButtonMixin'
export default {
  name: 'ButtonComponent',
  props: {
    url: {
      type: String,
      default: '#'
    },
    name: {
      type: String,
      default: ''
    },
    characterName: {
      type: String,
      default: ''
    }
  },
  extends: ButtonMixin
}
</script>

<style scoped>
  .button {
  }
<style>
