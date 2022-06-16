<template>
  <div class="start">
    <div class="teste">
      <div class="content-category">
        <div>
          Selecione uma Categoria
        </div>
        <select
          v-model="category"
          class="category"
          name="kind"
        >
          <option value="president">President</option>
          <option value="state_governor">Governador Stadual</option>
          <option value="mayor">Prefeito</option>
        </select>
        <button class="button-next" @click="goToVote()"> Votar </button>
      </div>
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
  align-items: center;
  justify-content: center;
  .teste {
    width: 100%;
    text-align: center;
    .content-category {
      font-size: 1em;
      display: flex;
      margin: auto;
      padding: 30px;
      border: #c3c3c3 solid 1px;
      border-radius: 10px;
      max-width: 500px;
      flex-direction: column;
      justify-content: space-around;
      box-shadow: 1px 1px 4px 0px #bfbbbb;
      background: #fff;
      .button-next {
        color: blue;
        font-size: 1em;
        font-weight: bold;
        margin-top: 20px;
        background: transparent;
        border: 2px solid blue;
        border-radius: 10px;
        height: 50px;
        transition: 0.5s;
      }
      .button-next:hover {
        font-weight: bold;
        color: white;
        background: blue;
      }
      .category {
        text-align: center;
        margin-top: 20px;
        height: 50px;
        border-radius: 10px;
        font-size: 1em;
      }
    }
  }
}
</style>