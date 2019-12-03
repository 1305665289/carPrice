<template>
  <div class="home">
      <div class="list" v-for="(item,index) in listNewArr" :key="index">
          <p class="title">{{item.arr}}</p>
          <ul v-for="(ite,ind) in item.arrs" :key="ind">
              <li><img :src="ite.CoverPhoto"/></li>
              <li><span>{{ite.Name}}</span></li>
          </ul>
      </div>
      <!-- <div class="right" v-for="(item,inde) in listRights" :key="inde">
        <p>{{item}}</p>
      </div> -->
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
  computed: {
    ...mapState({
      listAll: state=>state.home.listAll,
      listNewArr:state=>state.home.listNewArr,
      listRights:state=>state.home.listRights
    })
  },
  methods: {
    ...mapActions({
      getMasterBrandList: 'home/getMasterBrandList'
    })
  },
  created() {
    // 获取首页的数据 
    console.log('$store...', this.$store);
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
.rigth{
  position: fixed;
  top:130px;
  right:5px;
  
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
  margin: 0 .3rem 0 .3rem;
  border-bottom: 1px solid #ddd;
  display: flex;
  li{
    height: 1rem;
    // box-sizing: border-box;
  }
  li img{
      width: .8rem;
      height: .8rem;
      margin-top: .1rem
    }
  li span{
    font-size: .32rem;
    margin-left: .4rem;
    margin-top: .2rem;
    line-height: 1rem
  }
}
</style>