<template>
  <div class="scr">
       <div v-for="(item,index) in right" :key="index" class="right">
          <p class="tit">{{item.GroupName}}</p> 
           <ul>
               <li v-for="(item,index) in item.GroupList" :key="index" @click="detail(item.SerialID)">
                   <img v-lazy="item.Picture" alt="">
                    <div class="rr">
                       <p class="col">{{item.AliasName}}</p>
                       <p class="price">{{item.DealerPrice}}</p>
                   </div>
               </li>
           </ul>
       </div>
  </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'
export default {
     computed: {
    ...mapState({
      right:state=> state.home.right
    })
  },
  methods:{
    detail(SerialID){
        console.log(SerialID)
        this.$router.push({
           path:'/about',
           query:{SerialID:SerialID}
      })
      
     }
   }
}
</script>

<style lang='scss' scoped> 
    .scr{
        overflow: auto;
    }
    .right{
        width: 100%;
    }
    li{
        height: 1.4rem;
          display: flex;
        border-bottom: 1px solid #ddd;
    }
    .rr{
        margin: 15px;
    }
    .col{
        font-size: 17px;
        color: #5f687A
    }
    .price{
        margin-top: .1rem;
        font-size: .28rem;
        color: red;
    }
  
    .tit{
        width: 100%;
        height: .48rem;
        font-size: 14px;
        padding-left: 15px;
        line-height: .48rem;
        background: #F2F2F2
    }
    img{
        width: 1.8rem;
        height: 1.2rem;
    }
</style>