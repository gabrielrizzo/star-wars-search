<template>
  <div>
    <homeworld-layout>
      <template slot="header">
        <tool-bar
          :options="options"
          v-model="value"
          :value="value"
          @click="search()"
          @enter="search()">
        </tool-bar>
      </template>
      <template slot="content">
        <load-component v-if="load"></load-component>
        <div class="md-layout">
          <card-component v-if="!load" v-for="(planet, index) in planet_selected"
            :key="index"
            :index="index"
            class="md-item-layout">
            <template slot="photo"><img src=""  alt="People"></template>
            <template slot="title" ><p style="font-size: 14px">{{ planet.name }}</p></template>
            <template slot="subhead">{{ planet.orbital_period }}</template>
            <template slot="content">
              <p style="font-size: 13px" >Climate: <br><b>{{ planet.climate }}</b></p>
            </template>
            <template slot="buttons">
              <div>
                <button-component :url="planet.url"
                  name="homeworld">
                </button-component>
                <more-info-button @click="setInfoVisibility(index)"
                  exibition_name="more info"
                  :object="planet">
                </more-info-button>
              </div>
            </template>
          </card-component>
        </div>
        <more-info-component v-if="infoVisibility"
          :obj="planet_selected[objIndex]">
        </more-info-component>
        <message-component v-show="messageVisibility"
          :message="message"
          icon="search"
          description="Just type in the search input"
          :error="searchNotFound">
        </message-component>
        </template>
      </homeworld-layout>
  </div>
</template>

<script>
import MessageComponent from '@/modules/sharedComponents/atom/MessageComponent'
import MoreInfoComponent from '@/modules/sharedComponents/organism/MoreInfoComponent'
import MoreInfoButton from '@/modules/sharedComponents/atom/MoreInfoButton'
import ButtonComponent from '@/modules/content/pages/MainPage/atom/ButtonComponent'
import CardComponent from '@/modules/content/pages/MainPage/molecules/CardComponent'
import { returnArray } from '@/helpers'
import ToolBar from '@/modules/content/pages/MainPage/organism/ToolBar'
import CardIteratorComponent from '@/modules/content/pages/MainPage/organism/CardIteratorComponent'
import PlanetCardIteratorComponent from '@/modules/planets/pages/HomeWorld/organism/PlanetCardIteratorComponent'
import LoadComponent from '@/modules/content/pages/MainPage/atom/LoadComponent'
import HomeworldLayout from '../layout/homeworldLayout'
import planet from '@/services/service/PlanetService.js'
export default {
  name: 'Homeworld',
  components: {
    LoadComponent,
    HomeworldLayout,
    CardIteratorComponent,
    ToolBar,
    PlanetCardIteratorComponent,
    CardComponent,
    ButtonComponent,
    MoreInfoButton,
    MoreInfoComponent,
    MessageComponent
  },
  props: {
    url: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      planet: {},
      load: true,
      value: '',
      planet_selected: [],
      options: [],
      infoVisibility: false,
      objIndex: null,
      message: 'Planet Not Found :(',
      messageVisibility: false
    }
  },
  mounted () {
    planet.getPlanetByUrl(this.url).then((response) => {
      setTimeout(() => { this.load = false }, 1000)

      this.planet_selected = returnArray(response.data) // retorna um array a partir do dado recebido
    })

    planet.getAllPlanet().then((response) => {
      this.options = returnArray(response.data.results, 'name') // retorna um array a partir do dado recebido, somento com o atributo passado
    })
  },
  methods: {
    search () {
      // setTimeout(() => { this.load = true }, 400)
      this.messageVisibility = false
      this.infoVisibility = false

      planet.getPlanet(this.value).then((response) => {
        this.planet_selected = returnArray(response.data.results)
      }).then(() => {
        this.load = false
        if (this.planet_selected.length === 0) {
          this.messageVisibility = true
        }
      })
    },
    setInfoVisibility (index) {
      this.infoVisibility = true
      this.objIndex = index
    }
  },
  computed: {
    searchNotFound: function () {
      console.log(this.message)
      if (this.planet_selected.length === 0 && this.message !== 'Planet Not Found :(') {
        return false
      }
      return true
    }
  }
}
</script>

<style scoped>
  .md-layout {
    margin-top: 20px;
    margin-left: 10px;
    margin-bottom: 10px;
  }
</style>
