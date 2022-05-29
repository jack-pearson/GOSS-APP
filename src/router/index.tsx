/*
 * @Author: jack-pearson qize953463876@gmail.com
 * @Date: 2022-05-27 14:27:35
 * @LastEditors: jack-pearson qize953463876@gmail.com
 * @LastEditTime: 2022-05-29 13:36:29
 * @FilePath: \GOSS-APP\src\router\index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from "react";
import "react-native-gesture-handler";
import { connect } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";
import { setUser } from "@/actions/user";
import Pages from "./importPage";
const Stack = createStackNavigator();
const Router = () => {
  return (
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
        <Stack.Screen name='1' component={Pages.LoginPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const mapStateToProps = ({ user }) => ({
  user: user,
});

const mapDispatchToProps = (dispatch: (arg0: any) => void) => ({
  setUser(user) {
    dispatch(setUser(user));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(Router);
