<template lang="pug">
  div
    label Sort by:
    select(@change="updateSortKey")
      option(value="name") Name
      option(value="price") Price
      option(value="brand") Brand
      option(value="rating") Rating
</template>

<script>
import { mapActions } from 'vuex'

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
label {
  margin-right: 10px;
}
select {
  padding: 5px;
}
</style>
