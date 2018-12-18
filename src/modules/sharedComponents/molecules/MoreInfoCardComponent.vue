<template>
  <div class="holder">
  <md-card class="md-primary md-elevation-10 card">

       <md-card-header>
         <div class="md-title title"><slot name="title"/></div>
         <div class="md-subhead"><slot name="subtitle"/></div>
       </md-card-header>

       <md-card-content>
         <slot name="content"/>
       </md-card-content>

       <md-card-actions>
         <slot name="actions"/>
       </md-card-actions>

   </md-card>
 </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  props: {
  }
}
</script>

<style scoped>
.card {
  width: 50%;
  height: 100%;
  margin-bottom: 20px;
  align: center;
  border-radius: 7px;
}
.holder {
  display: flex;
  align-items: center;
  justify-content: center;
}
.title {
  margin-bottom: 10px;
}
</style>
