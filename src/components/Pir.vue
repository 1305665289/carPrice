<template>
<div>
    <div>
        <p>{{item.Name}}</p>
        <p>{{item.Count}}张</p>
    </div>
     <li v-for="(itemimg,key) in item.List" :key="key">
        <span src='' :style="{backgroundImage:'url('+itemimg.Url+')'}"/>
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
   li{
       display: flex;

   }
</style>