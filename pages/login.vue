<template>
  <section>
    <form @click.prevent>
      <h1>Login page</h1>
      <div class="form-group">
        <input type="text" name="" id="" class="form-control">
      </div>
      <p>
        <nuxt-link to="/">Home</nuxt-link>
      </p>
      <button type="submit" class="btn btn-primary">Login</button>
    </form>
  </section>
</template>

<script>
export default {
  name: "login",
  layout: 'empty'
}
</script>

<style scoped>
section {
}
form {
  max-width: 500px;
  margin: 0 auto;

}
</style>
