<template lang="pug">
  div
    header(class="header p-4")
      h1(class="header__title m-2") My Nuxt 2 / Vue 2 SSR Application
    main(class="main-content p-4")
      ProductComparisonTable
</template>

<script>
import ProductComparisonTable from '~/components/ProductComparisonTable.vue'

export default {
  name: 'DefaultLayout',
  components: {
    ProductComparisonTable
  }
}
</script>

<style scoped>
.header {
  background-color: #ffcc00;
  color: #ff6600;
  padding: 1rem;
  text-align: center;
  border-radius: 10px;
  font-family: 'Comic Sans MS', sans-serif;
}
.header__title {
  margin: 0;
}
.main-content {
  padding: 1rem;
  font-family: 'Comic Sans MS', sans-serif;
}
</style>
