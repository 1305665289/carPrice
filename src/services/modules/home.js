import request from '@/utils/request';


//获取详情页数据
export let getDetailList=()=>{
    return request('/v2-car-getInfoAndListById.html',{params:{SerialID:2593}})
}