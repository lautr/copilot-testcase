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
    ProductModal(v-if="editingProduct || addingProduct" :product="modalProduct" :isEditing="isEditing" :isAdding="isAdding" @save="handleSave" @cancel="handleCancel" @add="handleAdd")
    button(@click="addProduct") Add Product
</template>

<script>
import products from '~/data/products.json'
import ProductRow from '~/components/ProductRow.vue'
import ProductSort from '~/components/ProductSort.vue'
import ProductFilter from '~/components/ProductFilter.vue'
import ProductModal from '~/components/ProductModal.vue'
import { mapActions, mapState } from 'vuex'

export default {
  name: 'ProductComparisonTable',
  components: {
    ProductRow,
    ProductSort,
    ProductFilter,
    ProductModal
  },
  data() {
    return {
      editingProduct: null,
      addingProduct: false,
      modalProduct: this.createEmptyProduct(),
      sortKey: '',
      sortOrder: 'asc',
      filterKey: '',
      filterValue: ''
    }
  },
  computed: {
    ...mapState(['products', 'filteredProducts'])
  },
  methods: {
    ...mapActions(['fetchProducts', 'addProduct', 'editProduct']),
    createEmptyProduct() {
      return {
        id: null,
        name: '',
        price: '',
        brand: '',
        rating: '',
        color: '',
        capacity: '',
        energyEfficiency: '',
        noiseLevel: '',
        dimensions: '',
        weight: '',
        waterConsumption: '',
        programs: [],
        delayStart: false,
        childLock: false,
        warranty: '',
        material: '',
        controlType: '',
        displayType: '',
        dryingSystem: '',
        installationType: '',
        features: []
      }
    },
    handleSave(product) {
      this.editProduct(product)
      this.editingProduct = null
    },
    handleCancel() {
      this.editingProduct = null
      this.addingProduct = false
    },
    handleAdd(product) {
      this.addProduct(product)
      this.addingProduct = false
    },
    editProduct(product) {
      this.editingProduct = { ...product }
      this.modalProduct = { ...product }
    },
    addProduct() {
      this.addingProduct = true
      this.modalProduct = this.createEmptyProduct()
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
  },
  created() {
    this.fetchProducts()
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
