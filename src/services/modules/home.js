import request from '@/utils/request';

// 获取首页品牌列表
export let getMasterBrandList = ()=>{
    return request('/v2-car-getMasterBrandList.html')
}

//获取产品系列列表
export let getHandleList=(MasterID)=>{
    return request('/v2-car-getMakeListByMasterBrandId.html',{params:{MasterID}})
}

//获取详情页数据
export let getDetailList=()=>{
    return request('/v2-car-getInfoAndListById.html',{params:{SerialID:2593}})
}