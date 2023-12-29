
// ------------server-----------
// const http=require("http")
// http.createServer((req,res)=>{
//     res.write("its working")
//     res.end()
// }).listen(7707)


// ------fs module------
const fs=require("fs")
fs.writeFile("newFile.txt","done",(error)=>{
    if(error)throw error
})


