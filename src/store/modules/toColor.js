import {getColorList} from '@/services/index'
const state = {
      list:{},
      arr:[]
}
const mutations = {
        updataColor(state,payload){
            state.list=payload
            let obj=JSON.parse(JSON.stringify(state.list))
            state.arr=Object.values(obj)[0]
        },
        lyp(state,payload){
            state.arr=payload
        }
 }
const actions = {
   async getColorList({commit},payload){
       let res= await getColorList(payload)
       console.log(res)
       commit('updataColor',res.data)
   }
}
export default {
    namespaced: true,
    state,
    mutations,
    actions
}