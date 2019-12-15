<template>
  <div>
      <div class="box">
        <div class="mack" @click="showbanner(item)">
            <p class="pos">{{item.Name}}</p>
            <p class="abs">{{item.Count}}张</p>
        </div>
        <li v-for="(itemimg,key) in item.List" :key="key">
            <span :style="{backgroundImage:'url('+itemimg.Url+')'}"/>
        </li>
  </div>
   
  </div>
  
</template>
<script>
import {mapActions, mapState,mapMutations} from 'vuex'
import Banner from './bannerSwiper.vue';
// import ImagePreview from "./preview.vue";
export default {
    components:{
         Banner,
    // ImagePreview
    },
    data() {
        return {
            showImageList:false
        }
    },
  props:['item'],
computed: {
        // showImageList: state => state.pic.showBanner
},
  methods:{
      ...mapMutations({
      setshowBanner:"pic/setshowBanner",
      setImageId:"pic/setImageId"
    }),
     showbanner(it){
      console.log(it.Id)
      this.showImageList=true
     this.setshowBanner(this.showImageList)
     this.setImageId(it.Id)
    },
      ...mapActions({
          imgList:'pic/imgList'
      }),
       showbanner(it){
      console.log(it.Id)
      this.showImageList=true
     this.setshowBanner(this.showImageList)
     this.setImageId(it.Id)
    }
    //   Toscroll(ImageID){
    //       console.log(ImageID)
    //       let SerialID=this.$route.query.SerialID
    //       this.$router.push({

    //           path:'/scroll',
    //           query:{SerialID}
    //       })
      
    //       console.log(SerialID,'aaaa')
    //       let Page=1,
    //           PageSize=30
    //       this.imgList({SerialID,ImageID,Page,PageSize})

    //   }

   }
}
</script>

<style lang='scss' scoped>
   *{
       margin: 0;
       padding: 0;
       list-style: none;
       text-decoration: none
   }
   .box{
       width: 100%;
       display: flex;
       flex-wrap: wrap;
       position: relative;
   } 
    li{
        width: 32.8%;
        height: 123px;
        padding: 1px 1px;
        span{
            display: inline-block;
            width: 100%;
            height: 100%;
            background-size: cover;
            background-position: center;
        }
    }
    .mack{
        top: 0px;
        left: 0px;
        width: 32.8%;
        height: 123px;
        position: absolute;
        background: rgba(0,0,0, .6);
    }
   .pos{
       top: 40px;
       left: 50px;
       z-index: 1;
       font-size: 14px;
       color: aliceblue;
       position: absolute;
   }
   .abs{
       top: 55px;
       left: 50px;
       z-index: 1;
       font-size: 14px;
       color: aliceblue;
       position: absolute;
   }
</style>