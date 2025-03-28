<template lang="pug">
  div(class="product-filter m-2")
    label(class="product-filter__label") Filter by:
    select(@change="updateFilterKey" class="product-filter__select p-2")
      option(value="name" class="product-filter__option") Name
      option(value="price" class="product-filter__option") Price
      option(value="brand" class="product-filter__option") Brand
      option(value="rating" class="product-filter__option") Rating
    input(type="text" v-model="filterValue" @input="updateFilterValue" class="product-filter__input p-2")
</template>

<script>
export default {
  name: 'ProductFilter',
  data() {
    return {
      filterKey: '',
      filterValue: ''
    }
  },
  methods: {
    filterProducts(key, value) {
      this.$emit('filter', { key, value })
    },
    updateFilterKey(event) {
      this.filterKey = event.target.value
      this.filterProducts(this.filterKey, this.filterValue)
    },
    updateFilterValue(event) {
      this.filterValue = event.target.value
      this.filterProducts(this.filterKey, this.filterValue)
    }
  }
}
</script>

<style scoped>
.product-filter {
  margin-bottom: 15px;
}
.product-filter__label {
  margin-right: 10px;
  font-family: 'Comic Sans MS', sans-serif;
  color: #ff6600;
}
.product-filter__select {
  padding: 5px;
  margin-right: 10px;
  border-radius: 5px;
  border: 2px solid #ff6600;
  font-family: 'Comic Sans MS', sans-serif;
  background-color: #fff;
}
.product-filter__option {
  font-family: 'Comic Sans MS', sans-serif;
}
.product-filter__input {
  padding: 5px;
  margin-right: 10px;
  border-radius: 5px;
  border: 2px solid #ff6600;
  font-family: 'Comic Sans MS', sans-serif;
  background-color: #fff;
}
</style>
