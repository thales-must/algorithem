import router from '@/router';
import axios, { AxiosResponse } from 'axios';
import API_URL from './api-url';
import Auth from './auth';

const auth = new Auth();

/**
 * 登出
 */
function logout() {
  // 之后根据后台完成
  auth.del();
}
function login(token:string) {
  auth.set(token);
}
const config = {
  // 创建axios实例
  validateStatus(status: number) {
    // 状态
    return status >= 200 && status < 300;
  },
  withCredentials: true, // 跨域设置
  timeout: 500000, // 设置超时      
};
const http = axios.create(config); // 构建自定义axios实例
http.interceptors.request.use(
  request => {
    // 请求拦截
    const token = auth.get();
    if (token) {
      request.headers.Authorization = `Bearer ${token}`;
    }
    return request;
  },
)
http.interceptors.response.use(
  // 返回拦截
  response => {
    const { data } = response;
    if (data && data.code === 0) {
      // return data;
    } else {
      if (data.code === 102) {
        logout();
      }
    }
    return data;
  },
  error => {
    // alert(error.message);
    if(error && error.response && error.response.status == 401) {
      // 登录失效
      logout();
      // router.replace({name:'user-me'})
    }
    return Promise.reject(error);
  }
);
export { http, API_URL, login, logout };
