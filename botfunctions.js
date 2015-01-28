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
       
       /*
       var LByLReader = require('line-by-line');
       var lr = new LByLReader('database.txt');

       //Insert code to look up database using string

       lr.on('error', function (err) {
	   console.log(err);
       });

       lr.on('line', function (line) {
	   var inputedline = line.split(",");
	   if (inputedline[0] == ConverString){
	       return inputedline[1];
	   }

       });

       lr.on('end', function() {
	   return "";
       });
       */
/*
       if(ConverString == "test"){
	   return 'success';
       } else {
	   return 'failed';
       }
*/
       var JSONStuff = JSON.parse(ConverString);
       return JSONStuff.txt;
   }

};
