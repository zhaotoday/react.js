## 贴士
webpack 已升级至 2 版本，升级过程中踩了比较多的坑，以下会做简单分享。

## 介绍
基于 react+redux+webpack2 的单页应用项目模板，功能包括：调试、构建、单元测试、国际化等。

## 使用
### 下载源码
```
git clone https://github.com/zhaotoday/react.git
```
### 安装 npm 依赖包
```
npm install
```
### 启动项目
```
npm start
```
### 构建代码
```
npm run build
```

## 目录结构
- build             [webpack 调试与构建]
- src               [源码]
  └ app             [业务代码]
  └ components      [通用组件]
  └ i18n            [国际化]
  └ redux           [redux 数据流管理]
  └ routes          [路由配置]
  └ templates       [页面模板]
  └ themes          [全局样式]
  └ utils           [工具集合]
  └ entry.js        [入口文件]
- dist              [构建代码]
- test              [单元测试]

