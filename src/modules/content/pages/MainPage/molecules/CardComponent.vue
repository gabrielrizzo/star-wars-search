<template>
  <div>
  <md-card class="md-elevation-10 card">
      <md-card-media>
        <div class="photo">
          <slot name="photo"/>
        </div>
      </md-card-media>

      <md-card-header>
        <div class="md-title"><slot name="title"/></div>
        <div class="md-subhead"><slot name="subhead"/></div>
      </md-card-header>

      <md-card-actions>
        <div class="buttons">
          <slot name="buttons"/>
        </div>
      </md-card-actions>

      <md-card-content>
        <slot name="content"/>
      </md-card-content>
    </md-card>
  </div>
</template>

<script>
export default {
  name: 'CardComponent'
}
</script>

<style scoped>
  .card {
    margin-top: 5%;
    margin-left: 5%;
    max-width: 200px;
  }
  .buttons {
    margin-right: 18%;
  }
</style>
