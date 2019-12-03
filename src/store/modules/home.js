import {getMasterBrandList} from '@/services/index'
const state = {
    list: [],
    lis:[]
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
     }
 }
const actions = {
    async getMasterBrandList({commit}, payload){
        let res = await getMasterBrandList();
        console.log('res...', res);
        commit('updateList', res.data);
    }
}
export default {
    namespaced: true,
    state,
    mutations,
    actions
}