/*
 * @Author: jack-pearson qize953463876@gmail.com
 * @Date: 2022-06-07 14:35:36
 * @LastEditors: jack-pearson qize953463876@gmail.com
 * @LastEditTime: 2022-06-29 11:19:22
 * @FilePath: /GOSS-APP/src/components/focusAwareStatusBar/index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import * as React from "react";
import { StatusBar, StatusBarProps } from "react-native";
import { useIsFocused } from "@react-navigation/native";
export const FocusAwareStatusBar = (props: StatusBarProps) => {
  const isFocused = useIsFocused();
  return isFocused ? <StatusBar {...props} /> : null;
};
