var http = require("http");
var PORT1 = 7500;
var PORT2 = 7000;

function handleRequestGood(request, response) {
    console.log(request);
    response.end("Something Nice")
}

function handleRequestFunny(request, response) {
    console.log(request);
    response.end("Something Funny")
}

var server1 = http.createServer(handleRequestGood);
var server2 = http.createServer(handleRequestFunny);

server1.listen(PORT1, function() {
    console.log("Server is listening on http://localhost" + PORT1)
});

server1.listen(PORT2, function() {
    console.log("Server is listening on http://localhost" + PORT2)
});
