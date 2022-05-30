/*
 * @Author: jack-pearson qize953463876@gmail.com
 * @Date: 2022-05-27 15:21:35
 * @LastEditors: jack-pearson qize953463876@gmail.com
 * @LastEditTime: 2022-05-30 15:03:12
 * @FilePath: \GOSS-APP\src\redurce\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { SET_USER, REMOVE_USER } from "@/constants/user";
import { IAction } from "./type";

let INITIAL_STATE = {};

export default function user(state = INITIAL_STATE, action: IAction) {
  switch (action.type) {
    case SET_USER:
      return {
        ...action.user,
      };
    case REMOVE_USER:
      return {};
    default:
      return state;
  }
}
