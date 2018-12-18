<template>
  <div class="hello">
    <main-layout>
      <template slot="header">
        <tool-bar
          :options="options"
          v-model="value"
          :value="value"
          @click="search()"
          @enter="search()"
          v-on:update:load="load != load">
        </tool-bar>
      </template>
      <template slot="content">
        <load-component v-if="load"></load-component>
        <div>
          <message-component
            v-show="messageVisibility"
            :message="message"
            icon="search"
            description="Just type in the search input"
            :error="searchNotFound">
          </message-component>
          <card-iterator-component
            :characters="character"
            v-if="!load">
          </card-iterator-component>
        </div>
      </template>
    </main-layout>
  </div>
</template>

<script>
import MessageComponent from '@/modules/sharedComponents/atom/MessageComponent'
import { returnArray } from '@/helpers'
import CardIteratorComponent from './MainPage/organism/CardIteratorComponent'
import MainLayout from '../layouts/MainLayout'
import SearchButton from './MainPage/atom/SearchButton'
import OptionsButton from './MainPage/atom/OptionsButton'
import ToolBar from './MainPage/organism/ToolBar'
import { generic } from '@/services/service/GenericService.js'
import LoadComponent from './MainPage/atom/LoadComponent'
export default {
  components: {
    MainLayout,
    SearchButton,
    ToolBar,
    OptionsButton,
    LoadComponent,
    CardIteratorComponent,
    MessageComponent
  },
  name: 'MainPage',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      options: [
      ],
      value: '',
      load: true,
      character: [],
      message: 'Search for your favorite characters !',
      messageVisibility: true
    }
  },
  mounted () {
    console.log(generic)
    this.load = false
    // generic('people').getAllData().then((response) => {
    //   this.options = returnArray(response.data.results,'name')
    // }).then(() => {
    //   this.load = false
    //   this.messageVisibility = true
    // })

    generic('people').getDataByQuery('Luke').then((response) => {
      console.log(response)
    })
  },
  methods: {
    search () {
      this.messageVisibility = false
      generic('people').getDataByQuery(this.value).then((response) => {
        this.character = returnArray(response.data.results)
      }).then(() => {
        if (this.character.length === 0) {
          this.setErrorSearch()
        }
        this.load = false
      })
    },
    fetchPeopleData () {
      generic('people').getDataByQuery(this.value).then((response) => {
        this.options = returnArray(response.data.results, 'name')
      })
    },
    setErrorSearch () {
      this.messageVisibility = true
      this.message = 'Nothing found'
    }
  },
  computed: {
    searchNotFound: function () {
      console.log(this.message)
      if (this.character.length === 0 && this.message !== 'Nothing found') {
        return false
      }
      return true
    }
  },
  watch: {
    value: {
      handler: 'fetchPeopleData',
      immediate: true
    }
  }
}
</script>

<style scoped>
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>
