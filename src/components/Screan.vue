<template>
  <div class="screan">
    <div class="content-screan">
      <div class="content-code">
        <div class="code">
          <div class="category"> GOVERNADOR ESTADUAL </div>
          <div class="digits-code">
            <div class="digit"></div>
            <div class="digit"></div>
            <div class="digit"></div>
            <div class="digit"></div>
            <div class="digit"></div>
          </div>
        </div>
      </div>
      <div class="content-candidate">
        <div class="candidate-img">
          <img class="image-candidate" src="https://avatars.dicebear.com/api/open-peeps/your-custom-seed.svg">
        </div>
        <div class="info-candidate">
          <div>Nome: João</div>
          <div>Partido: PSD</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Screan'
}
</script>
<style lang="scss">
.screan {
  width: 100%;
  .content-screan {
    background: #bbc3c4;
    border-radius: 10px 0px 0px 10px;
    margin: 30px auto;
    max-width: 800px;
    height: 520px;
    display: flex;
    align-items: center;
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
            margin-right: 20px;
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