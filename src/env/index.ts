/*
 * @Author: jack-pearson qize953463876@gmail.com
 * @Date: 2022-06-08 14:39:54
 * @LastEditors: jack-pearson qize953463876@gmail.com
 * @LastEditTime: 2022-06-08 15:24:42
 * @FilePath: /GOSS-APP/src/env/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import development from "./env.development";
import production from "./env.production";

export default __DEV__ ? development : production;
