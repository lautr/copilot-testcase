<template lang="pug">
  div
    h1 Welcome to Nuxt 2 / Vue 2 SSR Application
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
h1 {
  color: #333;
}
</style>
