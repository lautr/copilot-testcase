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
        ProductField(v-for="(value, key) in editingProduct" :key="key" :label="key" v-model="editingProduct[key]")
        button(type="submit") Save
        button(@click="cancelEdit") Cancel
    button(@click="addProduct") Add Product
    div(v-if="addingProduct")
      h3 Add Product
      form(@submit.prevent="saveNewProduct")
        ProductField(v-for="(value, key) in newProduct" :key="key" :label="key" v-model="newProduct[key]")
        button(type="submit") Save
        button(@click="cancelAdd") Cancel
</template>

<script>
import products from '~/data/products.json'
import ProductRow from '~/components/ProductRow.vue'
import ProductField from '~/components/ProductField.vue'
import ProductSort from '~/components/ProductSort.vue'
import ProductFilter from '~/components/ProductFilter.vue'
import { mapActions, mapState } from 'vuex'

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
      editingProduct: null,
      addingProduct: false,
      newProduct: this.createEmptyProduct(),
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
    editProduct(product) {
      this.editingProduct = { ...product }
    },
    saveProduct() {
      this.editProduct(this.editingProduct)
      this.editingProduct = null
    },
    cancelEdit() {
      this.editingProduct = null
    },
    addProduct() {
      this.addingProduct = true
    },
    saveNewProduct() {
      this.addProduct(this.newProduct)
      this.newProduct = this.createEmptyProduct()
      this.addingProduct = false
    },
    cancelAdd() {
      this.newProduct = this.createEmptyProduct()
      this.addingProduct = false
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
