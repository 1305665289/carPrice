<template>
   <div class="wrap">
         <header class="series_wrap_header">
            <p @click="toColor()">颜色</p>
            <p @click="toKuan()">车款</p>
        </header>
        <main>
            <Pir v-for="(item,index) in pic" :key="index" :item='item'/>
        </main>
    <Banner v-if="showImageList" :showImageSwiper.sync="showImageSwiper" />
    <ImagePreview v-if="showImageSwiper" :showImageSwiper.sync="showImageSwiper"/> 
   </div>
</template>

<script>
import {mapActions, mapState,mapMutations} from 'vuex'
import Banner from "../components/bannerSwiper";
import ImagePreview from "../components/ImagePreview.vue";
import Pir from '@/components/Pir.vue'
export default {
  components:{
       Pir,
       Banner,
       ImagePreview
  },
  data() {
    return {
       showImageSwiper:false,
    }
  },
  computed: {
    ...mapState({
      pic:state=>state.pic.pic,
       showImageList: state => state.pic.showBanner
    })
  },
  methods:{
    ...mapActions({
      getPicList:'pic/getPicList',
    }),
       ...mapMutations({
      setSerialId: "pic/setSerialId"
    }),
    toColor(){
        console.log()
         this.$router.push({
           path:'/toColor',
           query:{SerialID:this.$route.query.SerialID}
         })
      },
      toKuan(){
        this.$router.push({
          path:'/toKuan',
          query:{SerialID:this.$route.query.SerialID}
        })
      }
   },
    showSwiper(index, Count, List, ImageID){
      this.setCurrent(index);
      this.setImageList({
        Count,
        List,
        ImageID
      });
      this.showImageSwiper = true;
    },
   created(){
      this.getPicList(this.$route.query.SerialID),
      this.setSerialId(this.$route.query.SerialID)
   }
}
</script>

<style lang='scss' scoped>
  .wrap{
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column
  }
  header{
      width: 100%;
      height: .4rem;
  }
  main{
      flex: 1;
      overflow: auto;
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

