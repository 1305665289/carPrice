<template>
  <div class="home">
          <div v-for="(item,index) in lis" :key="index">
             <p class="tit">{{item.letter}}</p>
                 <ul v-for="(item,index) in item.arr" :key="index">
                   <li><img :src="item.CoverPhoto" alt=""></li>
                   <li><span>{{item.Name}}</span> </li>
                 </ul>
          </div>
  </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'

export default {
  name: 'home',
  components: {
          
  },
  computed: {
    ...mapState({
      list: state=>state.home.list,
      lis: state=>state.home.lis,
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
<style lang="scss" scrped>
  *{
    margin: 0px;
    padding: 0;
    list-style: none;
    box-sizing: border-box;
    text-decoration: none
  }
   ul{
      width: 100%;
      height: 50px;
      display: flex;
      border-bottom: 1px solid #ddd;
   }
  li img{
     width: .8rem;
     height: .8rem;
     margin-top: 5px
   }
   li span{
    font-size: .32rem;
    margin-left: .4rem;
    line-height: 50px;
    
   }
   .tit{
      font-size: .28rem;
      line-height: .4rem;
      background: #f4f4f4;
      padding-left: .3rem;
      color: #aaa;
   }
</style>
