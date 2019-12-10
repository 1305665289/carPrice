import {getPicList} from '@/services/index'
const state = {
    pic:[],
    colorId:''
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
    },
    getCarColor(state,payload){
        state.colorId=payload
    }
 }
 
const actions = {
   async getPicList({commit,state},payload){
       let params={SerialID:payload}
       
        if(state.colorId){
            params.ColorID=state.colorId
        }
        console.log(params)
       let res= await getPicList(params)
       commit('updataPic',res.data)
  

   }
}
export default {
    namespaced: true,
    state,
    mutations,
    actions
}