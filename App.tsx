/*
 * @Author: jack-pearson qize953463876@gmail.com
 * @Date: 2022-05-26 13:47:00
 * @LastEditors: jack-pearson qize953463876@gmail.com
 * @LastEditTime: 2022-07-05 10:25:28
 * @FilePath: \GOSS-APP\App.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import React, { useEffect } from "react";
import SplashScreen from "react-native-splash-screen";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Router from "@/router";
import { user } from "@/store";
import { Provider } from "mobx-react";
const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <Provider user={user}>
      <SafeAreaProvider>
        <Router />
      </SafeAreaProvider>
    </Provider>
  );
};
export default App;
