<template>
  <div id="search">
    <div>
      <search-character-button :value="value" :character="character" @click="click" @enter="emitEnter" :load="load"></search-character-button>
    </div>
    <search-button :options="options" @enter="emitEnter" @input="input"></search-button>
  </div>
</template>

<script>
import SearchButton from '../atom/SearchButton'
import SearchCharacterButton from '../atom/SearchCharacterButton'
import InputMixin from '@/components/mixins/InputMixin'
export default {
  components: {
    SearchButton,
    SearchCharacterButton
  },
  extends: InputMixin,
  name: 'SearchField',
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
  }
}
</script>

<style scoped>
  #search {
    display: inline-flex;
    margin-right: 150px;
  }
  .search {

  }
</style>
