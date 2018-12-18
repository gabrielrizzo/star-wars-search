<template>
  <div class="md-layout">
    <card-component v-for="(planet, index) in planets" :key="index" :index="index">
      <template slot="photo"><img src="src/helpers/images/2000px-Star_Wars_Logo.svg.png"  alt="planet"></template>
      <template slot="title" ><p style="font-size: 14px">{{planet.name}}</p></template>
      <template slot="subhead">{{planet.orbital_period}}</template>
      <template slot="content">
        <p style="font-size: 13px" >Climate: <br><b>{{planet.climate}}</b></p>
      </template>
      <template slot="buttons">
        <div>
          <button-component :url="planet.url" name="homeworld"></button-component>
          <more-info-button name="homeworldinfo" exibition_name="more info" :url_api="planet.url" :object="planet"></more-info-button>
        </div>
      </template>
    </card-component>

  </div>
</template>

<script>
import MoreInfoButton from '@/modules/sharedComponents/atom/MoreInfoButton'
import ButtonComponent from '@/modules/content/pages/MainPage/atom/ButtonComponent'
import CardComponent from '@/modules/content/pages/MainPage/molecules/CardComponent'
export default {
  name: 'PlanetCardIteratorComponent',
  components: {
    CardComponent,
    ButtonComponent,
    MoreInfoButton
  },
  props: {
    planets: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style scoped>
  .md-layout {
    margin-top: 10px;
  }
  .buttons {
    margin-left: 200px;
  }
</style>
