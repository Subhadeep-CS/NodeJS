// creating the instance of fs module
const fs=require('fs');

/**
 * To readfile asynchronously we have readFile function inside readfile we have a filepath and encoding logic and a callbac function and the callbac function is executed when it's finish the read content of the file
 */
fs.readFile('./files/a.txt','utf-8',(err,data)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log(data);
    }
});
console.log('reading file');