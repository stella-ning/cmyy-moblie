import axios from 'axios';
import { HOST } from './config';

/**
 * 创建axios实例，封装公共headers请求头
 * @type {AxiosInstance}
 */

export const request = axios.create({
  baseURL: HOST,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json; charset=utf-8',
  }
});

/**
 * 对返回的数据做拦截，直接返回接口的数据data，而不是
 */
request.interceptors.response.use((res) => {
  return res.data;
}, (error => Promise.reject(error)));

// export const
