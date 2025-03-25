<template lang="pug">
  tr
    td {{ product.name }}
    td {{ product.price }}
    td {{ product.brand }}
    td {{ product.rating }}
    td
      button(@click="editProduct") Edit
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
button {
  margin: 0 5px;
}
</style>
