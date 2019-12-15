<template>
  <div class="scr">
       <div v-for="(item,index) in right" :key="index" class="right">
          <p class="tit" @click="handle">{{item.GroupName}}</p> 
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
    data(){
        return {
        flage:false
        }
    },
     computed: {
        ...mapState({
            right:state=> state.home.right
        })
    },
    methods:{
        ...mapActions({
            getPricelList:'price/getPricelList'
        }),
        detail(SerialID){
                console.log(SerialID)
                this.$router.push({
                path:'/about',
                query:{SerialID:SerialID}
            })
        },
        handle(){
            document.querySelector('.src').style='display:none'
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
        padding-left: .5rem;
        // margin-left: .2rem;
        line-height: .48rem;
        background: #F2F2F2
    }
    img{
        width: 1.8rem;
        margin-left: .4rem;
    }
</style>