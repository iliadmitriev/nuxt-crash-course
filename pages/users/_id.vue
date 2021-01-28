<template>
  <section>
    <h1>{{ user.name }}</h1>
    <hr>
    <p>Username: <span>{{ user.username }}</span></p>
    <p>Email: <span>{{ user.email }}</span></p>
    <p>Phone: <span>{{ user.phone }}</span></p>
    <p>Website: <a :href="user.website">{{ user.website }}</a></p>
  </section>
</template>

<script>
export default {
  name: "_id",
  validate({params}) {
    return /^\d+$/.test(params.id)
  },
  async asyncData({$axios, params}) {
    const user = await $axios.$get('https://jsonplaceholder.typicode.com/users/' + params.id)
    return {user}
  }
}
</script>

<style scoped>

</style>
