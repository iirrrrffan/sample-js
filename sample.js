// ----------callback-----------

// function myfun(a,b,call) {
//     call(a+b)
// }
// function disply(sum){
//     console.log(sum);
// }
// myfun(10,20,disply)


//-----------promise---------

// let mywork=new Promise((resolve,reject)=>{
//     let success=true
//     if(success){
//         resolve ("its working")
//     }else{
//         reject("somthing problem")
//     }
// })

// mywork.then((msg)=>{
//     console.log(msg);
// })
// .catch((msg)=>{
//     console.error(msg); 
// })

 // ---------shift--------
// let a=["mehaboobaa","me","there","mehabooba"];
// a.shift();
// console.log(a);

let mywork=new Promise((resolve,reject)=>{
    let success=false
    if(success){
        resolve ("its working")
    }else{
        reject('somthing problem')
    }
})
mywork.then((msg)=>{
   console.log(msg)
})
.catch((msg)=>{
    console.error(msg)
})





