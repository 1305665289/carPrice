import {getMasterBrandList,getHandleList} from '@/services/index'

const state = {
    listAll: [],
    listNewArr:[],
    listRight:[], //传递值时的中间桥梁
    listRights:[], //右侧首字母
    leftArr:[]
}

const mutations = {
    updateList(state, payload){ //初始静态页面
        state.listAll = payload;
        state.listAll.map(item=>{
            let arr=item.Spelling[0]
            let arrs=state.listAll.filter(item=>item.Spelling[0]==arr)
            if(state.listNewArr.findIndex(item=>item.arr==arr)==-1){
                state.listNewArr.push({arr,arrs})
            }
            state.listRight.push(arr)
        })
        state.listRights=Array.from(new Set(state.listRight))
        // console.log(state.listRights)
    },
    leftList(state,payload){
        state.leftArr=payload
        console.log(payload)
    }
}

const actions = {
    async getMasterBrandList({commit}, payload){
        let res = await getMasterBrandList();
        // console.log('res...', res);
        commit('updateList', res.data);
    },
    async getHandleList({commit},payload){
        let res = await getHandleList(payload);
        console.log(res)
        commit('leftList',res.data)
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}