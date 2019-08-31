import axios from 'axios';
import service from './contactApi';
import { Toast } from 'vant';

//service 循环遍历输出不同的请求方法
let instance = axios.create({
    baseURL: 'http://localhost:9000/api',
    timeout: 1000
});
//包裹请求方法的容器
const Http = {};
for (let key in service) {
    let api = service[key];
    Http[key] = async function (params, isFormData = false, config = {}) {
        let url = api.url;
        let newParams = {};

        //contact-type是否是form-data的判断
        if (params && isFormData) {
            newParams = new FormData();
            for (let i in params) {
                newParams.append(key, params[key]);
            }
        } else {
            newParams = params;
        }

        //不同请求的判断
        let response = {}; //请求的返回值
        if (api.method === 'put' || api.method === 'post' || api.method === 'patch') {
            try {
                response = await instance[api.method](api.url, newParams, config);
            } catch (err) {
                response = err;
            }
        } else if (api.method === 'get' || api.method === 'delete') {
            config.params = newParams;
            try {
                response = await instance[api.method](api.url, config);
            } catch (err) {
                response = err;
            }
        }
        return response;
    }
}

//拦截器
instance.interceptors.request.use(config => {
    //发起请求前做什么
    Toast.loading({
        mask: false,
        duration: 0,
        forbidClick: true,
        message: "加载中..."
    });
    return config;
}, err => {
    //请求错误
    Toast.clear();
    Toast('请求错误，请稍后重试');
});
instance.interceptors.response.use(res => {
    Toast.clear();
    return res.data;
}, err => {
    Toast.clear();
    Toast('返回错误');
});

export default Http;