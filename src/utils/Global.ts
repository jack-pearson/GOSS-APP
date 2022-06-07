/*
 * @Author: jack-pearson qize953463876@gmail.com
 * @Date: 2022-05-30 16:03:25
 * @LastEditors: jack-pearson qize953463876@gmail.com
 * @LastEditTime: 2022-06-02 21:14:51
 * @FilePath: \GOSS-APP\src\utils\Global.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { useRef, useEffect } from "react";

import { Dimensions } from "react-native";

global.ScreenX = Dimensions.get("window").width;
global.ScreenY = Dimensions.get("window").height;

/*获取oldValue */
global.usePrevious = value => {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
};
global.primaryColor = "#2295FF";
global.limit = 10;
