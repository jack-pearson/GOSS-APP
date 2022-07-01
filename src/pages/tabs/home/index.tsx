/*
 * @Author: jack-pearson qize953463876@gmail.com
 * @Date: 2022-05-30 21:55:01
 * @LastEditors: jack-pearson qize953463876@gmail.com
 * @LastEditTime: 2022-07-01 17:20:05
 * @FilePath: \GOSS-APP\src\pages\tabs\home.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from "react";
import { FlatList, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { connect } from "react-redux";
import { FocusAwareStatusBar } from "@/components";
import { DATA, IDateItem } from "./mock";
import { CommonActions, useNavigation } from "@react-navigation/native";

const HomePage = ({ user }) => {
  const navigation = useNavigation();
  const renderItem = ({ item, index, separators }: { item: IDateItem; [key: string]: any }) => {
    const onHandlePress = () => {
      if (item.navigate) {
        navigation.dispatch(CommonActions.navigate({ name: item.navigate }));
      }
    };
    return (
      <TouchableOpacity activeOpacity={1} onPress={onHandlePress} style={{ ...styles.cardItem, borderLeftWidth: [0, 3, 6].includes(index) ? 0 : 1 }}>
        <View>
          <Text>{item.title}</Text>
        </View>
      </TouchableOpacity>
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
  headerView: { backgroundColor: "#4b9af3", height: 200, paddingHorizontal: 20 },
  userView: { flex: 1, flexDirection: "row", flexWrap: "wrap", height: 120, paddingVertical: 25 },
  userLeft: { flex: 1 },
  container: { flex: 1 },
  userRight: { width: 100 },
  flatListVIew: { height: 300, justifyContent: "space-between" },
  cardItem: { flex: 1, height: 100, alignItems: "center", justifyContent: "center", borderColor: "#F2F2F2", borderWidth: 1, borderRightWidth: 0, borderBottomWidth: 0 },
});
const mapStateToProps = ({ user }) => ({
  user: user,
});
export default connect(mapStateToProps)(HomePage);
