## 1. 贴士
webpack 已升级至 webpack 2。

## 2. 介绍
基于 react+redux+webpack2 的单页应用项目模板，功能包括：调试、构建、单元测试、国际化等。

## 3. 使用
### 3.1. 下载源码
```
git clone https://github.com/zhaotoday/react.git
```
### 3.2. 安装 npm 依赖包
```
npm install
```
### 3.3. 启动项目
```
npm start
```
### 3.4. JS 代码规范校验
```
npm run eslint
```
### 3.5. 构建代码
```
npm run build
```

## 4. 目录结构
```
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
```

## 5. 业务模块规范
业务模块代码放在：src/app 文件夹下，下面以登录（login）模块为例。

```
- login             [login 模块]
  └ index.js        [login 的入口文件]
  └ theme           [login 的皮肤]
    └ styles        [login 的样式]
      └ index.scss
    └ images        [login 的图片]
  └ components      [login 的相关组件]
  └ utils           [login 的相关工具集合]
  └ i18n            [login 的国际化]
```
## 6. 通用组件规范
通用组件放在：src/components 文件夹下，规范和业务模块基本一致，下面以面板（panel）组件为例。
```
- panel             [panel 组件]
  └ index.js        [panel 的入口文件]
  └ theme           [panel 的皮肤]
    └ styles        [panel 的样式]
      └ index.scss
    └ images        [panel 的图片]
  └ components      [panel 的子组件]
  └ utils           [panel 的相关工具集合]
  └ i18n            [panel 的国际化]
  
```
