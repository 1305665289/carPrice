import {getPicList} from '@/services/index'
const state = {
    pic:[]
}
const mutations = {
    updataPic(state,payload){
        state.pic=payload.map(item=>{
            item.List=item.List.map(ite=>{
                ite.Url=ite.Url.replace('{0}',3)
                return ite
            })
            return item
        })
        console.log(state.pic,"====")
    }
 }
 
const actions = {
   async getPicList({commit},payload){
    
       let res= await getPicList(payload)
       console.log('lllll',res)
       commit('updataPic',res.data)
   }
}
export default {
    namespaced: true,
    state,
    mutations,
    actions
}