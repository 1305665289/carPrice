

<template>
  <div id="app">
    <transition :name="transitionName">
      <keep-alive>
          <router-view class="transitionBody" :key='key' ></router-view>
      </keep-alive>
    </transition>
  </div>
</template>
<script>
export default ({
    computed: {
      // 页面唯一key值  每一次渲染  每一次请求
    key(){
      return this.$route.name?this.$route.name+ +new Date():this.$route+ +new Date()
      }
    },
    data() {
      return {
        transitionName: 'transitionLeft'
      };
    },
    watch: { 
      '$route' (to, from) { 
      // const arr = ['/city'];
      const compare = arr.indexOf(to.path)>arr.indexOf(from.path);  
      this.transitionName = compare ? 'transitionLeft' : 'transitionRight';
      // const arrs=['about','carlei'];
      // const compares = arrs.indexOf(to.path)>arrs.indexOf(from.path);  
      // this.transitionName = compares ? 'transitionRight' :''
        if(arr = ['about','carlei']){
          const compare = arr.indexOf(to.path)>arr.indexOf(from.path);  
          this.transitionName = compare ? 'transitionLeft' : 'transitionRight';
        }else if(arr=['/city']){
          const compare = arr.indexOf(to.path)>arr.indexOf(from.path);  
          this.transitionName = compare ? 'transitionRight' :''
        }else{
          this.transitionName=''
        }
      } 
    }  
})

</script>
<style lang="scss">
*{
  padding:0;
  margin: 0;
  list-style: none;
  box-sizing: border-box; 
}
#app,html,body{
  width: 100%;
  height: 100%;
  overflow: hidden;
}
html{
  font-size: calc(100vw/750*100);
}
body{
  font-size:.32rem;
}
.transitionBody{
 transition: all .3s ease; /*定义动画的时间和过渡效果*/
}
 

.transitionRight-leave-active {
  -webkit-transform: translate(100%, 0);
  transform: translate(-100%, 0); 
   /*当左滑进入右滑进入过渡动画*/
}
 .transitionRight-enter {
  -webkit-transform: translate(-100%, 0); 
  transform: translate(100%, 0); 
}

 .transitionLeft-enter{
   transform: translate(0, 100%);
 }
.transitionLeft-leave-active{
  transform: translate(0, -100%);
}


</style>