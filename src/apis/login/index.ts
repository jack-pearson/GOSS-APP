/*
 * @Author: jack-pearson qize953463876@gmail.com
 * @Date: 2022-06-09 14:14:26
 * @LastEditors: jack-pearson qize953463876@gmail.com
 * @LastEditTime: 2022-06-09 17:55:44
 * @FilePath: \GOSS-APP\src\apis\login\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { IUser } from "@/reducer/type";
import { request } from "@/utils/request";

export interface IUserInput {
  account: string;
  password: string;
}

export const Login = (data: IUserInput) => {
  return request<IUser>({
    method: "post",
    url: "v1/sysauth/login",
    data,
  });
};
