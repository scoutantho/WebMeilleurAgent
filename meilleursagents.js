var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');

var getDeal = function getdeal(JSONObject){
	//get adresse, find price/m2 en fonction de l'adresse 
	console.log(JSONObject.title);


}

module.exports.getDeal=getDeal;