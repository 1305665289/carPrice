<template>
    <div class="swiperBox">
    <scroll
            ref="scroll"
            :data="value"
             :pullDownRefresh="pullDownRefreshObj"
            :pullUpLoad="pullUpLoadObj"
            @pullingDown="onPullingDown"
            @pullingUp="onPullingUp"
        >
            <ul>
                <span :key="index" @click="showSwiper(index)" v-for="(item, index) in value" :style="{backgroundImage: 'url('+item.Url.replace('{0}', item.LowSize)+')'}"/>
            </ul>
        </scroll>
    </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
import Scroll from './better-scroll/scroll';
import CommonList from "./CommonList"
export default {
    computed: {
            ...mapState({
                count: state => state.pic.count,
                value: state => state.pic.imageList,
                page: state => state.pic.page
            }),
             pullDownRefreshObj: () => {
                return {
                    threshold: 90,
                    stop: 50,
                    txt: '刷新成功'
                }
            },
            pullUpLoadObj: () => {
                return {
                    threshold: 50,
                    txt: {
                        more: '加载更多',
                        noMore: '没有更多数据了'
                    }
                }
            }
        },
            watch: {
            pullDownRefreshObj: {
                handler(val) {
                    const scroll = this.$refs.scroll.scroll
                    if (val) {
                        scroll.openPullDown()
                    } else {
                        scroll.closePullDown()
                    }
                },
                deep: true
            },
            pullUpLoadObj: {
                handler(val) {
                    const scroll = this.$refs.scroll.scroll
                    if (val) {
                        scroll.openPullUp()
                    } else {
                        scroll.closePullUp()
                    }
                },
                deep: true
            },
        },
        //注册组件
        components:{
          CommonList,
          Scroll
        },
        methods:{
              ...mapActions({
                getImageTypeList: 'pic/getImageTypeList',
                refreshDispatch: 'pic/getImageTypeList',
                loadMoreDispatch: 'pic/getImageTypeList'
            }), 
            ...mapMutations({
                setCurrent: 'pic/setCurrent'
            }),
            async onPullingDown(){
                await this.refreshDispatch(1);
            },
            async onPullingUp(){
                await this.loadMoreDispatch(this.page+1)
            },
            showSwiper(index){
               this.$emit("update:showImageSwiper", true)
                this.setCurrent(index);
            }
     
        },   
        mounted() {
            this.getImageTypeList(1);
        },
}
</script>

<style lang="scss" scoped>
  .swiperBox{
      width: 100%;
      height: 100%;
      background: #ff0;
      overflow: auto;
      position: absolute;top: 0;
      left: 0;
      z-index: 105;
       }
         ul {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    ul span {
        display: inline-block;
        width: 32.7vw;
        height: 32.7vw;
        margin-bottom: 1vw;
        background-size: cover;
        background-position: center;
    }
</style>

