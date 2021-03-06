/*
 * @Author: jack-pearson qize953463876@gmail.com
 * @Date: 2022-05-27 14:27:35
 * @LastEditors: jack-pearson qize953463876@gmail.com
 * @LastEditTime: 2022-07-15 15:24:43
 * @FilePath: \GOSS-APP\src\router\index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Pages from "./importPage";
import { CustomIcons } from "@/components";
const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();
const Router = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={({ route }) => {
            const info = route.name === "LoginScreen" ? TransitionPresets.ModalSlideFromBottomIOS : TransitionPresets.SlideFromRightIOS;
            return {
              headerStyle: { elevation: 0, borderBottomWidth: 0 }, // 一个应用于 header 的最外层 View 的 样式对象
              headerTintColor: "black",
              headerTitleStyle: { fontWeight: "bold" },
              mode: "modal",
              headerBackTitleVisible: false,
              headerTitleAlign: "center",
              cardStyle: { flex: 1, backgroundColor: "#f5f5f9" },
              ...info,
            };
          }}>
          <Stack.Screen
            name='LoginPage'
            component={Pages.LoginPage}
            options={() => {
              return { headerShown: false };
            }}
          />
          <Stack.Screen
            options={() => {
              return { headerShown: false };
            }}
            name='HomePage'
            component={TabsScreen}
          />
          <Stack.Screen
            options={() => {
              return { headerShown: true, title: "生产制造·一览", headerStyle: { backgroundColor: global.primaryColor }, headerTintColor: "#fff" };
            }}
            name='ProductionView'
            component={Pages.ProductionView}
          />
          <Stack.Screen
            options={() => {
              return { headerShown: true, title: "生产制造·详细", headerStyle: { backgroundColor: global.primaryColor }, headerTintColor: "#fff" };
            }}
            name='ProductionDetails'
            component={Pages.ProductionDetails}
          />
          <Stack.Screen
            options={() => {
              return { headerShown: true, title: "生产制造·报工", headerStyle: { backgroundColor: global.primaryColor }, headerTintColor: "#fff" };
            }}
            name='ProductionReport'
            component={Pages.ProductionReport}
          />
          <Stack.Screen
            options={() => {
              return { headerShown: true, title: "安装施工·一览", headerStyle: { backgroundColor: global.primaryColor }, headerTintColor: "#fff" };
            }}
            name='InstallationView'
            component={Pages.InstallationView}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

const TabsScreen = () => {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => {
        return {
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            switch (route.name) {
              case "Home":
                iconName = focused ? "home-fill" : "home";
                break;
              case "Knowledge":
                iconName = focused ? "Knowledge-fill" : "Knowledge";
                break;
              case "Consult":
                iconName = focused ? "consult-fill" : "consult";
                break;
              case "Mine":
                iconName = focused ? "mine-fill" : "mine";
                break;
            }
            return CustomIcons(iconName, color, size);
          },
          headerTitleAlign: "center",
          headerShown: false,
        };
      }}>
      <Tabs.Screen options={{ title: "首页" }} name='Home' component={Pages.HomePage} />
      <Tabs.Screen options={{ title: "知识库" }} name='Knowledge' component={Pages.KnowledgePage} />
      <Tabs.Screen options={{ title: "咨询" }} name='Consult' component={Pages.ConsultPage} />
      <Tabs.Screen options={{ title: "我的" }} name='Mine' component={Pages.MinePage} />
    </Tabs.Navigator>
  );
};
export default Router;
