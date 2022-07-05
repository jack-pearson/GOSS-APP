/*
 * @Author: jack-pearson qize953463876@gmail.com
 * @Date: 2022-07-04 17:32:42
 * @LastEditors: jack-pearson qize953463876@gmail.com
 * @LastEditTime: 2022-07-05 10:29:36
 * @FilePath: /GOSS-APP/src/utils/type.d.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export interface IPageViewDefaultProps {
  navigation?: NavigationProp;
}
export type IPageViewProps<T> = IPageViewDefaultProps & T;
