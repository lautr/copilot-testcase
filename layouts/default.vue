<template lang="pug">
  div
    header
      h1 My Nuxt 2 / Vue 2 SSR Application
    main
      ProductComparisonTable
</template>

<script>
import ProductComparisonTable from '~/components/ProductComparisonTable.vue'
import ProductModal from '~/components/ProductModal.vue'

export default {
  name: 'DefaultLayout',
  components: {
    ProductComparisonTable,
    ProductModal
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
