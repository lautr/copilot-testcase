<template lang="pug">
  div
    header
      h1 My Nuxt 2 / Vue 2 SSR Application
    main
      ProductComparisonTable
</template>

<script>
import ProductComparisonTable from '~/components/ProductComparisonTable.vue'
import ProductRow from '~/components/ProductRow.vue'
import ProductField from '~/components/ProductField.vue'
import ProductSort from '~/components/ProductSort.vue'
import ProductFilter from '~/components/ProductFilter.vue'

export default {
  name: 'DefaultLayout',
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
header {
  background-color: #333;
  color: #fff;
  padding: 1rem;
  text-align: center;
}
</style>
