<template>
  <div class="urna">
    <div class="content">
      <screan />
      <keyboard />
    </div>
  </div>
</template>
<script>
import Keyboard from './Keyboard.vue';
import Screan from './Screan.vue';
export default {
  components: { Screan, Keyboard },
  name: 'Urna',
}
</script>
<style lang="scss" scoped>
.urna {
  background: #dad7ca;
  border-radius: 20px;
  margin: 0px auto;
  max-width: 1338px;
  height: 600px;
  .content {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-template-rows: auto;
    align-items: center;
    justify-items: center;
    border-radius: 20px;
    box-shadow: 1px 1px 3px black;
  }
}
</style>
