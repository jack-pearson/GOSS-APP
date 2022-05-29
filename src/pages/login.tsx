/*
 * @Author: jack-pearson qize953463876@gmail.com
 * @Date: 2022-05-27 14:27:11
 * @LastEditors: jack-pearson qize953463876@gmail.com
 * @LastEditTime: 2022-05-29 15:12:43
 * @FilePath: \GOSS-APP\src\pages\login.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { removeUser, setUser } from "@/actions/user";
import React, { useEffect } from "react";
import { Button, Text, View, TouchableOpacity, Alert } from "react-native";
import { connect } from "react-redux";

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
      <Button title='Press me' onPress={() => Alert.alert("Simple Button pressed")} />
    </View>
  );
};

const mapStateToProps = ({ user }) => ({
  user: user,
});

const mapDispatchToProps = dispatch => ({
  setUser(user) {
    dispatch(setUser(user));
  },
  removeUser() {
    dispatch(removeUser());
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
