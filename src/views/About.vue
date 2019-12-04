<template>
  <div class="home">
    <div class="main">
      <div class="image">
        <img :src="detailLists.CoverPhoto" alt="">
        <p class="num">{{detailLists.pic_group_count}}张照片</p>
      </div>

      <div class="middle">
        <ul class="title">
          <li class="one">{{detailLists.market_attribute.dealer_price}}</li>
          <li class="two">指导价 {{detailLists.market_attribute.official_refer_price}}</li>
        </ul>
        <span>{{detailLists.BottomEntranceTitle}}</span>
      </div>

    </div>
    <div class="footer">
      <p class="one">{{detailLists.BottomEntranceTitle}}</p>
      <p class="two">本地经销商为你报价</p>
    </div>
  </div>
</template>

<script>
import {mapActions, mapState,mapMutations} from 'vuex'

export default {
  computed: {
    ...mapState({
        detailLists:state=>state.detail.detailLists
    })
  },
  methods: {
    ...mapActions({
      getDetailList: 'detail/getDetailList',
    })
  },
  created() {
    // 获取详情页页的数据 
    this.getDetailList();
  }
}
</script>

<style lang="scss" scoped>
.home{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
}
.main{
  flex: 1;
  overflow: auto;
  img{
    width: 100%;
    transform: translateY(-17%);
  }
  .num{
      position: absolute;
      top: 22%;
      left:80%;
      padding: .05rem;
      background: rgba($color: #000000, $alpha: .5);
      color: #fff;
      border-radius: .05rem;
      font-size: .24rem
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
        color: skyblue;
        font-size: .2rem;
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
      margin-top: .4rem;
      margin-left: .1rem;
    }
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