<template>
     <div class="home">
        <div class="main">
          <div class="image" @click="handleImg(detailLists.SerialID)">
            <img :src="detailLists.CoverPhoto" alt="">
            <p class="num">{{detailLists.pic_group_count}}张照片</p>
          </div>

          <div class="middle">
            <ul class="title" v-if="Object.keys(detailLists).length">
              <li class="one">{{detailLists.market_attribute.dealer_price}}</li>
              <li class="two">指导价 {{detailLists.market_attribute.official_refer_price}}</li>
            </ul>
            <span @click="price(allYearList[0].list[0].car_id)">{{detailLists.BottomEntranceTitle}}</span>
          </div>

          <div class="bottom">

              <!-- 全部年份 -->
              <ol class="titleOl" > 
                <li class="active" ref="actives" @click="handleQ">{{allYear}}</li>
                <li v-for="(item,index) in detailYear" :key="index" @click="handle(index)" :class="{active:index==curIndex}">
                  <span>{{item}}</span>
                </li>
              </ol>

              <div class="conOl" v-for="(item,index) in allYearList" :key="index">
                  <p class="p1">{{item.key}}</p>
                  <ul class="conUl" v-for="(ite,ind) in item.list" :key="ind">
                      <li>
                        <p class="lip1">{{ite.market_attribute.year}}款 {{ite.car_name}}</p>
                        <p class="lip2">{{ite.horse_power}}马力{{ite.gear_num}}档{{ite.trans_type}}</p>
                        <p class="lip3" @click="price(ite.car_id)">
                          <span>指导价 {{ite.market_attribute.official_refer_price}}</span>
                          <span>{{ite.market_attribute.dealer_price_min}}</span>
                        </p>
                      </li>
                      <button @click="price(ite.car_id)">{{detailLists.BottomEntranceTitle}}</button>
                  </ul>
              </div>
          </div>

        </div>
        <div class="footer" @click="price(allYearList[0].list[0].car_id)">
          <p class="one">{{detailLists.BottomEntranceTitle}}</p>
          <p class="two">本地经销商为你报价</p>
        </div>

  </div>
</template>

<script>
import {mapActions, mapState,mapMutations} from 'vuex'

export default {
  data(){
    return {
      curIndex:-1
    }
  },
  computed: {
    ...mapState({
        detailLists:state=>state.detail.detailLists,
        detailYear:state=>state.detail.detailYear,
        allYear:state=>state.detail.allYear,
        allYearList:state=>state.detail.allYearList,
    })
  },
  methods: {
    ...mapActions({
      getDetailList: 'detail/getDetailList',
      getMoCityList: "price/getMoCityList",
      getPricelList: "price/getPricelList"
    }),
    handleImg(SerialID){
      this.$router.push({
        path:'/picture',
        query:{SerialID:SerialID}
      })
    },
    handle(index){
      this.curIndex=index
      console.log(this.$refs.actives)
      this.$refs.actives.className=''
    },
    handleQ(){
      this.curIndex=-1
      this.$refs.actives.className='active'
    },
    price(id){
      console.log(id)
      let arr=localStorage.setItem('carId',id)
      console.log(arr)
      this.$router.push({
        path:'/carlei',
        query:{id}
      })
    }
  },
  created() {
    // 获取详情页页的数据 拿到首页传递的=》ID
    this.getDetailList(this.$route.query.SerialID);
    this.getMoCityList()
    console.log(this.$route.query.SerialID)
    this.getPricelList(this.$route.query.SerialID) //保存ID
  }
}
</script>


<style lang="scss" scoped>
.home .main .bottom .titleOl .active {
  color: #00afff
}
.home{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.main{
  flex: 1;
  overflow: auto;
  position: relative;
  .image{
    width: 100%;
    height: 5.06rem;
    position: relative;
    img{
    width: 100%;
    transform: translateY(-17%);
    }
    .num{
        position: absolute;
        top: 55%;
        left:77%;
        padding: .05rem;
        background: rgba($color: #000000, $alpha: .5);
        color: #fff;
        border-radius: .05rem;
        font-size: .24rem
      }
  }
  .middle{
    height: 1.48rem;
    width: 100%;
    display: flex;
    background: #ffffff;
    position: absolute;
    top: 27%;
    .title{
      margin: .5rem;
      .one{
        color: red;
        font-weight: 500;
        font-size: .36rem;
      }
      .two{
        color: #bdbdbd;
        font-size: .2rem;
        margin-top: .1rem
      }
    }
    span{
      display: block;
      height: .7rem;
      width: 3.65rem;
      background: #3aacff;
      color: #fff;
      border-radius: .2rem;
      line-height: .7rem;
      text-align: center;
      margin-top: .5rem;
      margin-left: .1rem;
    }
  }
}
.bottom{
  background: #cccccc;
  .titleOl{
    border-top: .15rem solid #f4f4f4;
    background: #fff;
    display: flex;
    font-size: .32rem;
    height: .77rem;
    li{
      background: #fff;
      padding: .2rem;
    }
  }
  .conUl{
    height: 2.38rem;
    background: #fff;
    border-top: 3px solid #f4f4f4
  }
  .lip1{
    padding: .26rem 0 .18rem;
    padding-left: .2rem;
    font-size: .3rem;
    line-height: 1;
    color: #3d3d3d;
  }
  .lip2{
    color: #bdbdbd;
    font-size: .26rem;
    padding-left: .2rem;
  }
  .lip3{
    text-align: right;
    padding-bottom: .1rem;
    font-size: .24rem;
    color: #818181;
    padding-right: .2rem;
  }
  .lip3 span:nth-child(2){
    font-size: .3rem;
    color: #ff2336;
    margin-left: .1rem;
  }
  button{
    border: none;
    border-top: 1px solid #eee;
    width: 100%;
    height: .4rem;
    font-size: .32rem;
    color: #00afff;
    background: #fff;
    font-weight: 500;
    margin-top: .2rem;
    padding-top: .2rem
  }
  .p1{
      background: #f4f4f4;
      line-height: .5rem;
      padding-left: .2rem;
      font-size: .3rem;
      color: #3d3d3d;
  }
}
.footer{
  background: #3aacff;
  height: 1rem;
  color: #fff;
  padding-left: 2.5rem;
  .one{
    font-size: .32rem;
    margin-top: .12rem;
    margin-left: .55rem;
    font-weight: 500;
    width: 1.28rem;
  }
  .two{
    font-size: .22rem;
    margin-top: .12rem;
    width: 2.16rem;
    margin-left: .15rem;
  }
}
</style>
