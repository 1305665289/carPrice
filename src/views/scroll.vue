<template>
  <div class="box">
        <li v-for="(item,index) in imgList" :key="index">
               <span :style="{backgroundImage:'url('+item.Url+')'}"/>
        </li>
        <!-- <ImagePreview v-if="showImageSwiper" :showImageSwiper.sync="showImageSwiper"></ImagePreview> -->
  </div>
</template>

<script>
import { mapActions, mapState, mapMutations } from "vuex";
// //引入分类列表组件
// import ImageTypeList from '@/components/ImageTypeList.vue';
// //引入轮播组件
// import ImageSwiper from '@/components/ImageSwiper.vue';
// //引入预览组件
// import ImagePreview from '@/components/ImagePreview.vue';
export default {
  components:{
      // ImageTypeList,
      // ImageSwiper,
      // ImagePreview
  },
  data() {
    return {
        //  showImageSwiper: false
    }
  },
    computed: {
        ...mapState({
          imgList:state=>state.pic.imgList
        })
    },
    methods:{
    //    showSwiper(index, Count, List, ImageID){
    //   this.setCurrent(index);
    //   this.setImageList({
    //     Count,
    //     List,
    //     ImageID
    //   });
    //   this.showImageSwiper = true;
    // }
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
</style>