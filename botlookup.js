/* Use to look up values in database when implemented
var mysql = require('mysql');
var connection = mysql.createConnection({
    host : 'localhost' ,
    user : 'BotUser' ,
    password : 'BotPass' 
});

connection.connect();
connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
    if(err) throw err;

    console.log('THe solutions is: ', rows[0].soultion);
}
connection.end();
*/

//Using a text file for now(Good enough for the demo hehehe)
module.exports = {
   stringlookup: function(ConverString){
       var JSONStuff = JSON.parse(ConverString);
       var LineByLineReader = require('line-by-line');
       var lr = new LineByLineReader('database.txt');
       var tosend = "";
       console.log("Imported shit");
       lr.on('error', function (err) {
	   console.log('error: ' + err);// 'err' contains error object
       });

       lr.on('line', function (line) {
	   var tocheck = line.split(",");
	   if(tocheck[0].toLowerCase().indexOf(JSONStuff.text.toLowerCase()) != -1){
		tosend = tocheck[1];
	   }
       });

       lr.on('end', function () {
	   // All lines are read, file is closed now.
	console.log("sent: " + tosend);	
	return tosend;
	
       });
      return tosend;
   }
};
