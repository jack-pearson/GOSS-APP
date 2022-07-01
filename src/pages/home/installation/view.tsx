/*
 * @Author: jack-pearson qize953463876@gmail.com
 * @Date: 2022-07-01 13:45:47
 * @LastEditors: jack-pearson qize953463876@gmail.com
 * @LastEditTime: 2022-07-01 14:22:26
 * @FilePath: /GOSS-APP/src/pages/home/installation/view.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from "react";
import { Button, Text, View } from "react-native";
import { inject, useLocalObservable, observer, Observer } from "mobx-react";
import { runInAction } from "mobx";

const InstallationView = observer(() => {
  const a = useLocalObservable(() => ({
    b: "1",
    c: "1",
  }));
  console.log(a.b);
  return (
    <View>
      <Text>{a.b}</Text>
      <Button
        title='测试'
        onPress={() => {
          runInAction(() => {
            a.b = "3";
          });
          console.log(a.b);
        }}
      />
    </View>
  );
});
export default inject(s => s)(InstallationView);
