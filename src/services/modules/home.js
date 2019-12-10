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
export let getPicList = (params)=>{
    return request('/v2-car-getImageList.html',{params})
}

//价格 (必须传递两个不同的ID值才可以获取相应的数据)
export let getPricelList = ({carId, CityID})=>{
    return request(`/v2-dealer-alllist.html?carId=${carId}&cityId=${CityID}`)
}

//城市列表
export let getCityList=()=>{
    return request('/v1-city-alllist.html')
}

//默认城市(IP城市)
export let getMoCityList=()=>{
    return request('/location-client.html')
}

//颜色
export let getColorList = (SerialID)=>{
    return request('/v2-car-getModelImageYearColor.html',{params:{SerialID}})
}

