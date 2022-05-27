/*
 * @Author: jack-pearson qize953463876@gmail.com
 * @Date: 2022-05-27 14:27:35
 * @LastEditors: jack-pearson qize953463876@gmail.com
 * @LastEditTime: 2022-05-27 16:51:04
 * @FilePath: \GOSS-APP\src\router\index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from "react";
import "react-native-gesture-handler";
import { connect } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { setUser } from "@/actions/user";
import Pages from "./importPage";
const Stack = createStackNavigator();
const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='login' component={Pages.LoginPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const mapStateToProps = ({ user }) => ({
  userInfo: user.userInfo,
});

const mapDispatchToProps = (dispatch: (arg0: any) => void) => ({
  setUserInfo(userInfo: any) {
    dispatch(setUser(userInfo));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(Router);
