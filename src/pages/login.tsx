/*
 * @Author: jack-pearson qize953463876@gmail.com
 * @Date: 2022-05-27 14:27:11
 * @LastEditors: jack-pearson qize953463876@gmail.com
 * @LastEditTime: 2022-05-30 15:03:53
 * @FilePath: \GOSS-APP\src\pages\login.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { useEffect } from "react";
import { Text, View, TouchableOpacity, Alert } from "react-native";
import { connect } from "react-redux";
import { Button, Slider } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import { REMOVE_USER, SET_USER } from "@/constants/user";

const LoginPage = ({ user, setUser, removeUser }) => {
  useEffect(() => {
    setUser({ name: "123", age: 20 });
  }, []);
  useEffect(() => {
    console.log("2", user);
  }, [user]);
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          console.log("1");
          removeUser();
        }}>
        <Text>12312</Text>
      </TouchableOpacity>
      <Button type='solid' icon={<Icon name='arrow-right' size={20} color='blue' />} title='Press me' onPress={() => Alert.alert("Simple Button pressed")} />
      <Slider value={0.2} />
    </View>
  );
};

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
