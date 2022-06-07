/*
 * @Author: jack-pearson qize953463876@gmail.com
 * @Date: 2022-05-27 14:27:11
 * @LastEditors: jack-pearson qize953463876@gmail.com
 * @LastEditTime: 2022-06-07 13:32:49
 * @FilePath: \GOSS-APP\src\pages\login.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { Button, Input, useTheme } from "react-native-elements";
import { REMOVE_USER, SET_USER } from "@/constants/user";
import Icon from "react-native-vector-icons/FontAwesome";
import { SafeAreaView } from "react-native-safe-area-context";

const LoginPage = ({ user, setUser, removeUser }) => {
  const login = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: "HomePage" }],
    });
  };
  const { theme } = useTheme();
  const navigation = useNavigation();
  const primary = theme.colors?.primary;
  return (
    <SafeAreaView style={styles.loginPage}>
      <View style={styles.loginTextView}>
        <Text style={{ color: primary, borderBottomColor: primary, ...styles.loginTitle }}>登陆账户</Text>
      </View>
      <View style={styles.form}>
        <Input autoCompleteType='username' leftIcon={<Icon name='user' size={24} color='black' />} errorMessage='账户不对' label='账号' placeholder='请输入账号' />
        <Input autoCompleteType='password' leftIcon={<Icon name='lock' size={24} color='black' />} secureTextEntry={true} errorMessage='密码不对' label='密码' placeholder='请输入密码' />
      </View>
      <View>
        <Button type='solid' title='登陆' onPress={login}></Button>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  loginPage: { flex: 1, paddingLeft: 30, paddingRight: 30, paddingTop: 68 },
  loginTextView: { height: 50, flexDirection: "row", justifyContent: "center", alignItems: "center" },
  loginTitle: { letterSpacing: 2, fontSize: 30, borderBottomWidth: 1, paddingLeft: 20, paddingRight: 20 },
  form: { height: 300, justifyContent: "center", alignItems: "center" },
});

const mapStateToProps = ({ user }) => ({
  user: user,
});

const mapDispatchToProps = dispatch => ({
  setUser(user) {
    dispatch({ type: SET_USER, user });
  },
  removeUser() {
    dispatch({ type: REMOVE_USER });
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
