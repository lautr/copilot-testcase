<template lang="pug">
  div(v-if="isVisible" class="modal")
    div(class="modal-content")
      span(class="close" @click="closeModal") &times;
      h2 {{ isEditing ? 'Edit Product' : 'Add Product' }}
      form(@submit.prevent="isEditing ? saveProduct() : saveNewProduct()")
        div(v-for="(value, key) in product" :key="key")
          ProductField(:label="key" v-model="product[key]" :inputType="getInputType(key)" :options="getOptions(key)")
        button(type="submit") {{ isEditing ? 'Save' : 'Add' }}
        button(type="button" @click="isEditing ? cancelEdit() : cancelAdd()") Cancel
</template>

<script>
import ProductField from '~/components/ProductField.vue'

export default {
  name: 'ProductModal',
  components: {
    ProductField
  },
  props: {
    product: {
      type: Object,
      required: true
    },
    isEditing: {
      type: Boolean,
      required: true
    },
    isVisible: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    saveProduct() {
      this.$emit('save')
    },
    cancelEdit() {
      this.$emit('cancel')
    },
    saveNewProduct() {
      this.$emit('save')
    },
    cancelAdd() {
      this.$emit('cancel')
    },
    closeModal() {
      this.$emit('cancel')
    },
    getInputType(key) {
      const numberFields = ['price', 'rating', 'weight', 'waterConsumption']
      const checkboxFields = ['delayStart', 'childLock']
      const selectFields = ['programs', 'features']

      if (numberFields.includes(key)) return 'number'
      if (checkboxFields.includes(key)) return 'checkbox'
      if (selectFields.includes(key)) return 'select'
      return 'text'
    },
    getOptions(key) {
      const options = {
        programs: ['Eco', 'Intensive', 'Quick', 'Glass', 'Auto', 'Night', 'Steam'],
        features: ['Adjustable Racks', 'Half Load', 'Auto Open', 'AquaStop', 'Sensor Wash', 'WiFi', 'Steam Wash']
      }
      return options[key] || []
    }
  }
}
</script>

<style scoped>
.modal {
  display: block;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0,0,0);
  background-color: rgba(0,0,0,0.4);
}
.modal-content {
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
}
.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}
.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
</style>
