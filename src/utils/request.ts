/*
 * @Author: jack-pearson
 * @Date: 2021-11-23 15:16:14
 * @LastEditTime: 2022-06-09 17:59:58
 * @LastEditors: jack-pearson qize953463876@gmail.com
 * @FilePath: /vue3-element-admin/src/utils/request/index.ts
 * @Description:  https://github.com/jack-pearson/vue3-element-admin
 */
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { Alert } from "react-native";
import ENV from "@/env";
export interface HttpGlobalResponse<T = any> {
  resultCode: number;
  success?: boolean;
  message?: string;
  data: T;
}
const showStatus = (status: number) => {
  let message = "";
  switch (status) {
    case 400:
      message = "请求错误(400)";
      break;
    case 401:
      message = "未授权，请重新登录(401)";
      break;
    case 403:
      message = "拒绝访问(403)";
      break;
    case 404:
      message = "请求出错(404)";
      break;
    case 408:
      message = "请求超时(408)";
      break;
    case 500:
      message = "服务器错误(500)";
      break;
    case 501:
      message = "服务未实现(501)";
      break;
    case 502:
      message = "网络错误(502)";
      break;
    case 503:
      message = "服务不可用(503)";
      break;
    case 504:
      message = "网络超时(504)";
      break;
    case 505:
      message = "HTTP版本不受支持(505)";
      break;
    default:
      message = `连接出错${status ? `(${status}}` : ""}!`;
  }
  return message;
};
const [TIME_OUT] = [10000];
const pending: Map<any, any> = new Map();
const instance = axios.create({
  headers: {
    "Content-Type": "application/json;charset=UTF-8",
    "Access-Control-Allow-Origin": "*",
  },
  timeout: TIME_OUT,
  baseURL: ENV.APP_BASE_URL,
  withCredentials: false,
});

/** 请求拦截器 */
instance.interceptors.request.use(
  (config: any) => {
    return config;
  }, // 请求错误
  (error: any) => {
    return Promise.reject(error);
  }
);

/** 响应拦截器 */
instance.interceptors.response.use(
  (response: AxiosResponse<HttpGlobalResponse>) => {
    const { data } = response;
    if (data.resultCode === 0) {
      return response.data;
    } else {
      Alert.alert("提示", data.message);
      return Promise.reject(response);
    }
  },
  error => {
    Alert.alert("提示", "网络错误");
    const { config, response } = error;
    return Promise.reject(error);
  }
);

export const request = async <T = any>(config: AxiosRequestConfig): Promise<HttpGlobalResponse<T>> => {
  const { data } = await instance.request<HttpGlobalResponse<T>>(config);
  console.log(data, "data");
  return data;
};
