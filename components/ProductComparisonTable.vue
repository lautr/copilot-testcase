<template lang="pug">
  div
    h2 Product Comparison Table
    table
      thead
        tr
          th Name
          th Price
          th Brand
          th Rating
          th Edit
      tbody
        tr(v-for="product in products" :key="product.id")
          td {{ product.name }}
          td {{ product.price }}
          td {{ product.brand }}
          td {{ product.rating }}
          td
            button(@click="editProduct(product)") Edit
    div(v-if="editingProduct")
      h3 Edit Product
      form(@submit.prevent="saveProduct")
        label Name:
        input(type="text" v-model="editingProduct.name")
        label Price:
        input(type="text" v-model="editingProduct.price")
        label Brand:
        input(type="text" v-model="editingProduct.brand")
        label Rating:
        input(type="text" v-model="editingProduct.rating")
        button(type="submit") Save
        button(@click="cancelEdit") Cancel
</template>

<script>
import products from '~/data/products.json'

export default {
  name: 'ProductComparisonTable',
  data() {
    return {
      products: products,
      editingProduct: null
    }
  },
  methods: {
    editProduct(product) {
      this.editingProduct = { ...product }
    },
    saveProduct() {
      const index = this.products.findIndex(p => p.id === this.editingProduct.id)
      if (index !== -1) {
        this.products.splice(index, 1, this.editingProduct)
        this.editingProduct = null
      }
    },
    cancelEdit() {
      this.editingProduct = null
    }
  }
}
</script>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
}
th, td {
  border: 1px solid #ddd;
  padding: 8px;
}
th {
  background-color: #f2f2f2;
}
button {
  margin: 0 5px;
}
</style>
