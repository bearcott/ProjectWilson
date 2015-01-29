var http = require('http');
var botrecive = require('./botlookup.js');
var botsend = require('./botsend.js');
var async = require('async');
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
	var stringreturn = "";
	async.series([
	    function(callback){	
		var result = botrecive.stringlookup(postData);
		
		//console.log('Data Sent: ' + stringreturn);
		callback(null, result);
	    }], function(err, result) {
		console.log(result);
		if(result != ""){
		    botsend.botresponder(result);
		}
	    });
	//console.log('POSTed: ' + postData);
	res.writeHead(200);
	//res.end(postHTML);

    });
}).listen(8080);

