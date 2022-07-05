import React from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import { Image } from "react-native-elements";

const ProductionReport = () => {
  const navigation = useNavigation();
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
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.top}>
        <Text style={{ fontWeight: "600" }}>生产内容</Text>
        <Text>已投产</Text>
      </View>
      <View style={styles.imageView}>
        <View style={styles.imageViewImg}>
          <Image
            style={{ width: 80, height: "auto", borderRadius: 5 }}
            source={{
              uri: "https://reactjs.org/logo-og.png",
            }}
            width={undefined}
            height={undefined}></Image>
          <View style={{ flex: 1, paddingLeft: 10, justifyContent: "space-evenly" }}>
            <Text>整机-1</Text>
            <Text>建单时间: 2020-04-25 20:45</Text>
          </View>
        </View>
        <View style={styles.imageViewButtons}></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  top: { height: 46, marginHorizontal: 15, flexDirection: "row", justifyContent: "space-between", alignItems: "center", borderColor: "#ccc", borderBottomWidth: 1, paddingRight: 20 },
  imageView: { height: 120, paddingVertical: 10, marginHorizontal: 15, borderColor: "#ccc", borderBottomWidth: 1 },
  imageViewImg: { flex: 1, flexDirection: "row", justifyContent: "flex-start", paddingBottom: 10 },
  imageViewButtons: { height: 30 },
});

export default ProductionReport;
