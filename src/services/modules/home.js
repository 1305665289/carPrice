import request from '@/utils/request';

// 获取首页品牌列表
export let getMasterBrandList = ()=>{
    return request('/v2-car-getMasterBrandList.html')
}
//获取车系数据
export let getMasterRightList = (MasterID)=>{
    return request('/v2-car-getMakeListByMasterBrandId.html',{params:{MasterID}})
}

//详情页
export let getDetailList = (SerialID)=>{
    return request('/v2-car-getInfoAndListById.html',{params:{SerialID}})
}

//图片页
export let getPicList = (SerialID)=>{
    return request('/v2-car-getImageList.html',{params:{SerialID}})
}

//价格
export let getPricelList = (SerialID)=>{
    return request('/v2-car-getImageList.html',{params:{SerialID}})
}
