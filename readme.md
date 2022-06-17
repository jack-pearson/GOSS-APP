<!--
 * @Author: jack-pearson qize953463876@gmail.com
 * @Date: 2022-05-26 14:10:56
 * @LastEditors: jack-pearson qize953463876@gmail.com
 * @LastEditTime: 2022-06-17 14:10:22
 * @FilePath: \GOSS-APP\readme.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->

# 高斯 app 项目

## 使用技术

react-native + typescript

## 插件

@react-navigation/native
@react-navigation/stack
@react-navigation/bottom-tabs
react-native-screens
react-native-safe-area-context
redux
react-redux
redux-devtools
redux-logger
redux-thunk

babel-plugin-root-import // 路径别名
@react-native-community/async-storage // 本地缓存
react-native-gesture-handler // 手势库
jetifier // 不用这个会报错

react-native-elements // UI 库
react-native-vector-icons // 图标库

axios // 请求库
react-native-dotenv // env 环境

## 自定义图标

`android <https://www.fly63.com/article/detial/9842>`
`ios <https://www.jianshu.com/p/65c6e7bc15a5>`ttf 文件就从 android 中使用.

## 修改 app 名称

ios 再 info.plist 中修改

## 修改 app 图标

`根据图片一键生成对应格式 https://icon.wuruihong.com/`
ios 通过 xcode 修改.

## 启动屏幕

`https://www.cnblogs.com/zhengyan/p/15791391.html`
`https://www.jianshu.com/p/56562e5a9396`

## 安卓打包

`https://reactnative.cn/docs/signed-apk-android`

## 安卓设置 apk 安装时权限列表

`https://reactnative.dev/docs/permissionsandroid#permissions-that-require-prompting-the-user` 代码中还是要再这边获取
`https://blog.csdn.net/qq_28837549/article/details/114286332` 写在这里面
