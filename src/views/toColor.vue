<template>
   <div class="wrap">
      <header>
           <p>全部颜色</p>
      </header>
      <main>
            <p class="year">
                 <span v-for="(item,index,key) in list" :key="index" @click="handleC(item,key)" :class="{active: curIndex===key}"> 
                      {{index}}
                 </span>
            </p> 
             <ul>
                  <li v-for="(v,index) in colorData" :key="index" @click="clickColor(v.ColorId)">
                     <span :style="{background:v.Value}"></span>
                     {{v.Name}}
                  </li>
             </ul>
      </main>
   </div>
</template>
<script>
import {mapActions, mapState} from 'vuex'
export default {
   data() {
      return {
         colorData:[],
         curIndex:0
      }
   },
    computed:{
      ...mapState({
           list:state=>state.toColor.list
      })
    },
    methods:{
      ...mapActions({
            getColorList:'toColor/getColorList'
         }),
           handleC(item,key){
            this.colorData=item
            this.curIndex=key
        },
        clickColor(colorId){
            this.getCarColor(colorId);
        }
    },
    created(){
       this.getColorList(this.$route.query.SerialID)
    }
}
</script>

<style lang='scss' scoped>
    *{
       color: #000
    }
   .wrap{
      width: 100%;
      height: 100%;
      background: #f4f4f4;
      display: flex;
      flex-direction: column
   }

   header{
      width: 100%;
      height: .8rem;
      margin: .15rem 0;
      background: white;
   }
   p{
      font-size: .34rem;
      color: #00afff;
      background: #fff;
      text-align: center;
      line-height: .8rem;
      height: .8rem;
   }
   .main{
      flex: 1;
      overflow: auto;
   }
   .year{
      padding-left: .2rem;
      font-size: .3rem;
      background: #fff;
      overflow-x: scroll;
       span{
            margin-left: 20px
       }
   }
   ul{
      margin-top: .15rem;
      padding: 0 .2rem;
      overflow: hidden;
      background: #fff;
      li{
         float: left;
         width: 3.45rem;
         font-size: .32rem;
         line-height: .68rem;
         border: 1px solid #3aacff;
         box-sizing: border-box;
         margin: .2rem 0;
         border-radius: .05rem;
            span{
               width: 20px;
               height: 20px;
               display:inline-block;
               margin: 0px 0px 0px 10px;
            }
        }
   }
   .active{
      color: #00afff;
   }
</style>
