/*
 * @Author: jack-pearson qize953463876@gmail.com
 * @Date: 2022-05-30 21:55:01
 * @LastEditors: jack-pearson qize953463876@gmail.com
 * @LastEditTime: 2022-06-29 11:23:28
 * @FilePath: \GOSS-APP\src\pages\tabs\home.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { connect } from "react-redux";
import { FocusAwareStatusBar } from "@/components";

const HomePage = ({ user }) => {
  // console.log(user);
  const DATA = [
    {
      id: 1,
      icon: "user",
      title: "生产制造",
    },
    {
      id: 2,
      icon: "user",
      title: "安装施工",
    },
    {
      id: 3,
      icon: "user",
      title: "维修服务",
    },
    {
      id: 4,
      icon: "user",
      title: "设备保养",
    },
    {
      id: 5,
      icon: "user",
      title: "备件申领",
    },
    {
      id: 6,
      icon: "user",
      title: "备件赔偿",
    },
    {
      id: 7,
      icon: "user",
      title: "设备报修",
    },
    {
      id: 8,
      icon: "user",
      title: "物流追踪",
    },
    {
      id: 9,
      icon: "user",
      title: "咨询投诉",
    },
  ];
  const renderItem = ({ item, index, separators }) => {
    const s = StyleSheet.create({
      itemStyle: {
        flex: 1,
        height: 100,
        alignItems: "center",
        justifyContent: "center",
        borderColor: "#F2F2F2",
        borderWidth: 1,
        borderRightWidth: 0,
        borderBottomWidth: 0,
      },
    });
    return (
      <View style={{ ...s.itemStyle, borderLeftWidth: [0, 3, 6].includes(index) ? 0 : 1 }}>
        <Text>{item.title}</Text>
      </View>
    );
  };
  return (
    <SafeAreaView edges={["right", "left", "top"]} style={{ flex: 1, backgroundColor: global.primaryColor }}>
      <FocusAwareStatusBar barStyle='light-content' backgroundColor={global.primaryColor} />
      <View style={styles.headerView}>
        <View style={styles.userView}>
          <View style={styles.userLeft}>
            <Text>张三</Text>
          </View>
          <View style={styles.userRight}>
            <Text>张三</Text>
          </View>
        </View>
      </View>
      <View style={{ flex: 1, backgroundColor: "#fff" }}>
        <FlatList contentContainerStyle={styles.flatListVIew} scrollEnabled={false} data={DATA} numColumns={3} renderItem={renderItem} keyExtractor={item => item.title}></FlatList>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerView: {
    backgroundColor: "#4b9af3",
    height: 200,
    paddingHorizontal: 20,
  },
  userView: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    height: 120,
    paddingVertical: 25,
  },
  userLeft: {
    flex: 1,
  },
  container: { flex: 1 },
  userRight: {
    width: 100,
  },
  flatListVIew: {
    height: 300,
    justifyContent: "space-between",
  },
});
const mapStateToProps = ({ user }) => ({
  user: user,
});
export default connect(mapStateToProps)(HomePage);
