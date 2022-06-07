/*
 * @Author: jack-pearson qize953463876@gmail.com
 * @Date: 2022-05-30 21:55:01
 * @LastEditors: jack-pearson qize953463876@gmail.com
 * @LastEditTime: 2022-06-07 15:42:16
 * @FilePath: \GOSS-APP\src\pages\tabs\consult.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import FocusAwareStatusBar from "@/components/focusAwareStatusBar";
import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const ConsultPage = () => {
  return (
    <SafeAreaView edges={["right", "left", "top"]} style={{ flex: 1, backgroundColor: "red" }}>
      <View style={{ flex: 1, backgroundColor: "blue" }} />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: { flex: 1 },
});

export default ConsultPage;
