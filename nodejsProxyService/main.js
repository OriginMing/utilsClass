/* 
https://cloud.tencent.com/developer/article/1467377
*/
const http = require('http');
const url = require('url');
const querystring = require('querystring')
const server = http.createServer();
server.on('request',(req,res)=>{
    res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"})
      // 通过req的data事件和end事件接收客户端发送的数据
    // 并用Buffer.concat处理一下
    let postbody = [];
    //请求中的数据拿的方式
  /*    const {name,password} =  querystring.parse(url.parse(req.url).query)
    console.log(name); */
    // 拿到body中的数据
    let { connection, host, ...originHeaders } = req.headers;
        // 构造请求报文
        let options = {
            "method": req.method,
            "hostname": "www.baidu.com",
            "port": "80",
            "path": req.url,
            "headers": { originHeaders }
        }
    req.on("data", chunk => {
        postbody.push(chunk);
    })
    req.on('end',()=>{
     let postbodyBuffer = Buffer.concat(postbody);
     // 定义变量接收目标服务器返回的数据
     let responsebody=[]
     // 发送请求头
     let chunk1 
     let request = http.request(options, (response) => {
         response.on('data', (chunk) => {
             responsebody.push(chunk)
         })
         response.on("end", () => {
             // 处理目标服务器数据,并将其返回给客户端
             responsebodyBuffer = Buffer.concat(responsebody)
             res.end(chunk1);
         })
     })
     // 将接收到的客户端请求数据发送到目标服务器;
     request.write(postbodyBuffer)
     request.end();
     // request.end(postbodyBuffer);
    })
})
server.listen(8888,'localhost',()=>{
    console.log('启动成功');
})
