// extract the http module for creating server
const http=require('http');

//creating server
const server=http.createServer((request,response)=>{
    // console.log('server hitted');
    /***
     * For creating route we will have to check URL then we send the response according to URL
     * We handle handle the URL based on resource that we provided in URL
     * If i provide 127.0.0.1/Home, here the resource is /Home
     * 
     * For geting the resource we have a property of request object that's URL
     * Here we get the proper resource name now we handle that resource
     */
    let path=request.url;
    // console.log(path);
    if(path==='/' || path.toLowerCase()==="/home")
    {
        //we are on home page and send a responce
        response.end("We are on home page");
    }
    else if(path.toLowerCase()==="/about")
    {
        //we are on about page
        response.end("We are on about page");
    }
    // Now here if we provide wrong resource name in URL then it will still loading
    // and our system is on hang state to handle this we have to declare fallback route
    else{
        //fallback route
        response.end("404 not found");
    }
});


//listening the server
server.listen(3000,'127.0.0.1',()=>{
    console.log(`Server started`);
})