<template>
  <div class="nav_list" 
    ref="container"
    @touchstart="touchStart"
    @touchmove="touchMove"
    @touchend="touchEnd"
  >
    <div v-for="(item,index) in arr" @click="jump(item)" :key="index" class="nav_item">{{item}}</div>
  </div>
</template>
<script>
export default {
  props: {
    arr: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  watch: {
    arr: function(){
      this.$nextTick(()=>{
        this.offsetTop = (window.innerHeight - this.$refs.container.offsetHeight)/2;
        console.log('offsetTop...', this.offsetTop)
      })
    }
  },
  methods: {
    jump(item){
        this.$emit('Parent_jump',item)
    },
    touchStart(e){
      let y = e.touches[0].pageY - this.offsetTop;
      let index = Math.floor(y/18);
      console.log('start...', e.touches[0], this.arr[index]);
    },
    touchMove(e){
      let y = e.touches[0].pageY - this.offsetTop;
      let index = Math.floor(y/18);
      // 处理边界
      index<1?index=1:index>this.arr.length-1?index=this.arr.length-1:null;
      this.$emit('Parent_jump', this.arr[index]);
      console.log('start...', this.arr[index]);
    },
    touchEnd(e){
     
    }
  },

};
</script>

<style scoped lang="scss">
.nav_list {
  width: 30px;
  display: flex;
  flex-direction: column;
  position: fixed;
  top:50%;
  transform: translateY(-50%);
}
.nav_item {
  text-align: center;
  line-height: 18px;
  font-size: 14px;
}
</style>