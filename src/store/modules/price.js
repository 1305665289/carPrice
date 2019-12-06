import {getPricelList} from '@/services/index'
const state = {
    arrID:[]
}
const mutations = {
    setArr(state,payload){
        state.arrID=payload
        console.log(state.arrID)
    }
 }
 
const actions = {
    async getPricelList({commit}, payload){
        console.log(payload)
        let res = await getPricelList(payload);
        console.log(res)
        await commit("setArr",res.data)
    }
}
export default {
    namespaced: true,
    state,
    mutations,
    actions
}