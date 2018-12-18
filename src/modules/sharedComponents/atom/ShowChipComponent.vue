<template>
  <md-chip class="md-accent chip" md-clickable>
    <md-tooltip md-direction="top" class="tip">{{property | removeUnderline }}</md-tooltip>
    {{text}}
  </md-chip>

</template>

<script>
export default {
  name: 'ShowChipsComponent',
  props: {
    dynamic: {
      type: Boolean,
      default: true
    },
    text: {
      type: String,
      default: ''
    },
    property: {
      type: String,
      default: ''
    }
  },
  filters: {
    removeUnderline (value) {
      let newValue = value.toString()
      return newValue.replace('_', ' ')
    }
  }
}
</script>

<style scoped>
  .chip {
    margin-left: 2px;
    margin-right: 2px;
    margin-bottom: 10px;
    margin-top: 3px;
  }
  .tip {
    font-size: 16px;
  }
</style>
