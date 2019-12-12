import {getCityList,getCitySList} from '@/services/index'
const state = {
    city:[],
    provinceid:[],
    cityNumId:[]
}
const mutations = {
    setArr(state,payload){
        state.city=payload
        // console.log(state.city)
    },
    setsArr(state,payload){
        state.provinceid=payload
        console.log(state.provinceid)
    }
 }
 
const actions = {
    async getCityList({commit},payload){
        let res = await getCityList();
        await commit("setArr",res.data)
    },

    async getCitySList({commit},payload){
        let res = await getCitySList(payload);
        // console.log(res.data)
        await commit("setsArr",res.data)
    }
}
export default {
    namespaced: true,
    state,
    mutations,
    actions
}