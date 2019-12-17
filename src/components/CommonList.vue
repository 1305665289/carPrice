<template>
    <div class="container">
        <div>
            <p class="top-tip">正在刷新中...</p>
            
            <slot :value="list.value"></slot>

            <!-- 底部动画 -->
            <div class="pullup-wrapper">
                <div class="before-trigger" v-if="!isPullUpLoad">
                    <span>上拉加载更多</span>
                </div>
                <div class="after-trigger" v-else>
                    <span>正在加载中...</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll';
import {mapActions} from 'vuex';

export default {
    data(){
        return {
            isPullUpLoad: false
        }
    },
    props: {
        list: {
            type: Object,
            default: ()=>{
                return {}
            }
        }
    },
    watch: {
        'list.value': function(newVal, oldVal){
            if (newVal !== oldVal){
                this.scroll.refresh();
            }
        }
    },
    methods: {
        refreshDispatch(page){
            this.$store.dispatch(this.list.refreshDispatch, page)
        },
        loadMoreDispatch(page){
            this.$store.dispatch(this.list.loadMoreDispatch, page)
        }
    },
    mounted() {
        this.scroll = new BScroll('.container',{
            scrollY: true,
            click: true,
            pullUpLoad: {
                threshold: 50
            },
            pullDownRefresh: {
              threshold: 50,
              stop: 30
            }
        })

        this.scroll.on('pullingUp', async ()=>{
            // 判断是否加载完全部数据
            if (this.list.count == this.list.value.length){ return }

            if (this.isPullUpLoad){ return;}
            this.isPullUpLoad = true;
            await this.loadMoreDispatch(this.list.query.page+1);
            this.scroll.finishPullUp();
            this.isPullUpLoad = false;
        })
        this.scroll.on('pullingDown', async ()=>{
            await this.refreshDispatch(1);
            this.scroll.finishPullDown();
        })
    },
}
</script>

<style lang="scss" scoped>
    .container{
        width: 100%;
        height: 100%;
        position: relative;
    }
    .top-tip{
        position: absolute;
        top: -30px;
        text-align: center;
        width: 100%;
        height: 30px;
        line-height: 30px;
    }
</style>