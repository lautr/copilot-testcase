<template lang="pug">
  div
    h1 Welcome to Nuxt 2 / Vue 2 SSR Application
    ProductComparisonTable
</template>

<script>
import ProductComparisonTable from '~/components/ProductComparisonTable.vue'
import ProductModal from '~/components/ProductModal.vue'

export default {
  name: 'IndexPage',
  components: {
    ProductComparisonTable,
    ProductModal
  }
}
</script>

<style scoped>
h1 {
  color: #333;
}
</style>
