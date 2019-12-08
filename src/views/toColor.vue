<template>
   <div>
       颜色
   </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'
export default {
    computed:{
      ...mapState({
           list:state=>state.toColor.list
      })
    },
    methods:{
  ...mapActions({
      getPicList:'toColor/getColorList'
    }),
    },
 created(){
      this.getColorList(this.$route.query.SerialID)
   }
}
</script>

<style>

</style>