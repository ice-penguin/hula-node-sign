let client = require('../lib');//
let key = "-----BEGIN RSA PRIVATE KEY-----\nMIICWwIBAAKBgQC1YoSpz9ynbAXdGHpTKNOqOY/PkeLycmSIWzt1RXpINg3YBgyV\nzbSk2j3j1YByb/7tkjSMBTod8nAfvyJ+ePFeVjM53EYtNQjr5n89x5bMcnGGO9Hw\nYX8JoGnv5biO4cO0Ou/ziUGtPn/F5EAW+MzUhlDhaU1wp1N+NFUdbzEq2QIDAQAB\nAoGABlilFZ/tM3pnFh5GIWS7SyhqbLPJAfyYoeC3StocdixV/anwhMlGucHdCnys\n2tQqUjucVQ3Vw7h4zdONLGmk4D4Do/Y8cIv9+T3RxPHJjKaQSzBjMC0GLtbBGCAG\n3AL+lJlphSCvr+k/tglv+sxG0OOtDQ0c9QaQ9/gFZnOtcIECQQDefE9b9uU7ao2V\n8FeokxOkEfLVPDh5+VnI7EYQUNH+VvgpQxWTmEcLz9dTGVy/xcpeiw7Amzce7alN\nElrjx6DRAkEA0LU+eKxOETqk5ZoW9YoXsOfPKnpqEJEzlr6nXSqNdLgjyYoyc4Fd\nKXaD0ZFu1Zh+Um1uYlwFHP8rw35TOgkriQJAbyAsC0UwjhLUkVWwkvSTVNnaLoOb\nueC/5cmN3Uxg9ua9oO5u8n+WzOGNLWZ3mxnR0JMoVS+xwnL2oxZN64OkYQJAV+30\nOu0FGvclH+Kyh5I9dvfC7TeT1hUGshzy8CqMXD90PGXv6X/4Gw7mbHWkR3MuzVVz\naxcvxE6xRnTDZbEVWQJACRWnkJrw4YMkRZ4gyDLn44my3SlWz7yOy+t0gJk2i7ud\nl6/RPHQf+ra++jwAWHZI3gWUyNH+Oa5PoQ4gfocVuw==\n-----END RSA PRIVATE KEY-----\n";

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