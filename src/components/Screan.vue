<template>
  <div class="screan">
    <div class="content-screan">
      <div class="content-code">
        <div class="code">
          <div class="category"> {{ getCategory.name }} </div>
          <div class="digits-code">

            <div
              v-for="(category, index) in getCategory.codeLength"
              :key="index"
              class="digit"
            >
              {{ getCode[index] }}
            </div>
          </div>
          <div
            v-if="showCandidate"
            class="info-candidate"
          >
            <div>Nome: {{ getCandidate.name }}</div>
            <div>Partido: {{ getCandidate.name }} </div>
          </div>
        </div>
      </div>
      <div
        v-if="showCandidate"
        class="content-candidate"
      >
        <div class="candidate-img">
          <img class="image-candidate" :src="getCandidate.photo">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Screan',
  // data() {
  //   return {
  //     showCandidate: false,
  //   };
  // },
  mounted() {
    console.log(this.getCategory)
  },
  computed: {
    ...mapGetters([
      'getCode',
      'getCategory',
      'getCandidate',
    ]),
    showCandidate() {
      return !!this.getCandidate?.name
    }
  },
}
</script>
<style lang="scss">
.screan {
  width: 100%;
  .content-screan {
    background: #fff;
    margin: 30px auto;
    max-width: 800px;
    height: 520px;
    display: flex;
    align-items: center;
    box-shadow: inset 0px 0px 5px black;
    .content-code {
      width: 100%;
      .code {
        max-width: 444px;
        height: 121px;
        margin-left: 80px;
        .category {
          width: 100%;
        }
        .digits-code {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          align-content: center;
          justify-content: flex-start;
          .digit {
            border: 2px solid black;
            width: 60px;
            height: 60px;
            margin-right: 1px;
            font-weight: bold;
            display: flex;
            justify-content: center;
            align-items: center;
          }
        }
      }
    }
    .content-candidate {
      width: 50%;
      .candidate-img {
        border-radius: 10px;
        background: #d9d9d9ed;
        max-width: 200px;
        height: 260px;
        display: flex;
        flex-direction: row;
        align-items: flex-end;
      }
      .info-candidate {
        margin-top: 20px;
        font-size: 20px;
        font-weight: 600;
      }
    }
  }
}
</style>