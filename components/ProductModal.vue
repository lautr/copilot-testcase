<template lang="pug">
  div
    h3(v-if="isEditing") Edit Product
    h3(v-if="isAdding") Add Product
    form(@submit.prevent="handleSubmit")
      ProductField(v-for="(value, key) in product" :key="key" :label="key" v-model="product[key]")
      button(type="submit") Save
      button(@click="handleCancel") Cancel
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
    isAdding: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    handleSubmit() {
      if (this.isEditing) {
        this.$emit('save', this.product)
      } else if (this.isAdding) {
        this.$emit('add', this.product)
      }
    },
    handleCancel() {
      this.$emit('cancel')
    }
  }
}
</script>

<style scoped>
button {
  margin: 0 5px;
}
</style>
