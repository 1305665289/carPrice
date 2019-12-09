import {getPricelList,getMoCityList} from '@/services/index'
const state = {
    arr:[],
    cityid:[],
    Molist:{},
    ccc:[]
}
const mutations = {
    setArr(state,payload){
        state.arr=payload
        console.log(state.arr)
    },
    MosetArr(state,payload){
        state.Molist=payload
    },
    // bbb(state,payload){
    //     state.ccc=payload
    // }
 }
 
const actions = {
    async getPricelList({commit}, payload){
        console.log(...payload)
        let res = await getPricelList(payload);
        console.log(res.data)
        await commit("setArr",res.data)
    },
    async getMoCityList({commit}, payload){
        // console.log(payload)
        let res = await getMoCityList();
        console.log(res.data,"+++++++++")
        await commit("MosetArr",res.data)
    },
    // async getaaa({commit},payload){
    //     let res = await getaaa(payload);
    //     console.log(res.data)
    //     commit("bbb",res.data)
    // }
    
}
export default {
    namespaced: true,
    state,
    mutations,
    actions
}