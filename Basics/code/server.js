//creating a instance of http module
const http=require('http');
const fs=require('fs');
/**
 * for creating server we have a method inside http module is called createServer
 * It's takes a callback function and callback function has two parameter
 * one is request and another is response and It's object
 * 
 * When we send some request the callback function will start executing and the method will return a object
 */
let html=fs.readFileSync('./Templates/index.html','utf-8');
let server=http.createServer((request,response)=>{
    //now we want to send some response for that we have a method of response object
    //end(), it's send a response to server and end the server.
    // response.end("I am from server");
    // htmlresponse
    //first read the file and store the file element inside content and send as response
    // response.end(`<h1>I am from home</h1>`);
    response.end(html);
    console.log("Request recieved");
});

/**
 * for running the server or listening server we have a method called listen and listen and have three parameter port_number,host_name and a callback function and  the callback function is executed when the server start listening request.
 */
server.listen(3000,'127.0.0.1',()=>{
    console.log('Server start listening');
})