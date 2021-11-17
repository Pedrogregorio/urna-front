<template>
  <div id="snackbar" :class="show">
    <div
      class="text-message"
      v-for="(msg, index) in getErrors"
      :key="index"
    >
      {{ msg.join(', ') }}
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'Error',
  data() {
    return {
      hasmessage: false
    }
  },
  watch: {
    getErrors(value) {
      if(value.length > 0) {
        this.hasmessage = true
        setTimeout(() => {
          this.hasmessage = false
          this.removeErrors()
        }, 3000)
      }
    }
  },
  computed: {
    ...mapGetters([
      'hasError',
      'getErrors',
    ]),
    show() {
      if(this.hasmessage) {
        return 'show'
      }
      return ''
    }
  },
  methods: {
    ...mapActions([
      'removeErrors'
    ])
  }
}
</script>

<style lang="scss" scoped>
#snackbar {
  visibility: hidden;
  min-width: 250px;
  margin-left: -125px;
  background-color: #333;
  color: #fff;
  text-align: center;
  border-radius: 2px;
  padding: 16px;
  position: fixed;
  z-index: 1;
  left: 50%;
  bottom: 30px;
  font-size: 17px;
  .text-message {
    color: white;
  }
}
#snackbar.show {
  visibility: visible;
  -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;
  animation: fadein 0.5s, fadeout 0.5s 2.5s;
}


@-webkit-keyframes fadein {
  from {bottom: 0; opacity: 0;} 
  to {bottom: 30px; opacity: 1;}
}

@keyframes fadein {
  from {bottom: 0; opacity: 0;}
  to {bottom: 30px; opacity: 1;}
}

@-webkit-keyframes fadeout {
  from {bottom: 30px; opacity: 1;} 
  to {bottom: 0; opacity: 0;}
}

@keyframes fadeout {
  from {bottom: 30px; opacity: 1;}
  to {bottom: 0; opacity: 0;}
}
</style>