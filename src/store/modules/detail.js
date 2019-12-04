import {getDetailList} from '@/services/index'

const state = {
    detailLists:[]
}

const mutations = {
    detailList(state,payload){
        state.detailLists=payload
    }
}

const actions = {
    async getDetailList({commit}, payload){
        let res = await getDetailList(payload);
        console.log('res...', res);
        commit('detailList', res.data);
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}