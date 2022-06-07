/*
 * @Author: jack-pearson qize953463876@gmail.com
 * @Date: 2022-05-26 13:47:00
 * @LastEditors: jack-pearson qize953463876@gmail.com
 * @LastEditTime: 2022-06-07 15:21:39
 * @FilePath: \GOSS-APP\App.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import React from "react";
import { Provider } from "react-redux";
import { SafeAreaProvider, SafeAreaView, initialWindowMetrics } from "react-native-safe-area-context";
import { StatusBar, StyleSheet } from "react-native";
import Router from "@/router";
import Store from "@/store";

const App = () => {
  return (
    <Provider store={Store}>
      <SafeAreaProvider>
        <Router />
      </SafeAreaProvider>
    </Provider>
  );
};
export default App;
