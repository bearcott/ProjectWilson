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


	var JSONStuff = JSON.parse(postData);
	var LineByLineReader = require('line-by-line');
	var lr = new LineByLineReader('database.txt');
	var stringreturn = "";
	lr.on('error', function (err) {
	    console.log('error: ' + err);// 'err' contains error object
	});
	
	lr.on('line', function (line) {
	    var tocheck = line.split(",");
	    if(tocheck[0].toLowerCase().indexOf(JSONStuff.text.toLowerCase()) != -1){
		stringreturn = tocheck[1];
	    }
	});
	
	lr.on('end', function () {
	    // All lines are read, file is closed now.
	 //   console.log("sent: " + stringreturn);		    
	});
	if(stringreturn != ""){
	    botsend.botresponder(stringreturn);
		console.log('sent: ' + stringreturn);
	}
    });
    //console.log('POSTed: ' + postData);
    res.writeHead(200);
    //res.end(postHTML);
}).listen(8080);

