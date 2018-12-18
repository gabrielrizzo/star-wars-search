<template>
  <!-- <h1>{{obj.name}}</h1> -->
  <div>
  <more-info-card-component>
    <template slot="title"><icon-component src="static/icons8-planet-24.png"></icon-component>{{ obj.name }}</template>
    <template slot="subtitle">

      <show-chip-component v-for="(property, index) in properties"
        v-if="Array.isArray(obj[property]) === false"
        :key="index"
        :index="index"
        :text="obj[property]"
        :property="property">
      </show-chip-component>
    </template>
  </more-info-card-component>
</div>
</template>

<script>
import IconComponent from '../atom/IconComponent'
import MoreInfoCardComponent from '../molecules/MoreInfoCardComponent'
import ShowChipComponent from '../atom/ShowChipComponent'
export default {
  name: 'MoreInfoComponent',
  props: {
    obj: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {
      properties: []
    }
  },
  components: {
    MoreInfoCardComponent,
    ShowChipComponent,
    IconComponent
  },
  mounted () {
    this.properties = Object.keys(this.obj)
  }
}
</script>

<style scoped>
</style>
