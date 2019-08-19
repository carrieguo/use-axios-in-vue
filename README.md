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
> * `post`  提交数据

数据格式1: `form-data`表单提交: 图片+文件上传； 

数据格式2: `application/json`

`Request Headers` 中 `Content-Type: multipart/form-data; boundary=----WebKitFormBoundaryO24RQrpc59b2ZIe3` boundary 相当于把传输的数据编码了
> * `put`  更新数据（所有数据 推送到后端）
> * `patch` 更新数据（只将修改的数据推送到后端）
> * `delete` 删除数据

## 并发请求
同时进行多个请求，并统一处理返回值
> * `axios.all()` 参数是多个axio请求组成的数组
> * `axios.spread()` 对多个请求完成后的返回数据进行分割处理,参数是回调函数,回调函数的参数对应多个请求的返回值

## 创建axios实例
后端接口有多个地址，超时时长不同。可以在实例中配置这些参数，用实例去请求。
`超时时长` 发起HTTP请求时，如果服务端长时间没有返回数据，接口就会报超时。一般由后端进行定义。
>* 1. axios全局配置
```js
//1.全局配置
axios.defaults.timeout = 1000;
```
>* 2. axios实例配置
```js
//2.实例配置
let instance = axios.create();
instance.defaults.timeout = 3000;
```
>* 3. axios请求配置
```js
let instance = axios.create({
    baseURL: 'http://localhost:8080'
});
//3.axios请求配置
instance.get('/public/test.json', {
timeout: 5000
}).then(res => {
    console.log(res);
});
```
`优先级`:  `全局配置`<`实例配置`<`请求配置`

## 拦截器

在请求或响应被处理前拦截。
`请求拦截器`
`响应拦截器`
`取消拦截器`
`请求错误和响应错误的区别`

## 错误处理

```js
//感觉教程里下面教程的描述是错的,因为我在404错误时，是被response捕获的
请求错误指发送请求没有到达后端，浏览器就会报错，一般以4开头，例如401 超时， 404 not found;
响应错误指到达后端，服务器返回错误信息，一般以5开头，例如500系统错误
```

## 取消请求
取消正在进行的http请求。
crm管理系统，新建，编辑，查询 数据量大 3-5s，可能会需要取消请求

## axios 实战
1. 安装vue组件库
2. 安装后端请求接口服务
3. 页面搭建

使用vue组件库`vant`, 是一个移动端的组件库.