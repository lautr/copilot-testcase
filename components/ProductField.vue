<template lang="pug">
  div(class="product-field")
    label(class="product-field__label") {{ label }}
    input(v-if="fieldType === 'text'" type="text" v-model="value" @input="updateValue" class="product-field__input product-field__input--text")
    input(v-if="fieldType === 'number'" type="number" v-model="value" @input="updateValue" class="product-field__input product-field__input--number")
    input(v-if="fieldType === 'checkbox'" type="checkbox" v-model="value" @change="updateValue" class="product-field__input product-field__input--checkbox")
    select(v-if="fieldType === 'select'" v-model="value" @change="updateValue" class="product-field__select")
      option(v-for="option in fieldOptions" :key="option" :value="option" class="product-field__option") {{ option }}
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
.product-field {
  margin-bottom: 15px;
}
.product-field__label {
  display: block;
  margin-bottom: 5px;
  font-family: 'Comic Sans MS', sans-serif;
  color: #ff6600;
}
.product-field__input {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  border: 2px solid #ff6600;
  font-family: 'Comic Sans MS', sans-serif;
}
.product-field__input--text {
  background-color: #fff;
}
.product-field__input--number {
  background-color: #fff;
}
.product-field__input--checkbox {
  width: auto;
  margin-right: 10px;
}
.product-field__select {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  border: 2px solid #ff6600;
  font-family: 'Comic Sans MS', sans-serif;
  background-color: #fff;
}
.product-field__option {
  font-family: 'Comic Sans MS', sans-serif;
}
</style>
