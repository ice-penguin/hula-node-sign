let client = require('../lib');//
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

// 初始化请求客户端
client.initRequest(key)//client获得request方法

/**
 * 工具请求方法
 * 该方法可帮助直接完成签名,无需手动调用
 */
client.request(url,body,(error,response) => {
    console.log(error,response)
})