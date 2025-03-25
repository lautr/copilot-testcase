<template lang="pug">
  div
    h2 Product Comparison Table
    ProductSort(@sort="sortProducts")
    ProductFilter(@filter="filterProducts")
    table
      thead
        tr
          th Name
          th Price
          th Brand
          th Rating
          th Edit
      tbody
        ProductRow(v-for="product in filteredProducts" :key="product.id" :product="product" @edit="editProduct")
    div(v-if="editingProduct")
      h3 Edit Product
      form(@submit.prevent="saveProduct")
        ProductField(label="Name" v-model="editingProduct.name")
        ProductField(label="Price" v-model="editingProduct.price")
        ProductField(label="Brand" v-model="editingProduct.brand")
        ProductField(label="Rating" v-model="editingProduct.rating")
        button(type="submit") Save
        button(@click="cancelEdit") Cancel
</template>

<script>
import products from '~/data/products.json'
import ProductRow from '~/components/ProductRow.vue'
import ProductField from '~/components/ProductField.vue'
import ProductSort from '~/components/ProductSort.vue'
import ProductFilter from '~/components/ProductFilter.vue'

export default {
  name: 'ProductComparisonTable',
  components: {
    ProductRow,
    ProductField,
    ProductSort,
    ProductFilter
  },
  data() {
    return {
      products: products,
      filteredProducts: products,
      editingProduct: null,
      sortKey: '',
      sortOrder: 'asc',
      filterKey: '',
      filterValue: ''
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
    },
    sortProducts(key) {
      this.sortKey = key
      this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc'
      this.filteredProducts.sort((a, b) => {
        let result = 0
        if (a[key] < b[key]) result = -1
        if (a[key] > b[key]) result = 1
        return this.sortOrder === 'asc' ? result : -result
      })
    },
    filterProducts(key, value) {
      this.filterKey = key
      this.filterValue = value
      this.filteredProducts = this.products.filter(product => {
        return product[key].toString().toLowerCase().includes(value.toLowerCase())
      })
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
