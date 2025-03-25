<template lang="pug">
  div
    label Filter by:
    select(@change="updateFilterKey")
      option(value="name") Name
      option(value="price") Price
      option(value="brand") Brand
      option(value="rating") Rating
    input(type="text" v-model="filterValue" @input="updateFilterValue")
</template>

<script>
export default {
  name: 'ProductFilter',
  data() {
    return {
      filterKey: '',
      filterValue: ''
    }
  },
  methods: {
    updateFilterKey(event) {
      this.filterKey = event.target.value
      this.$emit('filter', this.filterKey, this.filterValue)
    },
    updateFilterValue(event) {
      this.filterValue = event.target.value
      this.$emit('filter', this.filterKey, this.filterValue)
    }
  }
}
</script>

<style scoped>
label {
  margin-right: 10px;
}
select, input {
  padding: 5px;
  margin-right: 10px;
}
</style>
