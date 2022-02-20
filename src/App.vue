<template>
  <nav class="navbar">
    <div class="navbar-brand">
      <a class="navbar-item" href="#">
        d.kanai
      </a>
    </div>
    <div class="navbar-menu is-active">
      <div class="navbar-start">
        <router-link class="navbar-item" to="/"><span>研修</span> </router-link>
        <router-link class="navbar-item" to="/about"> <span>提供事業主</span> </router-link>
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
