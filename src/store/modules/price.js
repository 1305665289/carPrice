import {getPricelList} from '@/services/index'
const state = {
    arr:[]
}
const mutations = {
    setArr(state,payload){
        state.arr=payload
        console.log(state.arr)
    }
 }
 
const actions = {
    async getPricelList({commit}, payload){
        console.log(payload)
        let res = await getPricelList(payload);
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