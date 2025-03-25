<template lang="pug">
  div
    h1 Welcome to Nuxt 2 / Vue 2 SSR Application
    ProductComparisonTable
</template>

<script>
import ProductComparisonTable from '~/components/ProductComparisonTable.vue'

export default {
  name: 'IndexPage',
  components: {
    ProductComparisonTable
  }
}
</script>

<style scoped>
h1 {
  color: #333;
}
</style>
