# 注意

1.如果本地启动跨域报错，可以在 host 里设置 <code>127.0.0.1  bi-sso.dev.thundersdata.com</code> 域名，使用这个域名访问不会报错。此时，访问 http://bi-sso.dev.thundersdata.com:3000/ 就可以访问微前端本地服务了。
2.如果是本地起服务，请切到对应的子应用下 `platform-sso` 的分支选择手动起服务，该分支下是经过微前端调整过后的兼容版本。

# micro-app 简介
micro-app是京东零售推出的一款微前端框架，它基于类WebComponent进行渲染，从组件化的思维实现微前端，旨在降低上手难度、提升工作效率。它是目前接入微前端成本最低的框架，并且提供了JS沙箱、样式隔离、元素隔离、预加载、资源地址补全、插件系统、数据通信等一系列完善的功能。

micro-app与技术栈无关，对前端框架没有限制，任何框架都可以作为基座应用嵌入任何类型的子应用。

# 如何使用
微前端分为基座应用（也可以叫做主应用）和子应用。

这里以一种比较常见的情况举例：基座应用使用vue框架，采用history路由，子应用使用react框架，采用hash路由，我们分别列出基座应用和子应用需要进行的修改，具体介绍micro-app的使用方式。

## 基座应用

**1、在入口文件引入**
```js
// main.js
import microApp from '@micro-zoe/micro-app'

microApp.start()
```

**2、在页面中嵌入微前端应用**
```html
<!-- my-page.vue -->
<template>
  <!-- 👇 name为应用名称，url为应用地址 -->
  <micro-app name='my-app' url='http://localhost:3000/'></micro-app>
</template>
```

## 子应用

**在webpack-dev-server的headers中设置跨域支持。**
```js
devServer: {
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
},
```

以上微前端基本渲染完成，效果如下：

更多详细配置可以查看[官网文档](https://micro-zoe.github.io/micro-app/docs.html#/zh-cn/start)

### 本地运行
1、安装依赖
```
yarn bootstrap
```

3、运行项目
```
yarn start # 访问 http://localhost:3000
```
# FAQ
[问题汇总](https://micro-zoe.github.io/micro-app/docs.html#/zh-cn/questions)
<details>

  <summary>micro-app的优势在哪里？</summary>
  上手简单、侵入性低，只需改动少量的代码即可接入微前端，同时提供丰富的功能。

  具体细节请参考文章：[micro-app介绍](https://github.com/micro-zoe/micro-app/issues/8)

</details>
<details>
  <summary>兼容性如何？</summary>
  micro-app依赖于CustomElements和Proxy两个较新的API。

  对于不支持CustomElements的浏览器，可以通过引入polyfill进行兼容，详情可参考：[webcomponents/polyfills](https://github.com/webcomponents/polyfills/tree/master/packages/custom-elements)。

  但是Proxy暂时没有做兼容，所以对于不支持Proxy的浏览器无法运行micro-app。

  浏览器兼容性可以查看：[Can I Use](https://caniuse.com/?search=Proxy)

  总体如下：
  - PC端：除了IE浏览器，其它浏览器基本兼容。
  - 移动端：ios10+、android5+
</details>

<details>
  <summary>子应用一定要支持跨域吗？</summary>
  是的！

  如果是开发环境，可以在webpack-dev-server中设置headers支持跨域。
  ```js
  devServer: {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  }
  ```

  如果是线上环境，可以通过[配置nginx](https://segmentfault.com/a/1190000012550346)支持跨域。
</details>

<details>
  <summary>支持vite吗?</summary>
  
  支持，详情请查看[适配vite](https://micro-zoe.github.io/micro-app/docs.html#/zh-cn/framework/vite)
</details>

<details>
  <summary>支持ssr吗?</summary>
  
  支持，详情请查看[nextjs](https://micro-zoe.github.io/micro-app/docs.html#/zh-cn/framework/nextjs)、[nuxtjs](https://micro-zoe.github.io/micro-app/docs.html#/zh-cn/framework/nuxtjs)
</details>

