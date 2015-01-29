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
       if(JSONStuff.text.indexOf("test") != -1){
	   return "It Works!";
       } else {
	   return "";
       }

   }
};
