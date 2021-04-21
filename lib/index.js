const crypto = require("crypto");
const request = require('request');
const inVaild_key = ["serialVersionUID","sign","DEFAULT_INITIAL_CAPACITY"];
let private_key;

function initRequest (key){
    if(!key){
        return console.log("required key")
    }

    private_key = key;

    util.request = (url,body,cb) => {
            body = body || {};
            body.sign = makeSign(body,private_key);
            body.publicKey = private_key;
            request({
                url:url,
                method:"post",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify(body)
            },(error, response, body) => {
                cb(error,body)
            });
        }
}

// 过滤时需排除的参数：
//   1.去除值为null、空字符串的参数
//   2.排除因开发语言默认添加的参数信息
//         备注：健身平台默认排除参数 serialVersionUID、sign、DEFAULT_INITIAL_CAPACITY
//   3.请求参数为空时，默认为空字符串
function passKey (params){
    let obj = {};
    for (const key in params) {
        if(inVaild_key.indexOf(key) == -1) obj[key] = params[key];
    }
    return obj = sortKey(obj)
}

// 排序方式：
//   使用ASCII码进行正序排序
// 组装方式：
//   参数名和参数值之前使用=,参数之间使用&
function sortKey(info){
  let str = "";
  let keyArr = [];
  for (let key in info) {
    if(info[key]==""||!info[key]){
      continue;
    }
    keyArr.push(key);
  }
  keyArr.sort();
  for (let i = 0; i < keyArr.length; i++) {
    if(i>0){
      str += "&";
    }
    str += (keyArr[i]+"="+info[keyArr[i]])
  }
//   console.log("str",str)
  return  str;
};

//签名
function veriySign(params,key) {
	try {
	     let prestr = passKey(params)
	     let sign = crypto.createSign('RSA-SHA256');
	     sign.update(prestr);
	     sign = sign.sign(key, 'base64');
	     // console.log("key:"+key);
	    //  console.log("sign:"+sign);
	     return sign;
	 } catch(err) {
	     console.log('err', err)
	 }
}

function makeSign(params,key){
    return veriySign(params,key)
};

const util = {
    makeSign:makeSign,
    initRequest:initRequest
}

module.exports = util;