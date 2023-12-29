
// ------------server-----------
const http=require("http")
http.createServer((req,res)=>{
    res.write("its working")
    res.end()
}).listen(7707)





