<template>
    <div>
        <ul v-for="(item,index) in provinceid" :key="index"> 
            <li @click="handle(provinceid[index].CityName,provinceid[index].CityID)">{{item.CityName}}</li>
        </ul>
    </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'

export default {
    props:['CityID','provinceid'],
    methods:{
        handle(name,CityID){
            console.log(name)
            // console.log(cityNumId)
            this.$router.push({
                path:'/carlei',
                query:{name,CityID}  
            })
        }
    },
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