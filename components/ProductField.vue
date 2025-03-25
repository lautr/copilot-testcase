<template lang="pug">
  div
    label {{ label }}
    input(v-if="fieldType === 'text'" type="text" v-model="value" @input="updateValue")
    input(v-if="fieldType === 'number'" type="number" v-model="value" @input="updateValue")
    input(v-if="fieldType === 'checkbox'" type="checkbox" v-model="value" @change="updateValue")
    select(v-if="fieldType === 'select'" v-model="value" @change="updateValue")
      option(v-for="option in fieldOptions" :key="option" :value="option") {{ option }}
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
    fieldType: {
      type: String,
      required: true
    },
    fieldOptions: {
      type: Array,
      required: false,
      default: () => []
    }
  },
  methods: {
    updateValue(event) {
      if (this.fieldType === 'checkbox') {
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
