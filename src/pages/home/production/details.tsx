/*
 * @Author: jack-pearson qize953463876@gmail.com
 * @Date: 2022-06-30 13:55:21
 * @LastEditors: jack-pearson qize953463876@gmail.com
 * @LastEditTime: 2022-07-15 18:13:43
 * @FilePath: /GOSS-APP/src/pages/home/production/index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { CommonActions, useNavigation } from "@react-navigation/native";
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-elements";
import { HeaderComponent } from "./components";

export const ProductionDetails = () => {
  const navigation = useNavigation();
  const renderItem = ({ item, index }) => {
    const len = DATA.length - 1;
    return (
      <View style={styles.flatListViewItem} key={item.title}>
        <View style={styles.bgRound}>{len === index ? null : <View style={styles.bgRoundLine}></View>}</View>
        <View style={{ flex: 1, height: 80, marginLeft: 10, justifyContent: "space-evenly", borderBottomWidth: 1, borderColor: "#ccc" }}>
          <Text>{item.user}</Text>
          <Text>{item.time}</Text>
        </View>
        <View style={{ width: 80, height: 80, justifyContent: "center", borderBottomWidth: 1, borderColor: "#ccc" }}>
          <Text>{item.title}</Text>
        </View>
      </View>
    );
  };
  const DATA = [
    {
      status: "done",
      id: 1,
      user: "系统管理员",
      title: "创建订单",
      time: "2016-07-12 12:40",
    },
    {
      status: "done",
      id: 2,
      user: "用户A",
      title: "订单审批",
      time: "2016-07-12 12:40",
    },
    {
      status: "run",
      id: 3,
      user: "系统管理员",
      title: "投入生产",
      time: "2016-07-12 12:40",
    },
    {
      status: "run",
      id: 4,
      user: "系统管理员",
      title: "投入生产1",
      time: "2016-07-12 12:40",
    },
    {
      status: "run",
      id: 5,
      user: "系统管理员",
      title: "投入生产2",
      time: "2016-07-12 12:40",
    },
  ];
  const goToReport = () => {
    navigation.dispatch(
      CommonActions.navigate({
        name: "ProductionReport",
      })
    );
  };
  return (
    <View style={{ flex: 1 }}>
      <HeaderComponent>
        <Button buttonStyle={styles.imageViewBtn} activeOpacity={1} titleStyle={styles.imageViewBtnText} type='outline' title='备件赔偿'></Button>
        <Button type='outline' onPress={goToReport} buttonStyle={styles.imageViewBtn} activeOpacity={1} titleStyle={styles.imageViewBtnText} title='报工'></Button>
      </HeaderComponent>
      <View style={styles.spareParts}>
        <Text style={{ fontSize: 16, fontWeight: "500" }}>备件申请单号</Text>
      </View>
      <View style={styles.stepView}>
        <ScrollView style={styles.flatListView} contentContainerStyle={{ flexGrow: 1 }} bounces={false} showsVerticalScrollIndicator={false}>
          {DATA.map((item, index) => {
            return renderItem({ item, index });
          })}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imageViewBtn: { paddingHorizontal: 15, borderRadius: 30, borderColor: "#000", paddingVertical: 4 },
  imageViewBtnText: { fontSize: 14, color: "#000" },
  spareParts: { height: 30, flexDirection: "row", justifyContent: "flex-start", alignItems: "center", marginHorizontal: 15 },
  stepView: { flex: 1, padding: 20, flexGrow: 1 },
  flatListView: { flex: 1 },
  flatListViewItem: { height: 80, flexDirection: "row", alignItems: "center" },
  bgRound: { width: 20, height: 20, backgroundColor: "#ccc", borderRadius: 50, position: "relative" },
  bgRoundLine: { position: "absolute", width: 1, height: 80, backgroundColor: "#ccc", left: 9.5, top: "50%" },
});
