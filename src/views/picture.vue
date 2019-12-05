<template>
  <div class="about">
    <h1>{{this.$route.query.SerialID}}</h1>
  </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'
export default {
  methods:{
    created(){
      this.getPiclList(this.$route.query.SerialID)
    }
   }
}
</script>
