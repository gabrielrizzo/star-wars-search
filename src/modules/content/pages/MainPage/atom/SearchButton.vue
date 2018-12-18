<template>
  <md-autocomplete
          class="search"
          :md-options="options"
          md-layout="box"
          v-model="model"
          @md-changed="emitEnter"
          @input="input"
          :md-open-on-focus='true'>
          <label>Search...</label>
  </md-autocomplete>
  <!-- <md-field>
    <md-input class="search"
            v-model="model"
            @keyup.enter="emitEnter"
            @input="input">
    </md-input>
  </md-field> -->
</template>

<script>
import InputMixin from '@/components/mixins/InputMixin'
export default {
  name: 'SearchButton',
  data: () => ({
    model: ''
  }),
  props: {
    options: {
      type: Array
    }
  },
  extends: InputMixin
}
</script>

<style scoped>
.search {
  max-width: 300px;
}
</style>
