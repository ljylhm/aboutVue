/**
 * 对axios的封装
 */
import axios from 'axios';
// 利用axios的拦截器对传过去和返回的数据做处理
// 两个函数分别为状态码200 和 返回error的时候
// requset response 一定要return 不然会报undefined
axios.interceptors.request.use((config) => {
    config.headers['X-Requested-With'] = 'XMLHttpRequest'
  
    return config
})

axios.interceptors.response.use((response) => {

    return response;
})


export default axios;