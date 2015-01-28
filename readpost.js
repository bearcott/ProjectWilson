var http = require('http');
var bottools = require('./botfunctions.js');

var postHTML = 
  '<html><head><title>Post Example</title></head>' +
  '<body>' +
  '<form method="post">' +
  'Input 1: <input name="input1"><br>' +
 //'Input 2: <input name="input2"><br>' +
  '<input type="submit">' +
  '</form>' +
  '</body></html>';

http.createServer(function (req, res) {
	var postData = "";
	req.on('data', function (chunk) {
		postData += chunk;
	});
	req.on('end' , function () {
	var stringreturn = bottools.stringlookup(postData);
	console.log('Data returned: ' + stringreturn);
	//console.log('POSTed: ' + postData);
	res.writeHead(200);
	//res.end(postHTML);
	});
}).listen(8080);

