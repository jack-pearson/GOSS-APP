/*
 * @Author: jack-pearson qize953463876@gmail.com
 * @Date: 2022-05-31 14:33:43
 * @LastEditors: jack-pearson qize953463876@gmail.com
 * @LastEditTime: 2022-06-29 10:53:11
 * @FilePath: \GOSS-APP\src\components\icon\index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { getIconCode, IIconConfig } from "@/utils/icon";
import React from "react";
import { Text } from "react-native";

export const CustomIcons = (name: keyof IIconConfig, color, size) => {
  return <Text style={{ fontFamily: "iconfont", color, fontSize: size }}>{getIconCode(name)}</Text>;
};
