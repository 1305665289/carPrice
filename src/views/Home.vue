<template>
  <div class="home">
      <div v-for="(item,index) in lis" :key="index" :id="item.letter" class="box" >
          <p class="tit">{{item.letter}}</p>
              <ul class="ull">
                <li v-for="(item,index) in item.arr" :key="index" class="lii" @click="rleft(item.MasterID)">
                    <img v-lazy="item.CoverPhoto" alt="">
                    <span>{{item.Name}}</span>   
                </li>
              </ul> 
      </div>
      <ul class="right">
        <li v-for="(item,index) in lis" :key="index" >
            <p @click='fun(item.letter)'>
              {{item.letter}}
            </p> 
        </li>
      </ul>

      <van-popup v-model="flage" position="right" :style="{ height: '100%',width:'70%' }" >
        <Rleft class="rl" />
      </van-popup>
     

  </div>
</template>
<script>
import {mapActions, mapState} from 'vuex'
import Rleft from '../components/Rleft'
import { black } from 'color-name';   
export default {
  data(){
    return {
      flage:false
    }
  },
  name: 'home',
  components: {
      Rleft,
  },
  computed: {
    ...mapState({
      list: state=>state.home.list,
      lis: state=>state.home.lis,
      right:state=> state.home.right
    })
  },
  methods: {
    ...mapActions({
      getMasterBrandList:'home/getMasterBrandList',
      getMasterRightList: 'home/getMasterRightList'
    }),
    rleft(MasterID){
      this.flage=!this.flage
       this.getMasterRightList(MasterID)
      if(document.querySelector('.lii')){
         document.querySelector('.rl').style='display:block'
      } 
    },
     fun(item){
       console.log(document.querySelector('.home').scrollTop,document.querySelector(`#${item}`).offsetTop)
          document.querySelector('.home').scrollTop = document.querySelector(`#${item}`).offsetTop;
      }
  },
  created() {
    this.getMasterBrandList();
    this.getMasterRightList()
  }
}
</script>
<style lang="scss" scoped>
  *{
    margin: 0px;
    padding: 0;
    list-style: none;
    box-sizing: border-box;
    text-decoration: none
  }
  .hljs-comment{
    width: 100%;
    height: 100%;
    overflow-y: scroll;
    background-color:none
  }
  .box {
    width: 100%;
  }
  .van-overlay{
    background-color:none
  }
  .ull{
    width: 6.9rem;
    text-align: center;
    background-color:none
  }
 
  .right{
  position: fixed;
  right: 0px;
  top: 120px;
  p{
    line-height: 20px;
    font-size: 12px;
    color: #666666;
  }
 }
  .lii{
    width: 100%;
    height: 1rem;
    display: flex;
    margin-left: 15px;
    border-bottom: 1px solid #ddd;
    background-color:none
  }
  .van-overlay{
    background-color:none
  }
  img{
    width: .8rem;
    height: .8rem;
  }
  span {
  font-size: .32rem;
  margin-left: .4rem;
  line-height: 1rem;
  }
  .tit{
    font-size: .28rem;
    line-height: .4rem;
    background: #f4f4f4;
    padding-left: .3rem;
    color: #aaa;
  }
  .rl{
    width:5.6rem ;
    width: 100%;
    height: 100%;
    background: white;
    position: fixed;
    right: 0;
    top: 0;
  }
</style>
