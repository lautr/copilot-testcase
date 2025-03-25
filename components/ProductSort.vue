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
export default {
  name: 'ProductSort',
  methods: {
    updateSortKey(event) {
      this.$emit('sort', event.target.value)
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
