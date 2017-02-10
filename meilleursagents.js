var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');
url="https://www.meilleursagents.com/prix-immobilier/"

var getDeal = function getdeal(JSONObject){
	//get adresse, find price/m2 en fonction de l'adresse
	//JSONObject.prix ?
var a = JSON.parse(JSONObject);
console.log(a.ville);
console.log((a.ville).replace(' ','-'));


var ville = (a.ville).replace(' ','-');
url+=ville+"/";
console.log(url.toLowerCase());


request(url.toLowerCase(), function(error, response, body) {
  if(error) {
    console.log("Error: " + error);
  }


  var $ = cheerio.load(body);


$('div.row ').each(function(index){ //medium-uncollapse hide-for-small


	var prix = $(this).find('div.small-4.medium-2:not(.prices-summary__cell--header)').text().trim();


console.log(prix.replace(' ',''));//medium-2 medium-offset-0 columns prices-summary__cell--muted




});
});
}
module.exports.getDeal=getDeal;
