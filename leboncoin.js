// from url, scrap webpage and return the real estate properties in json format
var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');


function parseData(_title,_prix,_ville,_bien,_nbPieces,_surface){
	return{
		title:_title,prix:_prix,ville:_ville,bien:_bien,nbPieces:_nbPieces,surface:_surface
	}
}


 var title,prix,ville,bien,nbPieces,surface;
var getJsonLBC = function getjsonLBC(url){
request(url, function(error, response, body) {
  if(error) {
    console.log("Error: " + error);
  }
  console.log("Status code: " + response.statusCode);

  var $ = cheerio.load(body);
 

$('section.adview').each(function(index){
  
     title = $(this).find("*[itemprop = 'name']").text().trim(); // get "h1 class ="no-border itemprop ="name"
     prix = $(this).find("[itemprop = 'price']").text().trim().replace(/[^0-9.,]+/, '');//^means not 0-9 //get h2 class = "item_price clearfix" itemprop="price" content = "370000"></h2>
     ville = $(this).find("[itemprop = 'address']").text().trim(); //<span class="value" itemprop="address">Créteil 94000</span>
  	
  	$('h2.clearfix').each(function(i){

  if(($(this).find('span.property').text())=="Type de bien")	 bien = $(this).find('span.value').text().trim();  //they have all of three span class = "value" and nothiung else
  if(($(this).find('span.property').text())=="Pièces")	 nbPieces = $(this).find('span.value').text().trim(); //pb sur l'accent
  if(($(this).find('span.property').text())=="Surface")	 surface = $(this).find('span.value').text().trim();
  	/*var bien = $(this).find("[itemprop=''").text().trim();
  	var bien = $(this).find("[itemprop=''").text().trim();
  	var bien = $(this).find("[itemprop=''").text().trim();*/

});



/*
    console.log("Title: " + title);
    console.log("Prix: " + prix);
    console.log("ville: " + ville);
        console.log("bien: " + bien);
            console.log("nbPieces: " + nbPieces);
                console.log("surface: " + surface);
*/
                var r = parseData(title,prix,ville,bien,nbPieces,surface);

return JSON.stringify(r); //manque le nb de pieces

    //fs.appendFileSync('reddit.txt', title + '\n' + score + '\n' + user + '\n');
  });
 

  });



//return json 

}

module.exports.getJsonLBC=getJsonLBC;