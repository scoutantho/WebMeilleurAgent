var fs = require('fs');
var path = require('path');
var leboncoin = require('./leboncoin');
var meilleursagents = require('./meilleursagents');
var http = require('http');
var https = require('https');
 var bl = require('bl');
 var url = require('url');
//var leboncoin = require('./leboncoin');

//get toute la page html
/*https.get("https://www.leboncoin.fr/ventes_immobilieres/1090422368.htm", function (response){

		response.pipe(bl( function(err,data){if(err)console.log(err);
			console.log(data.toString().length);
			console.log(data.toString());}   ))
}
			).on('error',console.error)
*/

leboncoin.getJsonLBC("https://www.leboncoin.fr/ventes_immobilieres/966498702.htm?ca=12_s", meilleursagents.getDeal);
