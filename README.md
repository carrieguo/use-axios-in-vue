# use-axios-in-vue
本项目包含axios的基本数据请求，实例配置讲解以及在项目中的应用封装。

## Axios

> * `Axios`是一个基于Promise的HTTP库。类似于Ajax, 用于HTTP请求
> *  可以用于浏览器和node.js。既可以用于客户端，也可以用于服务端。
> *  支持promise API
> *  拦截请求和响应。可以在请求或响应前做一些操作。比如在请求前，给请求头加一些授权信息等。
> *  转换请求数据和响应数据。例如在请求时，一些敏感信息需要加密，接收时需要解密。
> *  取消请求。
> *  自动转换JSON数据。HTTP请求过程中，一般传输的都是字符串，需要json.parse来进行转换。Axios会自动进行转换。
> *  客户端支持防御XSRF攻击。

## Axios 兼容 ie8+

## 项目介绍
> * Axios基础用法（get, post, put等）
> * Axios 进阶用法（实例， 配置，拦截器，取消请求等）
> * Axios进一步封装，在项目中的实际应用

## Axios请求方法及别名（get方法）
> * `get` 获取数据
> * `post`  提交数据（`form-data`表单提交: 图片+文件上传； `application/json`）
`Request Headers` 中 `Content-Type: multipart/form-data; boundary=----WebKitFormBoundaryO24RQrpc59b2ZIe3` boundary 相当于把传输的数据编码了
> * `put`  更新数据（所有数据 推送到后端）
> * `patch` 更新数据（只将修改的数据推送到后端）
> * `delete` 删除数据
