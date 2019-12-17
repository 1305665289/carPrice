<template>
  <div class="wrap">
      <!-- <header>
           <p class="pp" @click="fn()">全部车款</p>
      </header> -->
       <!-- <main> -->
            <!-- <p class="year">
                 <span v-for="(item,index) in listdata" :key="index"> 
                       {{item}}
                 </span>
            </p> 
            <div class="conOl" v-for="(item,index) in allYearList" :key="index">
                  <p class="tip">{{item.key}}</p>
                  <ul class="conUl" v-for="(ite,ind) in item.list" :key="ind">
                        <li class="lip1">
                          <p>
                             <span class="li1">{{ite.market_attribute.year}}款 {{ite.car_name}}</span>
                             <span class="li2">{{ite.market_attribute.dealer_price_min}}</span>
                          </p>
                          <p>
                             <span class="li3">{{ite.horse_power}}马力{{ite.gear_num}}档{{ite.trans_type}}</span> 
                             <span class="li4">指导价 {{ite.market_attribute.official_refer_price}}</span>
                          </p>  
                        </li>
                  </ul>
              </div> -->
              {{detailLists}}
      <!-- </main> -->
  </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'
export default {
   computed:{
      ...mapState({
           detailLists:state=>state.detail.detailLists,
           list:state=>state.detail.detailLists,
           listdata:state=>state.detail.detailYear,
           allYearList:state=>state.detail.allYearList
      })
    },
     methods:{
      ...mapActions({
            getDetailList:'detail/getDetailList'
         }),
         fn(){
            this.$router.back({
               path:"/picture",
            })
         }
    },
      created(){
       this.getDetailList(this.$route.query.SerialID)
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
   .pp{
      font-size: .34rem;
      color: #00afff;
      background: #fff;
      line-height: .8rem;
      justify-content: space-around;
   }
   .year{
      font-size: .34rem;
      color: #00afff;
      background: #fff;
      line-height: .8rem;
      height: .8rem;
      span{
          float: left;
          margin:0px 0px 0px 7.5px;
          font-size: 15px;
          color: #00afff
      }
   }
   .tip{
    padding: 0 .2rem;
    height: .5rem;
    display: flex;
    line-height: .6rem;
    font-size: .24rem;
    color: #666;
    background: #eee;
   }
   .lip1{
      background: white;
   }
   li{
    margin: 0 .2rem;
    padding: .20rem .06rem;
    border-bottom: 1px solid #eee;
    box-sizing: border-box;
    height: 1.25rem;
    line-height: 1;
    line-height: .5rem
   }
   p{
      display: flex;
      justify-content: space-between;
   }
   .li1{
      font-size: 15px;
   }
   .li2{
      color: red;
      font-size: 13px
   }
   .li3{
      font-size: 12px;
      color: #b3b3b3;
   }
   .li4{
      color: #818181;
      font-size: 12px
   }
</style>