<template lang="pug">
  div
    h1(class="page-title") Welcome to Nuxt 2 / Vue 2 SSR Application
    ProductComparisonTable
</template>

<script>
import ProductComparisonTable from '~/components/ProductComparisonTable.vue'
import ProductRow from '~/components/ProductRow.vue'
import ProductField from '~/components/ProductField.vue'
import ProductSort from '~/components/ProductSort.vue'
import ProductFilter from '~/components/ProductFilter.vue'

export default {
  name: 'IndexPage',
  components: {
    ProductComparisonTable,
    ProductRow,
    ProductField,
    ProductSort,
    ProductFilter
  }
}
</script>

<style scoped>
.page-title {
  color: #ff6600;
  font-family: 'Comic Sans MS', sans-serif;
  background-color: #ffcc00;
  padding: 10px;
  border-radius: 10px;
  text-align: center;
}
</style>
