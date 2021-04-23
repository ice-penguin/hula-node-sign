const crypto = require("crypto");
const _ = require("lodash")

const request = require('request');
const inVaild_key = ["serialVersionUID","sign","DEFAULT_INITIAL_CAPACITY"];
let private_key;
let public_key;

function initRequest (keys){
    if(!keys){
        return console.log("required keys")
    }
    if(!keys.private_key){
        return console.log("required private_key")
    }
    if(!keys.public_key){
        return console.log("required public_key")
    }

    private_key = keys.private_key;
    public_key = keys.public_key.replace(/(-----.*-----)|(\n)/g,"");

    util.request = (url,body,cb) => {
            body = body || {};
            body.sign = makeSign(body,private_key);
            body.publicKey = public_key;
            // console.log(body)
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
    var addStr = info[keyArr[i]];
    if(typeof(addStr) == "object") {
        var isArray = addStr instanceof Array;
        if(isArray){
            //遍历数组对对象格式化
            var arr = [];
            for(let j = 0; j < addStr.length; j++){
                //如果是对象调用排序
                var obj = {}
                var keys = [];
                if(typeof(addStr[j]) == "object"){
                    for (let key in addStr[j]) {
                        if(addStr[j][key]==""||!addStr[j][key]){
                            continue;
                        }
                        keys.push(key);
                    }
                    keys.sort();
                    _.each(keys,(key) => {
                        obj[key] = addStr[j][key]
                    })
                    arr.push(obj)
                }else{
                    arr.push(addStr[j])
                }
            }
            addStr = JSON.stringify(arr);
        }else{
            addStr = sortKey(addStr);
        }
        // addStr = addStr instanceof Array ? JSON.stringify(addStr):sortKey(addStr);
    }
    str += (keyArr[i]+"="+addStr)
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