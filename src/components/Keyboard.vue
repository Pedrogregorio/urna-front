<template>
  <div class="keyboard">
    <div class="content-keyboard">
      <div class="content-logo">
        <img class="logo-JF" src="@/assets/logo-JF.png" alt="">
        <div>
          <h1> JUSTIÇA ELEITORAL </h1>
        </div>
      </div>
      <div class="content-keyboar-numbers">
        
        <div
          v-for="(n, index) in numbers"
          :key="index"
          class="content-number"
        >
          <button
            v-show="n.show"
            :class="n.class"
            @click="addNumber(n.number)"
          >
            {{ n.number }}
          </button>
        </div>

        <div class="content-number">
          <button class="white">
            BRANCO
          </button>
        </div>

        <div class="content-number">
          <button
            class="fix"
            @click="fix()"
          >
            CORRIGE
          </button>
        </div>

        <div class="content-number">
          <button class="confirm">
            CONFIRMA
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Keyboard',
  data() {
    return {
      code: [],
      numbers: [
        { number: '0', class: 'number', show: true },
        { number: '1', class: 'number', show: true },
        { number: '2', class: 'number', show: true },
        { number: '3', class: 'number', show: true },
        { number: '4', class: 'number', show: true },
        { number: '5', class: 'number', show: true },
        { number: '6', class: 'number', show: true },
        { number: '7', class: 'number', show: true },
        { number: '8', class: 'number', show: true },
        { number: '', class: '', show: false },
        { number: '9', class: 'number', show: true },
        { number: '', class: '', show: false },
      ]
    };
  },
  computed: {
    ...mapGetters([
      'getCode'
    ])
  },
  methods: {
    ...mapActions([
      'setCode',
      'removeCode',
    ]),
    addNumber(number) {
      this.setCode(number);
    },
    fix() {
      this.removeCode();
    },
  },
}
</script>
<style lang="scss" scoped>
.keyboard {
  width: 100%;
  .content-keyboard {
    border-radius: 20px;
    margin: 30px auto;
    max-width: 362px;
    height: 520px;
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: 1fr 3fr;
    .content-logo {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      background: #e6e7e9;
      .logo-JF {
        width: 50px;
        height: 50px;
        margin: 0px 40px 0px 30px;
      }
    }
    .content-keyboar-numbers {
      width: 100%;
      height: 100%;
      background: #6c6d70;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
      .content-number {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        .number {
          width: 100px;
          height: 58px;
          background: #080806;
          font-size: 30px;
          color: white;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .white {
          background: white;
          width: 100px;
          height: 58px;
          display: flex;
          justify-content: center;
          align-items: center;
          font-weight: bold;
        }
        .fix {
          background: #d77133;
          width: 100px;
          height: 58px;
          display: flex;
          justify-content: center;
          align-items: center;
          font-weight: bold;
        }
        .confirm {
          background: #77be92;
          width: 100px;
          height: 58px;
          display: flex;
          justify-content: center;
          align-items: center;
          font-weight: bold;
        }
      }
    }
  }
}
</style>