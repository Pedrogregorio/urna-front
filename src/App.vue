<template>
  <div id="app">
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
  background: #ebfff6;
}
</style>
