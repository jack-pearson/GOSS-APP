/*
 * @Author: jack-pearson qize953463876@gmail.com
 * @Date: 2022-05-30 14:58:17
 * @LastEditors: jack-pearson qize953463876@gmail.com
 * @LastEditTime: 2022-05-31 15:46:12
 * @FilePath: \GOSS-APP\src\reducer\type.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import { USER } from "@/constants/user";

export interface IAction {
  [key: string]: any;
}

export type IUser = typeof USER;

export type IActionUser = IAction & { type: keyof IUser };
