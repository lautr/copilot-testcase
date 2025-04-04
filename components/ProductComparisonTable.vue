<template lang="pug">
  div
    h2(class="m-2") Product Comparison Table
    ProductSort(@sort="sortProducts" class="m-2")
    ProductFilter(@filter="filterProducts" class="m-2")
    table(class="product-comparison-table w-100")
      thead
        tr
          th(v-for="column in columns" :key="column.name" class="product-comparison-table__header p-2") {{ column.name }}
          th(class="product-comparison-table__header p-2") Edit
      tbody
        ProductRow(v-for="product in filteredProducts" :key="product.id" :product="product" @edit="editProduct" class="p-2")
    button(class="btn btn--primary m-2" @click="addProduct") Add Product
    ProductModal(:product="editingProduct" :isEditing="true" :isVisible="isEditingModalVisible" @save="saveProduct" @cancel="cancelEdit" class="m-2")
    ProductModal(:product="newProduct" :isEditing="false" :isVisible="isAddingModalVisible" @save="saveNewProduct" @cancel="cancelAdd" class="m-2")
</template>

<script>
import ProductRow from '~/components/ProductRow.vue'
import ProductField from '~/components/ProductField.vue'
import ProductSort from '~/components/ProductSort.vue'
import ProductFilter from '~/components/ProductFilter.vue'
import ProductModal from '~/components/ProductModal.vue'

export default {
  name: 'ProductComparisonTable',
  components: {
    ProductRow,
    ProductField,
    ProductSort,
    ProductFilter,
    ProductModal
  },
  props: {
    products: {
      type: Array,
      required: true
    },
    columns: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      filteredProducts: this.products,
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
  methods: {
    addProduct(product) {
      this.$emit('add-product', product)
    },
    editProduct(editedProduct) {
      this.$emit('edit-product', editedProduct)
    },
    deleteProduct(productId) {
      this.$emit('delete-product', productId)
    },
    filterProducts(key, value) {
      this.filterKey = key
      this.filterValue = value
      this.filteredProducts = this.products.filter(product => {
        return product[key].toString().toLowerCase().includes(value.toLowerCase())
      })
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
    }
  }
}
</script>

<style scoped>
.product-comparison-table {
  width: 100%;
  border-collapse: collapse;
  font-family: 'Arial', sans-serif;
  background-color: #ffcc00;
  border-radius: 10px;
  overflow: hidden;
}
.product-comparison-table__header {
  border: 1px solid #000;
  padding: 10px;
  background-color: #ff6600;
  color: #fff;
  text-align: left;
}
.product-comparison-table__cell {
  border: 1px solid #000;
  padding: 10px;
  background-color: #fff;
  color: #000;
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
}
.btn--primary {
  background-color: #ff6600;
  color: #fff;
  border: none;
}
.btn--primary:hover {
  background-color: #ff3300;
}
</style>
