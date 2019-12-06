<template>
  <div>
    {{this.$route.query.SerialID}}
  </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'
export default {
  methods:{
    created(){
      this.getPricelList(this.$route.query.SerialID)
    }
  }
}
</script>
