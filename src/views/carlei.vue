<template>
  <div class="box">
    <p class="title">可向多个商家咨询最低价，商家及时回复</p>
    <div class="concent">
      <div class="con1"  v-if="Object.keys(arr).length">
          <img :src="arr.details.serial.Picture" alt="">
          <ul>
            <li>{{arr.details.serial.AliasName}}</li>
            <li>{{arr.details.car_name}}</li>
          </ul>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'
export default {
  methods:{
    ...mapActions({
      getPricelList:'price/getPricelList',
    }),
   
  },
  computed: {
    ...mapState({
        arr:state=>state.price.arr
    })
  },
  mounted(){ 
      let id=localStorage.getItem(id)
      this.getPricelList(131315)
     
    }
}
</script>

<style lang="scss" scoped>
.box{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: #eeeeee
}
.title{
  height: .6rem;
  line-height: .6rem;
  width: 100%;
  background: #79cd92;
  text-align: center;
  color: #ffffff
}
.concent{
  flex: 1;
  overflow: auto;
}
.con1{
  height: 2rem;
  background: #fff;
  padding: .32rem .18rem .24rem;
  box-sizing: border-box;
  display: flex;
  img{
    width: 2.3rem;
    height: 1.41rem;
    border: 1px solid #eee;
    box-sizing: border-box;
    border-radius: 5px;
  }
  ul{
    margin-left: .2rem;
    width: 4.3rem;
  }
  ul li:nth-child(1){
    height: .36rem;
    font-size: .36rem;
    line-height: 1;
    font-weight: 550;
    padding: .2rem
  }
  ul li:nth-child(2){
    height: .38rem;
    font-size: .36rem;
    line-height: 1;
    padding: .2rem
  }
}
</style>
