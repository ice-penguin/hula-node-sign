## node 工具包

> 使用 npm 安装

    npm install hula-node-sign

## 模块说明

该模块提供对接中使用的签名工具、请求工具调用

## 使用说明

### 引入模块

```
let client = require('hula-node-sign');
```

### 使用签名工具

```
let client = require('hula-node-sign');
let key = "";

/**
 * 直接调用签名工具签名
 */
let sign = client.makeSign({
    "userName":"demo",
    "age":10,
    "serialVersionUID":"xx"
},key)
console.log(sign)//Lwe0cIjjzGB2FZvOgSGwBh7/omxKUrGHlqLDXuZ0pkTlxM+ga4sTcOgMJq55s9K9oE1YpAE+xGFfghZst7m7vOqgWEr94tCNx13Jcg4Iays+2LdhXM43O5YAXnifkuFenDpm+zjm34t9vJneogdXRItpJ73t5kDvgpUclMWr29U=
```

## 直接使用请求工具

```
let client = require('hula-node-sign');
let public_Key = "";
let private_key = "";

// 初始化请求客户端
client.initRequest({
    public_Key:public_Key,
    private_key:private_key
})//client获得request方法

/**
 * 工具请求方法
 * 该方法可帮助直接完成签名,无需手动调用
 */
client.request(url,body,(error,response) => {
    console.log(error,response)
})
```
