<template lang="pug">
  div(v-if="isVisible" class="modal")
    div(class="modal-content p-4")
      span(class="close" @click="closeModal") &times;
      h2 {{ isEditing ? 'Edit Product' : 'Add Product' }}
      form(@submit.prevent="isEditing ? saveProduct() : saveNewProduct()" class="m-2")
        div(v-for="(value, key) in product" :key="key" class="m-2")
          ProductField(:label="key" v-model="product[key]" :inputType="getInputType(key)" :options="getOptions(key)" class="m-2")
        button(type="submit" class="btn btn--primary m-2") {{ isEditing ? 'Save' : 'Add' }}
        button(type="button" @click="isEditing ? cancelEdit() : cancelAdd()" class="btn btn--secondary m-2") Cancel
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
  background-color: rgba(0, 0, 0, 0.4);
  font-family: 'Comic Sans MS', sans-serif;
}
.modal-content {
  background-color: #ffcc00;
  margin: 15% auto;
  padding: 20px;
  border: 2px solid #ff6600;
  border-radius: 10px;
  width: 80%;
}
.close {
  color: #ff6600;
  float: right;
  font-size: 28px;
  font-weight: bold;
  cursor: pointer;
}
.close:hover,
.close:focus {
  color: #ff3300;
  text-decoration: none;
}
.btn {
  display: inline-block;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 10px;
}
.btn--primary {
  background-color: #ff6600;
  color: #fff;
  border: none;
}
.btn--primary:hover {
  background-color: #ff3300;
}
.btn--secondary {
  background-color: #fff;
  color: #ff6600;
  border: 2px solid #ff6600;
}
.btn--secondary:hover {
  background-color: #ffcc00;
}
</style>
