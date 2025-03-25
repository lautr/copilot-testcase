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
    button(@click="addProduct") Add Product
    ProductModal(:product="editingProduct" :isEditing="true" :isVisible="isEditingModalVisible" @save="saveProduct" @cancel="cancelEdit")
    ProductModal(:product="newProduct" :isEditing="false" :isVisible="isAddingModalVisible" @save="saveNewProduct" @cancel="cancelAdd")
</template>

<script>
import products from '~/data/products.json'
import ProductRow from '~/components/ProductRow.vue'
import ProductField from '~/components/ProductField.vue'
import ProductSort from '~/components/ProductSort.vue'
import ProductFilter from '~/components/ProductFilter.vue'
import ProductModal from '~/components/ProductModal.vue'
import { mapActions, mapState } from 'vuex'
import store from '~/store'

export default {
  name: 'ProductComparisonTable',
  components: {
    ProductRow,
    ProductField,
    ProductSort,
    ProductFilter,
    ProductModal
  },
  data() {
    return {
      editingProduct: null,
      addingProduct: false,
      newProduct: this.createEmptyProduct(),
      sortKey: '',
      sortOrder: 'asc',
      filterKey: '',
      filterValue: '',
      isEditingModalVisible: false,
      isAddingModalVisible: false
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
      this.isEditingModalVisible = true
    },
    saveProduct() {
      this.editProduct(this.editingProduct)
      this.editingProduct = null
      this.isEditingModalVisible = false
    },
    cancelEdit() {
      this.editingProduct = null
      this.isEditingModalVisible = false
    },
    addProduct() {
      this.isAddingModalVisible = true
    },
    saveNewProduct() {
      this.addProduct(this.newProduct)
      this.newProduct = this.createEmptyProduct()
      this.isAddingModalVisible = false
    },
    cancelAdd() {
      this.newProduct = this.createEmptyProduct()
      this.isAddingModalVisible = false
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
