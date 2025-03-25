<template lang="pug">
  div
    label {{ label }}
    input(v-if="inputType === 'text'" type="text" v-model="value" @input="updateValue")
    input(v-if="inputType === 'number'" type="number" v-model="value" @input="updateValue")
    input(v-if="inputType === 'checkbox'" type="checkbox" v-model="value" @change="updateValue")
    select(v-if="inputType === 'select'" v-model="value" @change="updateValue")
      option(v-for="option in options" :key="option" :value="option") {{ option }}
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
      type: [String, Number, Boolean, Array],
      required: true
    },
    inputType: {
      type: String,
      required: true
    },
    options: {
      type: Array,
      required: false,
      default: () => []
    }
  },
  methods: {
    updateValue(event) {
      if (this.inputType === 'checkbox') {
        this.$emit('input', event.target.checked)
      } else {
        this.$emit('input', event.target.value)
      }
    }
  }
}
</script>

<style scoped>
label {
  display: block;
  margin-bottom: 5px;
}
input, select {
  width: 100%;
  padding: 5px;
  margin-bottom: 10px;
}
</style>
