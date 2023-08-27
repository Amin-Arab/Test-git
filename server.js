
/*/onst http = require("http"); 


const  Server = http.createServer((req ,  res)=>{
    
    console.log (req.method);
    console.log(req.url);
    res.write("welcome amoooo");
    res.end();
});

Server.listen(4000 , () => {
    console.log("hi");
});*/

//==============================================================


const http = require("http");

const server = http.createServer((req, res) => {
    console.log(req.method);
    res.write("hiciii");
    res.end();
})


server.listen(4000 ,() => {
   console.log("start server 4000") 
})