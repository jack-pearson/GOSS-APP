/*
 * @Author: jack-pearson qize953463876@gmail.com
 * @Date: 2022-07-05 15:54:16
 * @LastEditors: jack-pearson qize953463876@gmail.com
 * @LastEditTime: 2022-07-05 15:54:23
 * @FilePath: /GOSS-APP/src/pages/home/production/GmailStyleSwipeableRow.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { Component, PropsWithChildren } from "react";
import { Animated, StyleSheet, I18nManager, View } from "react-native";

import { RectButton } from "react-native-gesture-handler";

import Swipeable from "react-native-gesture-handler/Swipeable";

const AnimatedView = Animated.createAnimatedComponent(View);

export default class GmailStyleSwipeableRow extends Component<PropsWithChildren<unknown>> {
  private renderLeftActions = (_progress: Animated.AnimatedInterpolation, dragX: Animated.AnimatedInterpolation) => {
    const scale = dragX.interpolate({
      inputRange: [0, 80],
      outputRange: [0, 1],
      extrapolate: "clamp",
    });
    return (
      <RectButton style={styles.leftAction} onPress={this.close}>
        {/* Change it to some icons */}
        <AnimatedView style={[styles.actionIcon, { transform: [{ scale }] }]} />
      </RectButton>
    );
  };
  private renderRightActions = (_progress: Animated.AnimatedInterpolation, dragX: Animated.AnimatedInterpolation) => {
    const scale = dragX.interpolate({
      inputRange: [-80, 0],
      outputRange: [1, 0],
      extrapolate: "clamp",
    });
    return (
      <RectButton style={styles.rightAction} onPress={this.close}>
        {/* Change it to some icons */}
        <AnimatedView style={[styles.actionIcon, { transform: [{ scale }] }]} />
      </RectButton>
    );
  };

  private swipeableRow?: Swipeable;

  private updateRef = (ref: Swipeable) => {
    this.swipeableRow = ref;
  };
  private close = () => {
    this.swipeableRow?.close();
  };
  render() {
    const { children } = this.props;
    return (
      <Swipeable
        ref={this.updateRef}
        friction={2}
        leftThreshold={80}
        enableTrackpadTwoFingerGesture
        rightThreshold={40}
        renderLeftActions={this.renderLeftActions}
        renderRightActions={this.renderRightActions}>
        {children}
      </Swipeable>
    );
  }
}

const styles = StyleSheet.create({
  leftAction: {
    flex: 1,
    backgroundColor: "#388e3c",
    justifyContent: "flex-end",
    alignItems: "center",
    flexDirection: I18nManager.isRTL ? "row" : "row-reverse",
  },
  actionIcon: {
    width: 30,
    marginHorizontal: 10,
    backgroundColor: "plum",
    height: 20,
  },
  rightAction: {
    alignItems: "center",
    flexDirection: I18nManager.isRTL ? "row-reverse" : "row",
    backgroundColor: "#dd2c00",
    flex: 1,
    justifyContent: "flex-end",
  },
});
