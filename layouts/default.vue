<template>
  <div>
    <header>
      <h1>My Nuxt 2 / Vue 2 SSR Application</h1>
    </header>
    <main>
      <nuxt />
    </main>
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout'
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
