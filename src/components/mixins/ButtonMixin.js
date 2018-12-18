export default {
  methods: {
    pushRouteUrl (url) {
      this.$router.push({
        name: this.name,
        params: {
          url: this.url
        }
      })
    }
  }
}
