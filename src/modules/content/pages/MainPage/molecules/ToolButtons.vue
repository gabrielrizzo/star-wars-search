<template>
  <div>
    <redo-button></redo-button>
    <options-button :value="value"></options-button>
  </div>
</template>

<script>
import RedoButton from '../atom/RedoButton'
import OptionsButton from '../atom/OptionsButton'
export default {
  name: 'ToolButtons',
  components: {
    OptionsButton,
    RedoButton
  },
  props: {
    value: {
      type: String,
      default: ''
    }
  }
}
</script>

<style>
</style>
