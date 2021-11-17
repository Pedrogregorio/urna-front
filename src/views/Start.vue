<template>
  <div class="start">
    <div class="content-category">
      <label for=""> Selecione uma Categoria </label>
      <select
        v-model="category"
        name="kind"
      >
        <option value="president">President</option>
        <option value="state_governor">Governador Stadual</option>
        <option value="mayor">Prefeito</option>
      </select>
      <button @click="goToVote()"> Votar </button>
    </div>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  name: 'Start',
  data() {
    return{
      category: ''
    }
  },
  methods: {
    ...mapActions([
      'setCategory',
    ]),
    goToVote() {
      if (!this.category) return this.$store.dispatch('setErrors', ['Nao selecionado'])
      console.log(this.category)
      this.setCategory(this.category)
      this.$router.push({ name: "Home" })
    },
  }
}
</script>
<style lang="scss" scoped>
.start {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .content-category {
    display: flex;
    height: 100px;
    flex-direction: column;
    justify-content: space-around;
  }
}
</style>