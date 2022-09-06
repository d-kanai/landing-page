<template>
  <nav class="navbar is-dark">
    <div class="navbar-brand">
      <p class="navbar-item title m-2"><span class="icon"><i class="fa fa-signature"></i></span></p>
    </div>
    <div class="navbar-menu is-active">
      <div class="navbar-start">
        <router-link class="navbar-item" to="/"><span>研修</span> </router-link>
        <router-link class="navbar-item" to="/trainer"> <span>研修講師</span> </router-link>
        <router-link class="navbar-item" to="/about"> <span>事業概要</span> </router-link>
      </div>
    </div>
  </nav>
  <router-view />
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.navbar {
  // background: #393939;
  // color: white;
}

</style>
