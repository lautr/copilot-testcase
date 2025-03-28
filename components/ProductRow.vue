<template lang="pug">
  tr(class="p-2")
    td(class="p-2") {{ product.name }}
    td(class="p-2") {{ product.price }}
    td(class="p-2") {{ product.brand }}
    td(class="p-2") {{ product.rating }}
    td(class="p-2")
      button(class="btn btn--edit m-1" @click="editProduct") Edit
</template>

<script>
export default {
  name: 'ProductRow',
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  methods: {
    editProduct() {
      this.$emit('edit', this.product)
    }
  }
}
</script>

<style scoped>
.btn {
  display: inline-block;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 10px;
}
.btn--edit {
  background-color: #ff6600;
  color: #fff;
  border: none;
}
.btn--edit:hover {
  background-color: #ff3300;
}
</style>
