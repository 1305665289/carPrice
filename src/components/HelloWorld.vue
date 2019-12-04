<template>
  <div class="hello">
      <div class="list" v-for="(item,index) in leftArr" :key="index">
        <p class="title">{{item.GroupName}}</p>
          <ul>
              <li v-for="(ite,ind) in item.GroupList" :key="ind">
                <img :src="ite.Picture"/>
                <div class="detail">
                  <p class="name">{{ite.AliasName}}</p>
                  <p class="price">{{ite.DealerPrice}}</p>
                </div>
              </li>
          </ul>
      </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  computed:{
    ...mapState({
      leftArr:state=>state.home.leftArr
    })
  },
}
</script>

<style scoped lang="scss">
.title{
  margin-left: 1px;
  font-size: .28rem;
  line-height: .48rem;
  background: #f2f2f2;
  padding-left: .3rem;
  color: #717171;
}
.detail{
  .name{
    font-size: .34rem;
    color: #5f687a;
  }
  .price{
    margin-top: .1rem;
    font-size: .28rem;
    color: red;
  }
}
li{
  display: flex;
  height: 1.4rem;
  box-sizing: border-box;
  border-bottom: 1px solid #ddd;
  margin-left: .1rem;
}
img{
    margin: 0 .1rem 0 .2rem;
    width: 1.8rem;
    height: 1.2rem;
}
</style>
