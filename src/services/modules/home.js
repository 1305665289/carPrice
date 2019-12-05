import request from '@/utils/request';

<<<<<<< HEAD
// 获取首页品牌列表
export let getMasterBrandList = ()=>{
    return request('/v2-car-getMasterBrandList.html')
}
//获取车系数据
export let getMasterRightList = (MasterID)=>{
    return request('/v2-car-getMakeListByMasterBrandId.html',{params:{MasterID}})
}
export let getDetailList = (SerialID)=>{
    return request('/v2-car-getInfoAndListById.html',{params:{SerialID}})
=======

//获取详情页数据
export let getDetailList=()=>{
    return request('/v2-car-getInfoAndListById.html',{params:{SerialID:2593}})
>>>>>>> szw
}