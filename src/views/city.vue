<template>
  <div class="box">
     <div class="title">
         <p>自动定位</p>
         <p @click="handle()" class="city">{{cityname}}</p>
     </div>
     <div class="concent">
         <p>省市</p>
         <van-cell is-link v-for="(item,index) in city" :key="index" @click="showPopup(item.CityID)">
            <li>{{item.CityName}}</li>
         </van-cell>
         
     </div>
    <van-popup v-model="flage" position="right"  :style="{ height: '100%',width:'80%' }" >
      <CityItem class="concent" :CityID="CityID" :provinceid="provinceid"/>
    </van-popup>

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
        provinceid:state=>state.city.provinceid,
        cityNumId:state=>state.city.cityNumId
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
    showPopup(index){
      this.flage=!this.flage
      this.CityID=index
      this.getCitySList(this.CityID)
      console.log(this.CityID) 
    },
    handT(){
      this.flage=!this.flage
    },
    getContainer() {
      return document.querySelector('.concent');
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
</style>
