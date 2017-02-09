var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');
url="https://www.meilleursagents.com/prix-immobilier/hauts-de-seine-92/"

//var getDeal = function getdeal(JSONObject){
	//get adresse, find price/m2 en fonction de l'adresse 
	
request(url, function(error, response, body) {
  if(error) {
    console.log("Error: " + error);
  }
  console.log("Status code: " + response.statusCode);

  var $ = cheerio.load(body);
 

$('div.row ').each(function(index){ //medium-uncollapse hide-for-small


	var prix = $(this).find('div.small-4').text().replace(/[^0-9]/,'');


console.log(prix);//medium-2 medium-offset-0 columns prices-summary__cell--muted




});





});
//module.exports.getDeal=getDeal;