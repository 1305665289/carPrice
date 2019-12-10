import {getCityList} from '@/services/index'
const state = {
    city:[]
}
const mutations = {
    setArr(state,payload){
        state.city=payload
        console.log(state.city)
    }
 }
 
const actions = {
    async getCityList({commit},payload){
        let res = await getCityList();
        console.log(res.data)
        await commit("setArr",res.data)
    }
}
export default {
    namespaced: true,
    state,
    mutations,
    actions
}