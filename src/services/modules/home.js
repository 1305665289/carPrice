import request from '@/utils/request';
<<<<<<< HEAD

=======
>>>>>>> e1a42a389e16daa0f32806e0d5a65b5f910d50b2
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
<<<<<<< HEAD
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
=======
    return request("/v2-car-getInfoAndListById.html",{params:{SerialID}})
}

// export let getDetailList = ()=>{
//     return request('/v2-car-getImageList.html',{params:{ColorID:2359}})
// }
>>>>>>> e1a42a389e16daa0f32806e0d5a65b5f910d50b2
