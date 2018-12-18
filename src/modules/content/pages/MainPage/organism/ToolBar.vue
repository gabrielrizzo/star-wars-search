<template>
  <md-toolbar class="md-primary responsive" md-elevation="7">
    <div class="md-toolbar-row">
      <h3 class="md-title" style="font-size: 20px; flex: 2">Star Wars</h3>
      <search-field style="flex: 2" :options="options" @input="input" @click="click" @enter="emitEnter" :character="character" :load="load"></search-field>
      <div class="md-toolbar-section-end">
        <tool-buttons :value="value"></tool-buttons>
      </div>
    </div>
  </md-toolbar>
</template>

<script>
import SearchButton from '../atom/SearchButton'
import SearchField from '../molecules/SearchField'
import ToolButtons from '../molecules/ToolButtons'
import InputMixin from '@/components/mixins/InputMixin'
export default {
  name: 'ToolBar',
  components: {
    SearchButton,
    ToolButtons,
    SearchField
  },
  extends: InputMixin,
  props: {
    options: {
      type: Array,
      default: () => ([])
    },
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

  }
}
// <search-button :options="options" @input="input"></search-button>
</script>

<style scoped>
  #responsive {
    position: absolute;
    display: none;
  }
</style>
