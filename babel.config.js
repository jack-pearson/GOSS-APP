/*
 * @Author: jack-pearson qize953463876@gmail.com
 * @Date: 2022-05-26 13:47:00
 * @LastEditors: jack-pearson qize953463876@gmail.com
 * @LastEditTime: 2022-06-08 15:15:13
 * @FilePath: \GOSS-APP\babel.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins: [
    [
      "babel-plugin-root-import",
      {
        rootPathSuffix: "./src",
        rootPathPrefix: "@/",
      },
    ],
  ],
};
