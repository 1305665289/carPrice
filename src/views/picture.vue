<template>
   <div class="wrap">
     <header class="series_wrap_header">
            <p>颜色</p>
            <p>车款</p>
        </header>
        
          <Pir v-for="(item,index) in pic" :key="index" :item='item'/>
     
   </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'
import Pir from '@/components/Pir.vue'
export default {
  components:{
       Pir
  },
    computed: {
    ...mapState({
      pic:state=>state.pic.pic
    })
  },
  methods:{
      ...mapActions({
      getPicList:'pic/getPicList'
    })
  },
   created(){
      this.getPicList()
   }
}
</script>

<style lang='scss' scoped>
.wrap{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    min-height: 100%;
    background: #fff;
    display: flex;
    flex-direction: column
}
.series_wrap_header{
    width: 100%;
    height: 40px;
    display: flex;
    background: #ffffff;
    p{
        flex: 5;
        font-size: 16px;
        text-align: center;
        line-height: 40px;
    }
}

</style>