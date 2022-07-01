/*
 * @Author: jack-pearson qize953463876@gmail.com
 * @Date: 2022-05-27 14:27:11
 * @LastEditors: jack-pearson qize953463876@gmail.com
 * @LastEditTime: 2022-07-01 18:40:40
 * @FilePath: \GOSS-APP\src\pages\login.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { useNavigation, CommonActions } from "@react-navigation/native";
import { Button, Input } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import Ionicons from "react-native-vector-icons/Ionicons";
import { SafeAreaView } from "react-native-safe-area-context";
import { IUserInput, Login } from "@/apis/login";
import { useErrorMessage } from "./useErrorMessage";
import { inject, observer } from "mobx-react";

const LoginPage = observer(({ user }) => {
  const navigation = useNavigation();
  const primary = global.primaryColor;
  const [accountErrorMessage, setAccountErrorMessage] = useErrorMessage();
  const [passwordErrorMessage, setPasswordErrorMessage] = useErrorMessage();
  const [userInput, setUserInput] = useState<IUserInput>({ account: "", password: "" });
  const [passwordInputType, setPasswordInputType] = useState<string>("password");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  /** login 登录方法 */
  const login = async () => {
    if (isLoading) return;
    setIsLoading(true);
    try {
      // const user = await Login(userInput);
      // setUser(user);
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name: "HomePage" }],
        })
      );
    } catch (error) {
      setUserInput({ account: "", password: "" });
      setIsLoading(false);
    }
  };
  return (
    <SafeAreaView style={styles.loginPage}>
      <View style={styles.loginTextView}>
        <Text style={{ color: primary, borderBottomColor: primary, ...styles.loginTitle }}>登陆账户</Text>
      </View>
      <View style={styles.form}>
        <Input
          value={userInput.account}
          autoCompleteType='off'
          onChangeText={value => {
            setUserInput({ ...userInput, account: value });
            value ? setAccountErrorMessage("") : setAccountErrorMessage("请输入账号");
          }}
          leftIcon={<Icon name='user' size={24} color='black' />}
          errorMessage={accountErrorMessage}
          label='账号'
          placeholder='请输入账号'
        />
        <Input
          value={userInput.password}
          autoCompleteType={passwordInputType}
          onChangeText={value => {
            setUserInput({ ...userInput, password: value });
            value ? setPasswordErrorMessage("") : setPasswordErrorMessage("密码不能为空");
          }}
          leftIcon={<Icon name='lock' size={24} color='black' />}
          rightIcon={
            <Ionicons onPress={() => setPasswordInputType(passwordInputType === "password" ? "off" : "password")} name={passwordInputType === "password" ? "eye" : "eye-off"} size={24} color='black' />
          }
          secureTextEntry={passwordInputType === "password" ? true : false}
          errorMessage={passwordErrorMessage}
          label='密码'
          placeholder='请输入密码'
        />
      </View>
      <View>
        <Button activeOpacity={1} type='solid' title='登陆' loading={isLoading} onPress={login} disabled={userInput.password && userInput.account ? false : true}></Button>
      </View>
    </SafeAreaView>
  );
});

const styles = StyleSheet.create({
  loginPage: { flex: 1, paddingLeft: 30, paddingRight: 30, paddingTop: 68 },
  loginTextView: { height: 50, flexDirection: "row", justifyContent: "center", alignItems: "center" },
  loginTitle: { letterSpacing: 2, fontSize: 30, borderBottomWidth: 1, paddingLeft: 20, paddingRight: 20 },
  form: { height: 300, justifyContent: "center", alignItems: "center" },
});

export default inject("user")(LoginPage);
