<template>
    <!-- <div>
        <ul v-for="(item,index) in provinceid" :key="index"> 
            <li @click="handle">{{item.CityName}}</li>
        </ul> -->
        <div id="app">
        <transition :name="transitionName">
        <keep-alive>
            <router-view class="transitionBody" :key='key' ></router-view>
        </keep-alive>
        </transition>
    </div>
    <!-- </div> -->
</template>

<script>
import {mapActions, mapState} from 'vuex'

export default {
    props:['CityID','provinceid'],
    methods:{
        handle(){
            console.log('1')
            this.$router.push('/carlei')
        }
    }
}
</script>

<style lang="scss" scoped>
li{
    padding-left: .3rem;
    font-size: .28rem;
    height: .8rem;
    line-height: .8rem;
    border-bottom: 1px solid #eee;
    box-sizing: border-box;
    margin-left: .1rem;
}
</style>