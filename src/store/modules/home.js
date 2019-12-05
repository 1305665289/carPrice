import {getMasterBrandList,getMasterRightList} from '@/services/index'
const state = {
    list: [],
    lis:[],
    right:[],
    arr:[]
}
const mutations = {
    updateList(state, payload){   
        state.list = payload;
        state.list.map(item=>{
            let letter = item.Spelling[0];
            let arr = state.list.filter(item=>item.Spelling[0]===letter)
            if(state.lis.findIndex(item=>item.letter==letter)===-1){
                    state.lis.push({letter,arr})
            }
        })   
     },
     setArr(state,data) {
        state.arr = ['#'].concat([...new Set(data.map(item=>{
          return item.Spelling[0];
        }))])
        console.log(state.arr)
      },
     updateRight(state,payload){
        state.right = payload   
     }
 }
 
const actions = {
    async getMasterBrandList({commit}, payload){
        let res = await getMasterBrandList();
        // console.log('res...', res);
        await  commit('updateList', res.data);
        await commit("setArr",res.data)
    }, 
    async getMasterRightList({commit},payload){
        let res = await getMasterRightList(payload)
        console.log('1````````',res)
        await  commit('updateRight', res.data)
    }
}
export default {
    namespaced: true,
    state,
    mutations,
    actions
}