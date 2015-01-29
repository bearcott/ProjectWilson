module.exports = {
    botresponder: function(response){
	var HTTPS = require('https');
	var options, body, botReq;
	
	options = {
	    hostname: "api.groupme.com",
	    path: '/v3/bots/post',
	    method: 'POST'
	};

	//Bot ID hardcoded for now, pls change later
	body = {
	    "bot_id" : "ID HERE",
	    "text" : response
	};

	botReq = HTTPS.request(options, function(res){
	    if(res.statusCode == 202) {
		//Post was successful, yay!
	    } else {
		console.log('rejecting bad status code ' + res.statusCode);
	    }
	});
	botReq.on('error', function(err) {
	    console.log('Error posting mesasage ' + JSON.stringify(err));
	});
	botReq.on('timeout', function(err) {
	    console.log('timeout posting error' + JSON.stringify(err));
	});
	botReq.end(JSON.stringify(body));

    }
};
