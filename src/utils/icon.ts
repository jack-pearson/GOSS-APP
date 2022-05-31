/*
 * @Author: jack-pearson qize953463876@gmail.com
 * @Date: 2022-05-31 13:54:47
 * @LastEditors: jack-pearson qize953463876@gmail.com
 * @LastEditTime: 2022-05-31 14:33:12
 * @FilePath: \GOSS-APP\src\utils\fonts.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const iconConfig = {
  mine: "\ue658",
  "mine-fill": "\ue652",
  consult: "\ue658",
  "consult-fill": "\ue662",
  home: "\ue7a7",
  "home-fill": "\ue7ae",
  Knowledge: "\ue607",
  "Knowledge-fill": "\ue650",
};
export type IIconConfig = typeof iconConfig;
// 通用方法
export const getIconCode = (iconName: keyof IIconConfig) => {
  return iconConfig[iconName];
};
