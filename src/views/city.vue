<template>
  <div class="box">
     <div class="title">
         <p>自动定位</p>
         <p @click="handle()" class="city">{{cityname}}</p>
     </div>
     <div class="concent">
         <p>省市</p>
         <ul v-for="(item,index) in city" :key="index" @click="handleC(item.CityID)">
             <li>{{item.CityName}}</li>
         </ul>
     </div>

     <!-- 弹框 -->
    <div class="shi" v-if="flage" @click="handT">
        <CityItem class="concent" :CityID="CityID" :provinceid="provinceid"/>
    </div>

  </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'
import CityItem from '../components/CityItem'
export default {
  data(){
    return {
      flage:false,
      CityID:''
    }
  },
  components:{
    CityItem
  },
  computed: {
    ...mapState({
        city:state=>state.city.city,
        provinceid:state=>state.city.provinceid
    })
  },
  methods:{
    ...mapActions({
      getCityList:'city/getCityList',
      getCitySList:'city/getCitySList'
    }),
    handle(){
      this.$router.push({
          path:'/carlei'
      })
    },
    handleC(index){
      this.flage=!this.flage
      this.CityID=index
      this.getCitySList(this.CityID)
      console.log(this.CityID) 
    },
    handT(){
      this.flage=!this.flage
    }
  },
  created(){ 
    this.getCityList()
    this.cityname=this.$route.query.cityname
    console.log(this.cityname)
  }
  
}
</script>

<style lang="scss" scoped>
.box{
    width: 100%;
    height: 100%;
    overflow: auto;
    position: relative;
}
.shi{
  background: rgba($color: #000000, $alpha: .5);
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  .concent{
    width: 80%;
    height: 100%;
    margin-left: 20%;
    background: #fff;
    overflow-y: scroll;
  }
}
.title p:nth-child(1){
    height: .4rem;
    line-height: .4rem;
    font-size: .24rem;
    padding-left: .2rem;
    background: #f4f4f4;
}
.title p:nth-child(2){
    padding-left: .4rem;
    font-size: .28rem;
    height: .8rem;
    line-height: .8rem;
    background: #fff;
}
.concent p:nth-child(1){
    height: .4rem;
    line-height: .4rem;
    font-size: .24rem;
    padding-left: .2rem;
    background: #f4f4f4;
}
.concent ul{
    background: #ffffff
}
.concent ul li{
    padding-left: .3rem;
    font-size: .28rem;
    height: .8rem;
    line-height: .8rem;
    border-bottom: 1px solid #eee;
    box-sizing: border-box;
    margin-left: .1rem;
    position: relative;
}
li::after{
    content: "";
    display: inline-block;
    padding-top: .16rem;
    padding-right: .16rem;
    border-top: 1px solid #999;
    border-right: 1px solid #999;
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
    position: absolute;
    right: .35rem;
    top: .3rem;
}

</style>
