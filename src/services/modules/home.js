import request from '@/utils/request';
// 获取首页品牌列表
export let getMasterBrandList = ()=>{
    return request('/v2-car-getMasterBrandList.html')
}
//获取车系数据
export let getMasterRightList = (MasterID)=>{
    return request('/v2-car-getMakeListByMasterBrandId.html',{params:{MasterID}})
}
export let getDetailList = (SerialID)=>{
    return request("/v2-car-getInfoAndListById.html",{params:{SerialID}})
}
export let getPicList = ()=>{
    return request('/v2-car-getImageList.html',{params:{SerialID:2593}})
}
// export let getDetailList = ()=>{
//     return request('/v2-car-getImageList.html',{params:{ColorID:2359}})
// }
