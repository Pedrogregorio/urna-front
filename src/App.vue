<template>
  <div id="app">
    <div class="nav">
      <router-link
        to="/"
        class="nav-item"
      >
        Inicio
      </router-link>
      <router-link
        to="/about"
        class="nav-item"
      >
        Cadastra Usuario/Candidato
      </router-link>
    </div>
    <router-view/>
    <error />
  </div>
</template>
<script>
import Error from '@/components/Error.vue'
export default {
  name: "App",
  components: {
    Error,
  }
}
</script>
<style lang="scss">
* {
  padding: 0;
  margin: 0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
}

#app {
  height: 100vh;
}

.nav {
  height: 100px;
  background: #00000085;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px;
  box-shadow: 0px 1px 8px black;
  .nav-item {
    text-decoration: auto;
    font-weight: bold;
    color: #fff;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
