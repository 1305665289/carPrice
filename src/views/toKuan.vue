<template>
  <div class="wrap">
      <header>
           <p>全部车款</p>
      </header>
       <main>
            <p class="year">
                 <span v-for="(item,index,key) in detailLists" :key="index" @click="handleC(item,key)" :class="{active: curIndex===key}"> 
                
                 </span>
            </p> 
             <!-- <ul>
                  <li v-for="(v,index) in KuanData" :key="index" @click="clickColor(v.ColorId)">
                   
                  </li>
             </ul> -->
      </main>
  </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'
export default {
    data() {
      return {
         KuanData:[],
         curIndex:0
      }
   },
   computed:{
      ...mapState({
           detailLists:store=>store.detail.detailLists
      })
    },
     methods:{
      ...mapActions({
            getKuanList:'toKuan/getKuanList'
         }),
        //    handleC(item,key){
        //     this.KuanData=item
        //     this.curIndex=key
        // },
        // clickColor(colorId){
        //     this.getCarKuan(colorId);
        // }
    },
      created(){
       this.getKuanList(this.$route.query.SerialID)
    }
}
</script>

<style lang='scss' scoped>
 *{
       color: #000
    }
   .wrap{
      width: 100%;
      height: 100%;
      background: #f4f4f4;
      display: flex;
      flex-direction: column
   }

   header{
      width: 100%;
      height: .8rem;
      margin: .15rem 0;
      background: white;
   }
   p{
      font-size: .34rem;
      color: #00afff;
      background: #fff;
      text-align: center;
      line-height: .8rem;
      height: .8rem;
   }
</style>