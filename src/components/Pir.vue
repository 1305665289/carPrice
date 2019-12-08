<template>
  <div class="box">
        <div>
            <p class="pos">{{item.Name}}</p>
            <p class="abs">{{item.Count}}张</p>
        </div>
         <li v-for="(itemimg,key) in item.List" :key="key">
            <span :style="{backgroundImage:'url('+itemimg.Url+')'}"/>
         </li>
  </div>
</template>

<script>
export default {
  props:['item']
}
</script>

<style lang='scss' scoped>
   *{
       margin: 0;
       padding: 0;
       list-style: none;
       text-decoration: none
   }
   .box{
       width: 100%;
       display: flex;
       flex-wrap: wrap;
       position: relative;
   } 
    li{
        width: 32.8%;
        height: 123px;
        padding: 1px 1px;
        span{
            display: inline-block;
            width: 100%;
            height: 100%;
            background-size: cover;
            background-position: center;
        }
    }
   .pos{
       top: 40px;
       left: 50px;
       z-index: 1;
       font-size: 14px;
       color: aliceblue;
       position: absolute;
   }
   .abs{
       top: 55px;
       left: 50px;
       z-index: 1;
       font-size: 14px;
       color: aliceblue;
       position: absolute;
   }
</style>