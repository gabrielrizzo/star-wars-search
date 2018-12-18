<template>
  <md-empty-state
      :class="classChooser"
      md-rounded
      :md-icon="icon"
      :md-label="message"
      :md-description="description">
    </md-empty-state>
</template>

<script>
export default {
  name: 'MessageComponent',
  data () {
    return {

    }
  },
  props: {
    message: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: ''
    },
    error: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classChooser: function () {
      if (this.error === true) {
        return 'md-accent msg'
      }
      return 'md-primary msg'
    }
  }
}
</script>

<style scoped>
  .msg {
    margin-top: 150px;
  }
</style>
