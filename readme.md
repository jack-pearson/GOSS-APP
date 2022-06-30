<!--
 * @Author: jack-pearson qize953463876@gmail.com
 * @Date: 2022-05-26 14:10:56
 * @LastEditors: jack-pearson qize953463876@gmail.com
 * @LastEditTime: 2022-06-30 16:21:22
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

## 问题

2022 年 06 月 30 日 16:09:09

1. 首页顶部个人这个不建议要. 换一种展现方式和内容吧.
2. 生产制造一览 中, 图片是有的么? 需要确认
3. 所有的子页面的状态栏和 title 颜色需要一致.
4. 生产制造详细 里面的备件申请单号, 做成列表吧, 别作成下拉了.不然交互有点奇怪
5. 知识库搜索需要单独做一个页面的.
6. 知识库 搜索和下面的颜色不匹配, 看起来很怪.
7. 生产制造详细 里面, 生产内容旁边的图片 是从哪来的.
