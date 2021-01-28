<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Nuxt SSR</a>
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <nuxt-link
              class="nav-link" to="/"
              active-class="active"
              exact
              no-prefetch
            >
              Home
            </nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link
              class="nav-link" to="/about"
              active-class="active"
              exact
              no-prefetch
            >
              About
            </nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link
              class="nav-link" to="/users"
              active-class="active"
              no-prefetch
            >
              Users
            </nuxt-link>
          </li>
          <li
            v-if="!hasToken"
            class="nav-item">
            <nuxt-link
              class="nav-link" to="/login"
              active-class="active"
              exact
              no-prefetch
            >
              Login
            </nuxt-link>
          <li
           v-if="hasToken"
           class="nav-item">
            <a
              class="nav-link" href="#"
              @click.prevent="logout"
            >
              Logout
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  computed: {
    hasToken() {
      return this.$store.getters.hasToken
    }
  },
  methods: {
    logout() {
      this.$store.dispatch('logout')
      this.$router.push(`/login?path=${this.$route.path}`)
    }
  }
}
</script>

<style scoped>

</style>
