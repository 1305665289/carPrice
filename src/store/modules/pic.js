import {getPicList,getImageTypeList,imgList} from '@/services/index'
const state = {
    pic:[],
    colorId:'',
    imageList: [], //分类图片列表
    current: 0,    // 轮播的当前图片
    count: '',  //当前分类图片总数
    page: 1,  //当前分页
    pageSize: 30, //每页数量
    imgList:[],
    SerialID: '',
    ImageID: "",
    showBanner: false//是否显示banner组件
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

    },
    setshowBanner(state, payload) {
        if (payload == true) {
          state.showBanner = payload
        } else {
          state.showBanner = false
        }
      },
    getCarColor(state,payload){
        state.colorId=payload
    },
     // 修改图片分类id
    setImageId(state, payload){
        state.ImageID = payload;
    },
    setSerialId(state, payload) {
        state.SerialID = payload;
      },
    setImageList(state, payload){
        state.count = payload.Count;
        payload.ImageID && (state.ImageID = payload.ImageID);
        // 实现上拉加载
        if (state.page == 1){
            state.imageList = payload.List;
        }else{
            state.imageList = state.imageList.concat(payload.List);
        }
    },
    // 修改当前分页
    setPage(state, payload){
        state.page = payload;
    },
    // 设置当前轮播的图片下标
    setCurrent(state, payload){
        state.current = payload;
    },
    Listimg(state,payload){
        state.imgList=payload.map(item=>{
           
                item.Url=item.Url.replace('{0}',3)
    
            return item
        })
    }
 }
 
const actions = {
   async getPicList({commit,state},payload){
       let params={SerialID:payload}
        if(state.colorId){
            params.ColorID=state.colorId
        }
       let res= await getPicList(params)
       commit('updataPic',res.data)
   },
   
   async getImageTypeList({commit, state}, payload){
    if (payload){
        commit('setPage', payload);
    }
    let params = {
        SerialID: state.SerialID,
        ImageID: state.ImageID,
        Page: state.page,
        PageSize: state.pageSize
    }
    let res = await getImageTypeList(params);
    let {Count, List} = res.data;
    commit('setImageList', {Count, List});
  },
  async imgList({commit},payload){
      let res= await imgList(payload)
     commit('Listimg',res.data.List)
  }
}
export default {
    namespaced: true,
    state,
    mutations,
    actions
}