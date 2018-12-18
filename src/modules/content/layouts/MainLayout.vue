<template>
  <md-content class="md-scrollbar">
      <slot name="header"/>
      <div id="content">
        <slot name="content">
          <router-view/>
        </slot>
      </div>
      <div id="footer">
        <slot name="footer"/>
      </div>
  </md-content>
</template>

<script>
export default {
  name: 'MainLayout'
}
</script>
<style scoped>
  .md-content {
    margin-top: 2px;
  }
</style>
