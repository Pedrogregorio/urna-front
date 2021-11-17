<template>
  <div class="home">
    <urna />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import Urna from '@/components/Urna.vue';
export default {
  name: 'Home',
  components: {
    Urna,
  },
  computed: {
    ...mapGetters([
      'getCode',
      'getCategory',
    ])
  },
  watch: {
    getCode(value) {
      if(this.getCategory.codeLength === value.length) {
        const code = value.join('')
        this.searchCode(code);
      }
    }
  },
  methods: {
    ...mapActions([
      'searchCode',
    ]),
  }
}
</script>
