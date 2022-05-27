/*
 * @Author: jack-pearson qize953463876@gmail.com
 * @Date: 2022-05-27 15:29:54
 * @LastEditors: jack-pearson qize953463876@gmail.com
 * @LastEditTime: 2022-05-27 15:30:51
 * @FilePath: \GOSS-APP\src\actions\user.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { SET_USER, REMOVE_USER } from "@/constants/user";

/**
 * @description: 设置用户信息
 * @param {*} 用户信息
 */
export const setUser = (userInfo: any) => {
  return {
    type: SET_USER,
    userInfo: userInfo,
  };
};

/**
 * @description: 清空用户信息
 */
export const removeUser = () => {
  return {
    type: REMOVE_USER,
    userInfo: null,
  };
};
