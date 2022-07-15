/*
 * @Author: jack-pearson qize953463876@gmail.com
 * @Date: 2022-07-15 13:47:44
 * @LastEditors: jack-pearson qize953463876@gmail.com
 * @LastEditTime: 2022-07-15 14:51:03
 * @FilePath: /GOSS-APP/src/pages/home/production/components/header.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Image } from "react-native-elements";
import { IPageViewProps } from "@/utils";

export const HeaderComponent = (props: IPageViewProps) => {
  const { children } = props;
  return (
    <View>
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
        <View style={styles.imageViewButtons}>{children}</View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  top: { height: 46, marginHorizontal: 15, flexDirection: "row", justifyContent: "space-between", alignItems: "center", borderColor: "#ccc", borderBottomWidth: 1, paddingRight: 20 },
  imageView: { height: 120, paddingVertical: 10, marginHorizontal: 15, borderColor: "#ccc", borderBottomWidth: 1 },
  imageViewImg: { flex: 1, flexDirection: "row", justifyContent: "flex-start", paddingBottom: 10 },
  imageViewButtons: { height: 30, flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
});

export default HeaderComponent;
