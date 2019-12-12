import {getDetailList} from '@/services/index'
const state = {
      list:{}
}
const mutations = {
        updataKuan(state,payload){
            state.list=payload
        }
 }
const actions = {
   async getDetailList({commit},payload){
       let res= await getDetailList(payload)
       console.log(res)
       commit('updataKuan',res.data)
   }
}
export default {
    namespaced: true,
    state,
    mutations,
    actions
}