const http = require("http")

http.createServer( function(req,res){

	res.write("on the way to become a fullstack engineer");
	res.end();



}
).listen(3000);

console.log("server started on port 3000");
