<template>
  <div class="md-layout">
    <card-component v-for="(character, index) in characters" :key="index" :index="index">
      <template slot="photo">
        <img
          :src="photoName(character.name)"
          alt="images"
          class="photo">
      </template>
      <template slot="title" >
        <p style="font-size: 14px">{{character.name}}</p>
      </template>
      <template slot="subhead">
        {{character.height}}
      </template>
      <template slot="content">
        <p style="font-size: 13px" >Hair Color: <b> {{character.hair_color}}</b></p>
      </template>
      <template slot="buttons">
        <div class="buttons">
          <button-component :url="character.homeworld" name="homeworld"></button-component>
        </div>
      </template>
    </card-component>

  </div>
</template>

<script>
import ButtonComponent from '../atom/ButtonComponent'
import CardComponent from '../molecules/CardComponent'
export default {
  name: 'CardIteratorComponent',
  components: {
    CardComponent,
    ButtonComponent
  },
  props: {
    characters: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    photoName (name) {
      let formatedName = name.trim().split(' ').join('').toLowerCase()
      console.log(formatedName)
      return `static/${formatedName}.jpg`
    }
  }
}
</script>

<style scoped>
  .md-layout {
    margin-top: 10px;
  }
  .buttons {
    margin-left: 5px;
  }
  .photo {
    max-height: 220px;
  }
</style>
