import {getColorList} from '@/services/index'
const state = {
      list=[]
}
const mutations = {
        updataColor(state,payload){
            state.list=payload
        }
 }
 
const actions = {
   async getColorList({commit},payload){
       
       let res= await getColorList(payload)
       console.log('lllll',res)
       commit('updataColor',res.data)
   }
}
export default {
    namespaced: true,
    state,
    mutations,
    actions
}