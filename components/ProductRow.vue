<template lang="pug">
  tr
    td {{ product.name }}
    td {{ product.price }}
    td {{ product.brand }}
    td {{ product.rating }}
    td
      button(class="btn btn--edit" @click="editProduct") Edit
</template>

<script>
import { mapActions } from 'vuex'
import store from '~/store'

export default {
  name: 'ProductRow',
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  methods: {
    ...mapActions(['editProduct']),
    editProduct() {
      this.editProduct(this.product)
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
