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
          <div :class="n.class"> {{ n.number }} </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Keyboard',
  data() {
    return {
      numbers: [
        { number: '0', class: 'number' },
        { number: '1', class: 'number' },
        { number: '2', class: 'number' },
        { number: '3', class: 'number' },
        { number: '4', class: 'number' },
        { number: '5', class: 'number' },
        { number: '6', class: 'number' },
        { number: '7', class: 'number' },
        { number: '8', class: 'number' },
        { number: '', class: 'disable' },
        { number: '9', class: 'number' },
        { number: '', class: 'disable' },
        { number: 'BRANCO', class: 'white' },
        { number: 'CORRIGE', class: 'fix' },
        { number: 'CONFIRMA', class: 'confirm' },
      ]
    };
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
      border-top-right-radius: 20px;
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
      border-bottom-right-radius: 20px;
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
          height: 60px;
          grid-column: 1;
          grid-row: 1;
          background: #080806;
          font-size: 30px;
          color: white;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .disable {
          width: 100px;
          height: 60px;
          grid-column: 1;
          grid-row: 1;
        }
        .white {
          background: white;
          width: 100px;
          height: 58px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .fix {
          background: #d77133;
          width: 100px;
          height: 58px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .confirm {
          background: #77be92;
          width: 100px;
          height: 58px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
    }
  }
}
</style>