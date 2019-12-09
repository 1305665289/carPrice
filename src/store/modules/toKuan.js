import {getKuanList} from '@/services/index'
const state = {
      list:{}
}
const mutations = {
        updataKuan(state,payload){
            state.list=payload
        }
 }
const actions = {
   async getKuanList({commit},payload){
       let res= await getKuanList(payload)
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