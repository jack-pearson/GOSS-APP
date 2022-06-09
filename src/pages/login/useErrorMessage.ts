/*
 * @Author: jack-pearson qize953463876@gmail.com
 * @Date: 2022-06-09 17:06:25
 * @LastEditors: jack-pearson qize953463876@gmail.com
 * @LastEditTime: 2022-06-09 17:44:00
 * @FilePath: \GOSS-APP\src\pages\login\useErrorMessage.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { useState } from "react";

export const useErrorMessage = (): [string, React.Dispatch<React.SetStateAction<string>>] => {
  const [errorMessage, setErrorMessage] = useState<string>("");
  return [errorMessage, setErrorMessage];
};
