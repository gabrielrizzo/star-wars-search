<template>
  <h1> {{ value }}</h1>
</template>

<script>
export default {
  name: 'FooPage',
  props: {
    value: {
      type: String,
      default: ''
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
