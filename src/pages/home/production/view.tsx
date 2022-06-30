/*
 * @Author: jack-pearson qize953463876@gmail.com
 * @Date: 2022-06-30 13:55:21
 * @LastEditors: jack-pearson qize953463876@gmail.com
 * @LastEditTime: 2022-06-30 15:59:51
 * @FilePath: /GOSS-APP/src/pages/home/production/index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { CommonActions, useNavigation } from "@react-navigation/native";

export const ProductionView = () => {
  const navigation = useNavigation();
  const DATA = [
    {
      title: "整机-1",
      status: "生产中",
      time: "2016-07-12 12:40",
    },
    {
      title: "整机-2",
      status: "待生产",
      time: "2016-07-12 12:40",
    },
  ];
  const renderItem = ({ item, index, separators }) => {
    const onHandlePress = () => {
      navigation.dispatch(
        CommonActions.navigate({
          name: "ProductionDetails",
        })
      );
    };
    return (
      <TouchableOpacity onPress={onHandlePress}>
        <View style={styles.flatListViewItem}>
          <View style={styles.flatListViewItemLeft}>
            <Text style={{ fontSize: 16, fontWeight: "600", color: "#111" }}>{item.title}</Text>
            <Text style={{ color: "#999" }}>{item.time}</Text>
          </View>
          <View style={styles.flatListViewItemRight}>
            <Text>{item.status}</Text>
            <Icon style={{ marginLeft: 20 }} name='chevron-right' size={20} color='#ccc' />
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={{ flex: 1 }}>
      <FlatList contentContainerStyle={styles.flatListView} scrollEnabled={false} data={DATA} numColumns={1} renderItem={renderItem} keyExtractor={item => item.title}></FlatList>
    </View>
  );
};

const styles = StyleSheet.create({
  flatListView: { flex: 1, paddingHorizontal: 20 },
  flatListViewItem: { height: 60, borderColor: "#ccc", borderBottomWidth: 1, paddingVertical: 5, flexDirection: "row", justifyContent: "space-evenly" },
  flatListViewItemLeft: { flex: 1, justifyContent: "space-around" },
  flatListViewItemRight: { width: 100, justifyContent: "flex-end", flexDirection: "row", alignItems: "center" },
});
