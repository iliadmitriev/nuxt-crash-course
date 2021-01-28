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
              exact
              no-prefetch
            >
              Users
            </nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar"
}
</script>

<style scoped>

</style>
