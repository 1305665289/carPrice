<template>
  <div class="home">
      <div class="list" v-for="(item,index) in listNewArr" :key="index">
          <p class="title">{{item.arr}}</p>
          <ul>
              <li v-for="(ite,ind) in item.arrs" :key="ind" @click="handleList(ite.MasterID)">
                <img :src="ite.CoverPhoto"/>
                <span>{{ite.Name}}</span>
              </li>
          </ul>
      </div>
      <div class="right">
        <p v-for="(item) in listRights" :key="item">{{item}}</p>
      </div>
      <div class="chouti" v-if="show">
        <HelloWorld/>
      </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import {mapActions, mapState,mapMutations} from 'vuex'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  data(){
    return {
      show:false
    }
  },
  computed: {
    ...mapState({
      listAll: state=>state.home.listAll,
      listNewArr:state=>state.home.listNewArr,
      listRights:state=>state.home.listRights,
      // leftArr:state=>state.home.leftArr
    })
  },
  methods: {
    ...mapActions({
      getMasterBrandList: 'home/getMasterBrandList',
      getHandleList: 'home/getHandleList',
    }),
    handleList(MasterID){
      this.show=!this.show
      console.log(MasterID)
      this.getHandleList(MasterID)
    }
  },
  created() {
    // 获取首页的数据 
    // console.log('$store...', this.$store);
    this.getMasterBrandList();
  }
}
</script>

<style lang="scss" scoped>
.home{
  width: 100%;
  height: 100%;
  position: relative;
}
.right{
  position: fixed;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  padding-left: .2rem;
  p{
    font-size: .24rem;
    color: #666;
    font-weight: 500;
    padding: .02rem .1rem;
  }
}
.title{
    font-size: .28rem;
    line-height: .4rem;
    background: #f4f4f4;
    padding-left: .3rem;
    color: #aaa;
}
ul{
  height: 100%;
  margin: 0 .3rem;
  li{
     height: 1rem;
     box-sizing: border-box;
     border-bottom: 1px solid #ddd;
     img{
      width: .8rem;
      height: .8rem;
      margin-top: .1rem
    }
    span{
      position:absolute;
      font-size: .32rem;
      margin-left: .4rem;
      line-height: 1rem
    }
  }
}
.chouti{
  width: 75%;
  height: 100%;
  background: #ffffff;
  position: fixed;
  top: 0;
  right: 0;
  overflow-y: scroll;
}
</style>