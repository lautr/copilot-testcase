<template lang="pug">
  div(class="product-sort m-2")
    label(class="product-sort__label") Sort by:
    select(@change="updateSortKey" class="product-sort__select p-2")
      option(value="name" class="product-sort__option") Name
      option(value="price" class="product-sort__option") Price
      option(value="brand" class="product-sort__option") Brand
      option(value="rating" class="product-sort__option") Rating
</template>

<script>
import { mapActions } from 'vuex'
import store from '~/store'

export default {
  name: 'ProductSort',
  methods: {
    ...mapActions(['sortProducts']),
    updateSortKey(event) {
      this.sortProducts(event.target.value)
    }
  }
}
</script>

<style scoped>
.product-sort {
  margin-bottom: 15px;
}
.product-sort__label {
  margin-right: 10px;
  font-family: 'Comic Sans MS', sans-serif;
  color: #ff6600;
}
.product-sort__select {
  padding: 5px;
  border-radius: 5px;
  border: 2px solid #ff6600;
  font-family: 'Comic Sans MS', sans-serif;
  background-color: #fff;
}
.product-sort__option {
  font-family: 'Comic Sans MS', sans-serif;
}
</style>
