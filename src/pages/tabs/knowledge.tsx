/*
 * @Author: jack-pearson qize953463876@gmail.com
 * @Date: 2022-05-30 21:56:58
 * @LastEditors: jack-pearson qize953463876@gmail.com
 * @LastEditTime: 2022-06-30 13:27:19
 * @FilePath: \GOSS-APP\src\pages\tabs\knowledge .tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FocusAwareStatusBar } from "@/components";
import { Input } from "react-native-elements";

const KnowledgePage = () => {
  return (
    <SafeAreaView edges={["right", "left", "top"]} style={{ flex: 1, backgroundColor: global.primaryColor }}>
      <FocusAwareStatusBar barStyle='light-content' backgroundColor={global.primaryColor} />
      <View style={styles.page}>
        <View style={styles.search}>
          <Input
            autoCompleteType='off'
            placeholder='请输入搜索内容'
            leftIcon={{ type: "font-awesome", name: "search" }}
            containerStyle={styles.containerStyle}
            inputContainerStyle={styles.inputContainerStyle}></Input>
        </View>
        <View style={[styles.card, { backgroundColor: global.primaryColor }]}>
          <View style={styles.cardItem}>
            <Text style={styles.cardItemLabelText}>作业指导</Text>
            <View style={styles.cardItemNumberView}>
              <View style={{ flex: 2, flexDirection: "row", justifyContent: "flex-end" }}>
                <Text style={styles.cardItemNumberText}>99</Text>
              </View>
              <View style={{ flex: 1, flexDirection: "row", justifyContent: "flex-end", alignSelf: "flex-end" }}>
                <Text style={styles.cardItemUnitText}>本</Text>
              </View>
            </View>
          </View>
          <View style={styles.horizontalSegmentation}></View>
          <View style={styles.cardItem}>
            <Text style={styles.cardItemLabelText}>解决方案</Text>
            <View style={styles.cardItemNumberView}>
              <View style={{ flex: 2, flexDirection: "row", justifyContent: "flex-end" }}>
                <Text style={styles.cardItemNumberText}>99</Text>
              </View>
              <View style={{ flex: 1, flexDirection: "row", justifyContent: "flex-end", alignSelf: "flex-end" }}>
                <Text style={styles.cardItemUnitText}>本</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={{ flex: 1 }}>
          {[1, 2].map(item => {
            return (
              <View key={item} style={styles.listItem}>
                <View style={styles.listItemTitleView}>
                  <Text style={styles.listItemTitleText}>打孔机文字调整</Text>
                  <Text>作业指导</Text>
                </View>
                <View style={styles.listItemTagsView}>
                  {["打孔机", "调整", "指导"].map(t => {
                    return (
                      <View key={t} style={styles.tagItem}>
                        <Text style={styles.tagText}>{t}</Text>
                      </View>
                    );
                  })}
                </View>
              </View>
            );
          })}
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  page: { flex: 1, backgroundColor: "#fff" },
  search: { position: "relative", height: 60, paddingHorizontal: 10, paddingTop: 10, paddingBottom: 10 },
  containerStyle: { flex: 1, paddingVertical: 10, flexDirection: "row", alignItems: "center" },
  inputContainerStyle: { height: 40, flex: 1, borderRadius: 50, borderColor: "#ccc", paddingHorizontal: 10, borderWidth: 1 },
  card: { height: 120, paddingVertical: 20, flexDirection: "row" },
  cardItem: { flex: 1, paddingHorizontal: 20 },
  horizontalSegmentation: { width: 1.5, height: "100%", backgroundColor: "#fff" },
  cardItemLabelText: { color: "#fff", fontSize: 20, height: 25 },
  cardItemNumberView: { flex: 1, flexDirection: "row", justifyContent: "center", alignItems: "center" },
  cardItemNumberText: { color: "#fff", fontSize: 32 },
  cardItemUnitText: { color: "#fff", fontSize: 22 },
  listItem: { height: 120, paddingVertical: 30, paddingHorizontal: 15, borderBottomColor: "#ccc", borderBottomWidth: 1 },
  listItemTitleView: { flex: 1, flexDirection: "row", justifyContent: "space-between" },
  listItemTitleText: { fontWeight: "500", fontSize: 20 },
  listItemTagsView: { flex: 1, flexDirection: "row" },
  tagItem: { width: "auto", height: 20, borderRadius: 20, borderWidth: 1, borderColor: "#33cc99", marginRight: 20, paddingHorizontal: 5, justifyContent: "center", alignItems: "center" },
  tagText: { color: "#33cc99" },
});
export default KnowledgePage;
