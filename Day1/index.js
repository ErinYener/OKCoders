var http = require('http');

const PORT=8080

function handleRequest(req,resp){
  resp.end('<h1>Welcome!');
}

var server = http.createServer(handleRequest);

//start server
server.listen(PORT,function(){
  //Creating callback
  console.log("Serve is running on port: %s", PORT)
});
