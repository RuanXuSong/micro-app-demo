# 注意事项

1.如果本地启动跨域报错，可以在 host 里设置 <code>127.0.0.1  bi-sso.dev.thundersdata.com</code> 域名，使用这个域名访问不会报错。此时，访问 http://bi-sso.dev.thundersdata.com:3000/ 就可以访问微前端本地服务了。

2.如果是本地起服务，请切到对应的子应用下 `platform-sso` 的分支选择手动起服务，该分支下是经过微前端调整过后的兼容版本。

3.如果你在安装依赖或启动项目时发生错误，可以尝试单独进入每个项目执行操作。

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

