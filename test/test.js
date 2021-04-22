let client = require('../lib');//
let public_key = "-----BEGIN PUBLIC KEY-----\nMIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCwtTfSwSwwcwxmA+wiSzaF8U+A\ntNCCEVCIf8stpmYOMiUKHyAqvq0N52tryO5iqo3JsSyEyK2ut8rVrWEqI+Qcsc9R\nJ3NCzXWgv/wLmsaHwQSeyNvC/L0F3zzyHUfn1j3f7n1/dcIJOMQu7f+UVzPyQ1Ii\nh4RmMdexfT1wxJeM7QIDAQAB\n-----END PUBLIC KEY-----";
let private_key = "-----BEGIN RSA PRIVATE KEY-----\nMIICXQIBAAKBgQCwtTfSwSwwcwxmA+wiSzaF8U+AtNCCEVCIf8stpmYOMiUKHyAq\nvq0N52tryO5iqo3JsSyEyK2ut8rVrWEqI+Qcsc9RJ3NCzXWgv/wLmsaHwQSeyNvC\n/L0F3zzyHUfn1j3f7n1/dcIJOMQu7f+UVzPyQ1Iih4RmMdexfT1wxJeM7QIDAQAB\nAoGAdU7ojzYEUumden/yG9YYjRTkdYoTvbUm5GcKB/UmXRg29KAzJ41LryZJbtWG\nQ+P7msDO0Bu1CX8j3XRrQ6FuBe5zo60fLnQXcP2BO2S987IW1pj7/MEAZ9ke22RX\n2HI15AHuxZgmcLwkXA728w3HmzZEqdS/GxStdvnqFz3Y/tUCQQDtuK/PJ9FkgVIB\nMcq5ASHltHLIt/1Rrsh/yFor5ciGZXw9V754D2cBMa60wPFSrpDSp2EXRR8UsOae\n1xrR+nG/AkEAvkuKF6EQsPV0W1jnDKKCJzQKspDpg6YXhG1S2bpPCB2w8gzufMbX\nIqXXPGYE3zxDxGwT1k60+jVek0nnHW5UUwJBAMcO5bjToNVGLMLvTM/KEPZmOc+1\nsZuafi3yOP+VNGrFxFkhhk7Gpvwq/B5DilAv+PlMS1LPAI207AiKGt1Fl8UCQHdA\ng4OXTgx3ZbmxFuoWFRZYSLPqmEwGFArLL/Z+CPT/Flo5vGK5gSyXXTDehgMXkyhO\nyoesv0FlnKUU1R7eez0CQQCcbzjh6n4waqohgn7r85ummAqxPGw0qv1F1YYY/cqJ\nRYLO4Y/WinuXr9jXKh9t89HfjaM+val66ob8DgM6t9If\n-----END RSA PRIVATE KEY-----\n";

// // private_key = private_key.replace(/(-----.*-----)|(\n)/g,"");
// // console.log(private_key)
// /**
//  * 直接调用签名工具签名
//  */
// let sign = client.makeSign({
//     "userName":"demo",
//     "age":10,
//     "serialVersionUID":"xx"
// },key)
// console.log(sign)//Lwe0cIjjzGB2FZvOgSGwBh7/omxKUrGHlqLDXuZ0pkTlxM+ga4sTcOgMJq55s9K9oE1YpAE+xGFfghZst7m7vOqgWEr94tCNx13Jcg4Iays+2LdhXM43O5YAXnifkuFenDpm+zjm34t9vJneogdXRItpJ73t5kDvgpUclMWr29U=


var url = "http://10.0.65.243:7002/nfs/third/api/venue/edit";
var body = {
    thirdVenueId:"111111",
    venueName: "场馆112",
    putStatus: true,
    coordinate: "121.576334,31.168569",
    venueType: 1,
    venuePhone: "1233333333",
    openTime: "10:10-10:20",
    deptName: "单位1",
    streetCode: "001100111",
    venueAddress: "西湖区西溪街道",
    projectIdList: [
        "1376424641195184130",
        "1376425629108965377"
    ],
    serviceList: [
        {venueServiceType:1,
        serviceUrl:"www.baidu.com"},
        {venueServiceType:2,
        serviceUrl:"www.baidu.com2"}
    ],
    imageList: ["www.baidu.com3", "www.baidu.com4"]
}

// 初始化请求客户端
client.initRequest({
    public_key:public_key,
    private_key:private_key
})//client获得request方法

/**
 * 工具请求方法
 * 该方法可帮助直接完成签名,无需手动调用
 */
client.request(url,body,(error,response) => {
    console.log(error,response)
})
