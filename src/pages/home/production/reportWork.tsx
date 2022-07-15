/*
 * @Author: jack-pearson qize953463876@gmail.com
 * @Date: 2022-07-05 14:35:27
 * @LastEditors: jack-pearson qize953463876@gmail.com
 * @LastEditTime: 2022-07-15 18:08:25
 * @FilePath: /GOSS-APP/src/pages/home/production/reportWork.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { Image, Input } from "react-native-elements";
import { HeaderComponent } from "./components";
import { observer, useLocalObservable } from "mobx-react";

const ProductionReport = observer(() => {
  const navigation = useNavigation();
  const store = useLocalObservable(() => ({
    remark: "描述&备注",
    setRemark: text => {
      store.remark = text;
    },
  }));
  return (
    <View style={{ flex: 1 }}>
      <HeaderComponent></HeaderComponent>
      <View style={{ backgroundColor: store.remark }}>
        <TextInput style={styles.TextInputView} editable multiline onChangeText={text => store.setRemark(text)} value={store.remark} />
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  TextInputView: { height: 80, margin: 12, borderWidth: 1, padding: 10, borderColor: "#0077FA" },
});

export default ProductionReport;
