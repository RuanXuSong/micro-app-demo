# 注意事项

1.如果本地启动跨域报错，可以在 host 里设置 <code>127.0.0.1  bi-sso.dev.thundersdata.com</code> 域名，使用这个域名访问不会报错。此时，访问 http://bi-sso.dev.thundersdata.com:3000/ 就可以访问微前端本地服务了。

2.如果是本地起服务，请切到对应的子应用下 `platform-sso` 的分支选择手动起服务，该分支下是经过微前端调整过后的兼容版本。

3.如果你在安装依赖或启动项目时发生错误，可以尝试单独进入每个项目执行操作。

4.本项目线上部署需要先在本地执行 <code>yarn build</code>。
