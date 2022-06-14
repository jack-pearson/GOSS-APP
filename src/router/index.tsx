/*
 * @Author: jack-pearson qize953463876@gmail.com
 * @Date: 2022-05-27 14:27:35
 * @LastEditors: jack-pearson qize953463876@gmail.com
 * @LastEditTime: 2022-06-14 14:50:07
 * @FilePath: \GOSS-APP\src\router\index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from "react";
import "react-native-gesture-handler";
import { connect } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Pages from "./importPage";
import { SET_USER } from "@/constants/user";
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
              headerStyle: {
                elevation: 0,
                borderBottomWidth: 0,
              }, // 一个应用于 header 的最外层 View 的 样式对象
              headerTintColor: "black",
              headerTitleStyle: {
                fontWeight: "bold",
              },
              mode: "modal",
              headerBackTitleVisible: false,
              headerTitleAlign: "center",
              cardStyle: {
                flex: 1,
                backgroundColor: "#f5f5f9",
              },
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

const mapStateToProps = ({ user }) => ({
  user: user,
});

const mapDispatchToProps = (dispatch: (arg0: any) => void) => ({
  setUser(user) {
    dispatch({ type: SET_USER });
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(Router);
