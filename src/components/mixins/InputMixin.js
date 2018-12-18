
export default {
  methods: {
    input ($event) {
      this.$emit('input', $event)
    },
    click ($event) {
      this.$emit('click', $event)
    },
    update ($event) {
      this.$emit('update', $event)
    },
    emitEnter ($event) {
      this.$emit('enter', $event)
    },
    test () {
      alert('oi')
    }
  }
}
