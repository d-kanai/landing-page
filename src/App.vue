<template>
  <nav class="navbar is-dark is-fixed-top">
    <div class="navbar-brand">
      <p class="navbar-item title m-2"><span class="icon"><i class="fa fa-signature"></i></span></p>
      <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navMenu" @click="toggleMenu">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <div class="navbar-menu" :class="{ 'is-active': menuIsActive }">
      <div class="navbar-start">
        <router-link @click="closeMenu" class="navbar-item" to="/"><span>研修</span> </router-link>
        <router-link @click="closeMenu" class="navbar-item" to="/trainer"> <span>研修講師</span> </router-link>
        <router-link @click="closeMenu" class="navbar-item" to="/about"> <span>事業概要</span> </router-link>
      </div>
    </div>
  </nav>
  <router-view />
</template>

<script lang="js">
export default {
  name: "App",
  data() {
    return {
      menuIsActive: false
    }
  },
  methods: {
    toggleMenu() {
      this.menuIsActive = !this.menuIsActive
      console.log(this.menuIsActive)
    },
    scrollToTop() {
      window.scrollTo(0,0)
    },
    closeMenu() {
      this.menuIsActive = false
      this.scrollToTop()
    },
  }
}

</script>

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
