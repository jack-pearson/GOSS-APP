/*
 * @Author: jack-pearson qize953463876@gmail.com
 * @Date: 2022-07-01 17:37:05
 * @LastEditors: jack-pearson qize953463876@gmail.com
 * @LastEditTime: 2022-07-01 18:40:50
 * @FilePath: /GOSS-APP/src/store/user/index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { action, observable } from "mobx";
import { useLocalObservable } from "mobx-react";

const useUserStore = observable(
  {
    name: "John",
    age: 42,
    showAge: false,
    setAge(age) {
      this.age = age;
    },
  },
  {
    setAge: action,
  }
);

export default useUserStore;
