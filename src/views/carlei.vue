<template>
  <div class="box" @scroll="handleScroll(e)" ref="boxs">
    <p class="title">可向多个商家咨询最低价，商家及时回复</p>
    <div class="concent">
      <div class="con1"  v-if="Object.keys(arr).length">
          <img :src="arr.details.serial.Picture" alt="">
          <ul>
            <li>{{arr.details.serial.AliasName}}</li>
            <li>{{arr.details.market_attribute.year}}年{{arr.details.car_name}}</li>
          </ul>
      </div>

      <!-- 个人信息 -->
      <div class="prenter">
        <p class="titleP">个人信息</p>
        <div class="con2">
          <p>姓名<span>请输入您的真实中文姓名</span></p>
          <p>手机<span>请输入您的真实手机号码</span></p>
          <p>地址<span @click="handleCity(Molist.CityName)">{{Molist.CityName}} ></span></p>
          <div class="btn">
            <button>询最低价</button>
          </div>
        </div>
      </div>

      <!-- 报价经销商 -->
      <div class="address">
        <p class="titleA">选择报价经销商</p>
        <div class="conA">
          <ul  v-for="(item,index) in arr.list" :key="index">
            <input type="checkbox"/>
            <li>
              <p><span>{{item.dealerShortName}}</span><span>万</span></p>
              <p><span>{{item.address}}</span><span>售{{item.saleRange}}</span></p>
            </li>
          </ul>
        </div>
      </div>

      <!-- 询问低价 -->
      <div class="buttom">询问低价</div>

    </div>
  </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'
export default {
  data(){
    return {
      scrollTop:0
    }
  },
  computed: {
    ...mapState({
        arr:state=>state.price.arr,
        cityname:state=>state.price.cityname,
        Molist:state=>state.price.Molist
    })
  },
  methods:{
    ...mapActions({
      getPricelList:'price/getPricelList',
      getMoCityList:"price/getMoCityList"
    }),
   handleScroll(event){
    
   },
   handleCity(cityname){
     this.$router.push({
       path:'/city',
       query:{cityname:cityname}
     })
   }
  },
  mounted(){
     this.getMoCityList()
    let carId=localStorage.getItem("carId")
    let {CityID}=this.Molist
    console.log(CityID,carId)
    this.getPricelList({carId,CityID})
  }
}
</script>

<style lang="scss" scoped>
.box{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: #eeeeee;
  overflow: auto;
  // position: relative;
}
.title{
  height: .6rem;
  line-height: .6rem;
  width: 100%;
  background: #79cd92;
  text-align: center;
  color: #ffffff
}
.concent{
  flex: 1;
  overflow: auto;
}
.con1{
  height: 2rem;
  background: #fff;
  padding: .32rem .18rem .24rem;
  box-sizing: border-box;
  display: flex;
  img{
    width: 2.3rem;
    height: 1.41rem;
    border: 1px solid #eee;
    box-sizing: border-box;
    border-radius: 5px;
  }
  ul{
    margin-left: .2rem;
    width: 4.3rem;
  }
  ul li:nth-child(1){
    font-size: .36rem;
    line-height: 1;
    font-weight: bold;
    padding: .2rem
  }
  ul li:nth-child(2){
    font-size: .34rem;
    line-height: 1;
    padding-left: .2rem
  }
}
.prenter{
  height: 4.42rem;
  .titleP{
    line-height: .5rem;
    margin-left: .1rem;
  }
  .con2{
    background: #ffffff;
    p{
      line-height: .88rem;
      margin: 0 .1rem;
      border-bottom: 1px solid #aaaaaa
    }
    p span{
      margin-left: 2.8rem;
      color: #aaaaaa
    }
    p:nth-child(3) span{
      margin-left: 5.5rem;
    }
    .btn{
      height: 1.28rem;
    }
    button{
      width: 6rem;
      height: .7rem;
      font-size: .32rem;
      color: #fff;
      background: #3aacff;
      border-radius: .1rem;
      border: none;
      margin: .25rem .75rem ;
    }
  }
}
.address{
  margin-bottom: .3rem;
  .titleA{
    line-height: .5rem;
    font-size: .24rem;
    color: #666;
    background: #eee;
    padding: 0 .2rem;
  }
  .conA{
    background: #ffffff
  }
  ul{
    height: 1.63rem;
    margin: 0 .25rem;
    border-bottom: 1px solid #aaaaaa;
    display: flex;
    input{
      margin-top: .7rem;
      border: none;
      border-radius: 50%;
    }
    li p:nth-child(1){
      height: .4rem;
      font-size: .3rem;
      margin-top: .2rem;
      margin-left: .2rem;
      font-weight: 600
    }
    li p:nth-child(1) span:nth-child(2){
      color: red;
      font-size: .24rem;
      margin-left: 6rem
    }
    li p:nth-child(2){
      height: .21rem;
      font-size: .3rem;
      margin-top: .1rem;
      margin-left: .2rem;
      color: #a2a2a2;
      display: flex
    }
    li p:nth-child(2) span:nth-child(1){
      display: block;
      width: 4.6rem;
    }
    li p:nth-child(2) span:nth-child(2){
      margin-left: .9rem;
      font-size: 0.24rem;
      color: #a2a2a2;
      margin-top: .3rem
    }
  }
  ul:nth-last-child(1){
    border: none
  }
}
.buttom{
    width: 100%;
    height: 1rem;
    line-height: 1rem;
    background: #3aacff;
    text-align: center;
    font-size: .34rem;
    color: #fff;
}
.city{
  width: 100%;
  height: 100%;     
  position: absolute;
  top: 0;
  left: 0;
  display: none
}
</style>
