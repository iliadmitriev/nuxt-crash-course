<template>
  <section>
    <h1>Users page</h1>
    <ul>
      <li
        v-for="user of users"
        :key="user.id"
      >
        <a
          href="#"
          @click.prevent="openUser(user.id)"
        >
          {{user.id}}: {{ user.name }}
        </a>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: "index",
  data: ()=> ({
  }),
  methods: {
    openUser(user) {
      this.$router.push('/users/' + user)
    }
  },
  computed: {
    users() {
      return this.$store.getters["users/users"]
    }
  },
  async fetch({store}) {
    if (store.getters["users/users"].length === 0) {
      await store.dispatch('users/fetch')
    }
  },
  middleware: ['auth']
}
</script>

<style scoped>

</style>
