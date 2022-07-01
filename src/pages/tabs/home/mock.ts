/*
 * @Author: jack-pearson qize953463876@gmail.com
 * @Date: 2022-06-30 13:58:39
 * @LastEditors: jack-pearson qize953463876@gmail.com
 * @LastEditTime: 2022-07-01 13:48:19
 * @FilePath: /GOSS-APP/src/pages/tabs/home/mock.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

export interface IDateItem {
  id: number;
  icon: string;
  title: string;
  navigate?: string;
}
export type IDate = IDateItem[];
export const DATA: IDate = [
  {
    id: 1,
    icon: "user",
    title: "生产制造",
    navigate: "ProductionView",
  },
  {
    id: 2,
    icon: "user",
    title: "安装施工",
    navigate: "InstallationView",
  },
  {
    id: 3,
    icon: "user",
    title: "维修服务",
  },
  {
    id: 4,
    icon: "user",
    title: "设备保养",
  },
  {
    id: 5,
    icon: "user",
    title: "备件申领",
  },
  {
    id: 6,
    icon: "user",
    title: "备件赔偿",
  },
  {
    id: 7,
    icon: "user",
    title: "设备报修",
  },
  {
    id: 8,
    icon: "user",
    title: "物流追踪",
  },
  {
    id: 9,
    icon: "user",
    title: "咨询投诉",
  },
];
