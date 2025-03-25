<template lang="pug">
  div
    label {{ label }}
    input(v-model="value")
</template>

<script>
export default {
  name: 'ProductField',
  props: {
    label: {
      type: String,
      required: true
    },
    value: {
      type: [String, Number],
      required: true
    }
  },
  methods: {
    updateValue(event) {
      this.$emit('input', event.target.value)
    }
  }
}
</script>

<style scoped>
label {
  display: block;
  margin-bottom: 5px;
}
input {
  width: 100%;
  padding: 5px;
  margin-bottom: 10px;
}
</style>
