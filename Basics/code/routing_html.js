//import http module
const http=require('http');
//for reading the file we import fs module
const fs=require('fs');
//to send a html response first read the file 
const html=fs.readFileSync('./Templates/index.html','utf-8');
//creating server
const server=http.createServer((request,response)=>{
    //handling the URL path
    let path=request.url;
    console.log(path);
    if(path==='/' || path.toLowerCase()==='/home')
    {
        /**
         * sending a cusstom response header for that we have a method writeHead of response object writeHead method 1st argument is status code and second argument is an object that contain header
         * 
         * Always pass the Header before sending the response
         */
        response.writeHead(200,{
            'Content-Type':'text/html',
            'my-header':'Hello World',
        })
        //sending the html response
        //now we replace the placeholder by using string replace method
        response.end(html.replace('{{%CONTENT%}}','You are on homepage'));
    }
    else if(path.toLowerCase()==='/products')
    {
        response.writeHead(200,{
            'Content-Type':'text/html',
            'my-header':'Hello World',
        })
        response.end(html.replace('{{%CONTENT%}}','You are on product'));
    }
    else if(path.toLowerCase()==='/about')
    {
        response.writeHead(200,{
            'Content-Type':'text/html',
            'my-header':'Hello World',
        })
        response.end(html.replace('{{%CONTENT%}}','You are on about'));
    }
    else if(path.toLowerCase()==='/contact')
    {
        response.writeHead(200,{
            'Content-Type':'text/html',
            'my-header':'Hello World',
        })
        response.end(html.replace('{{%CONTENT%}}','You are on contact'));
    }
    else{
        response.writeHead(500,{
            'Content-Type':'text/html',
            'my-header':'Content not found',
        })
        response.end(html.replace('{{%CONTENT%}}','Error 404 not found'));
    }
})

//listening server
server.listen(3000,'127.0.0.1',()=>{
    console.log("server start");
})