/*
 * @Author: jack-pearson qize953463876@gmail.com
 * @Date: 2022-07-01 13:45:47
 * @LastEditors: jack-pearson qize953463876@gmail.com
 * @LastEditTime: 2022-07-05 10:25:39
 * @FilePath: /GOSS-APP/src/pages/home/installation/view.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from "react";
import { Text, View } from "react-native";
import { inject, useLocalObservable, observer } from "mobx-react";
import { runInAction } from "mobx";
import { Button } from "react-native-elements";
import { IPageViewProps } from "@/utils";
import { IUser } from "@/store";

const InstallationView = observer(({ user }: IPageViewProps<{ user: IUser }>) => {
  console.log(user);
  const a = useLocalObservable(() => ({
    b: "1",
    c: "1",
  }));
  return (
    <View>
      <Text>{a.b}</Text>
      <Button
        activeOpacity={1}
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
