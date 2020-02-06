const request = require("request");
const cheerio = require("cheerio");
const mongoose = require("mongoose");
const config = require("./configuration.json");
const axios = require("axios");
mongoose.Promise = global.Promise;

    var event = mongoose.model('games', {

        gameStore: {
            type: String,
            required: true,
        },
        gameTitle: {
            type: String,
            required: true,
        },
        gamePrice: {
            type: String,
            required: true,
        },
        imageSrc: {
            type: String,
            required: true,
        },
        dataCategory: {
            type: String,
            required: true,
        },
        gameLink: {
            type: String,
            required: true,
        },
    });

    var eventList = [];


request('https://www.pccomponentes.com/juegos-ps4',function(error, response, html){

    if (!error && response.statusCode == 200) {

        var $ = cheerio.load(html);
        var blocks = $('#articleListContent');

        var juego = blocks.find('div.col-xs-6');
	    for (i = 0 ; i < juego.length;i++){
            var juegos = juego.find(`[data-loop=${i+1}]`);
            var title = juegos.attr('data-name');
            title = title.replace('PS4','');
            title = title.trimEnd();

            var price = juegos.attr("data-price");
            var src = juegos.find("div.tarjeta-articulo__foto>img").attr("src");
            src = src.split("//").join("");
            var category = juegos.attr("data-category");
            var link = juegos.find('header.tarjeta-articulo__nombre>h3>a').attr("href");
            link = `https://wwww.pccomponentes.com${link}`;

            var temp = new event({
                    gameStore: "PcComponentes",
                    gameTitle: title,
                    gamePrice: price,
                    imageSrc:  src,
                    dataCategory: category,
                    gameLink: link,
                });
                eventList.push(temp);
	    }
    }
})
request('https://www.pccomponentes.com/listado/ajax?page=1&order=relevance&gtmTitle=Juegos%20PS4&idFamilies%5B%5D=1473',function(error, response, html){

    if (!error && response.statusCode == 206) {
		
        var $ = cheerio.load(html);
        var blocks = $('div.row');

        var juego = blocks.find('div.col-xs-6');
	    for (i = 0 ; i < juego.length;i++){
            var juegos = juego.find(`[data-loop=${i+1}]`);
            var title = juegos.attr('data-name');
            title = title.replace('PS4','');
            title = title.trimEnd();

            var price = juegos.attr("data-price");
            var src = juegos.find("div.tarjeta-articulo__foto>img").attr("src");
            src = src.split("//").join("");
            var category = juegos.attr("data-category");
            var link = juegos.find('header.tarjeta-articulo__nombre>h3>a').attr("href");
            link = `https://wwww.pccomponentes.com${link}`;

            var temp = new event({
                    gameStore: "PcComponentes",
                    gameTitle: title,
                    gamePrice: price,
                    imageSrc:  src,
                    dataCategory: category,
                    gameLink: link,
                });
                eventList.push(temp);
	    }

    }
})

request('https://www.pccomponentes.com/listado/ajax?page=2&order=relevance&gtmTitle=Juegos%20PS4&idFamilies%5B%5D=1473',function(error, response, html){

    if (!error && response.statusCode == 206) {
		
        var $ = cheerio.load(html);
        var blocks = $('div.row');

        var juego = blocks.find('div.col-xs-6');
	    for (i = 0 ; i < juego.length;i++){
            var juegos = juego.find(`[data-loop=${i+1}]`);
            var title = juegos.attr('data-name');
            title = title.replace('PS4','');
            title = title.trimEnd();

            var price = juegos.attr("data-price");
            var src = juegos.find("div.tarjeta-articulo__foto>img").attr("src");
            src = src.split("//").join("");
            var category = juegos.attr("data-category");
            var link = juegos.find('header.tarjeta-articulo__nombre>h3>a').attr("href");
            link = `https://wwww.pccomponentes.com${link}`;

            var temp = new event({
                    gameStore: "PcComponentes",
                    gameTitle: title,
                    gamePrice: price,
                    imageSrc:  src,
                    dataCategory: category,
                    gameLink: link,
                });
                eventList.push(temp);
	    }
    }
})
request('https://www.pccomponentes.com/juegos-xbox-one',function(error, response, html){

    if (!error && response.statusCode == 200) {

        var $ = cheerio.load(html);
        var blocks = $('#articleListContent');

        var juego = blocks.find('div.col-xs-6');
	    for (i = 0 ; i < juego.length;i++){
            var juegos = juego.find(`[data-loop=${i+1}]`);
            var title = juegos.attr('data-name');
            title = title.replace('Xbox One','');
            title = title.trimEnd();

            var price = juegos.attr("data-price");
            var src = juegos.find("div.tarjeta-articulo__foto>img").attr("src");
            src = src.split("//").join("");
            var category = juegos.attr("data-category");
            var link = juegos.find('header.tarjeta-articulo__nombre>h3>a').attr("href");
            link = `https://wwww.pccomponentes.com${link}`;

            var temp = new event({
                    gameStore: "PcComponentes",
                    gameTitle: title,
                    gamePrice: price,
                    imageSrc:  src,
                    dataCategory: category,
                    gameLink: link,
                });
                eventList.push(temp);
	    }
    }
})
request('https://www.pccomponentes.com/listado/ajax?page=1&order=relevance&gtmTitle=Juegos%20Xbox%20One&idFamilies%5B%5D=1470',function(error, response, html){

    if (!error && response.statusCode == 206) {
		
        var $ = cheerio.load(html);
        var blocks = $('div.row');

        var juego = blocks.find('div.col-xs-6');
	    for (i = 0 ; i < juego.length;i++){
            var juegos = juego.find(`[data-loop=${i+1}]`);
            var title = juegos.attr('data-name');
            title = title.replace('Xbox One','');
            title = title.trimEnd();

            var price = juegos.attr("data-price");
            var src = juegos.find("div.tarjeta-articulo__foto>img").attr("src");
            src = src.split("//").join("");
            var category = juegos.attr("data-category");
            var link = juegos.find('header.tarjeta-articulo__nombre>h3>a').attr("href");
            link = `https://wwww.pccomponentes.com${link}`;

            var temp = new event({
                    gameStore: "PcComponentes",
                    gameTitle: title,
                    gamePrice: price,
                    imageSrc:  src,
                    dataCategory: category,
                    gameLink: link,
                });
                eventList.push(temp);
	    }

    }
})

request('https://www.pccomponentes.com/listado/ajax?page=2&order=relevance&gtmTitle=Juegos%20Xbox%20One&idFamilies%5B%5D=1470',function(error, response, html){

    if (!error && response.statusCode == 206) {
		
        var $ = cheerio.load(html);
        var blocks = $('div.row');

        var juego = blocks.find('div.col-xs-6');
	    for (i = 0 ; i < juego.length;i++){
            var juegos = juego.find(`[data-loop=${i+1}]`);
            var title = juegos.attr('data-name');
            title = title.replace('Xbox One','');
            title = title.trimEnd();

            var price = juegos.attr("data-price");
            var src = juegos.find("div.tarjeta-articulo__foto>img").attr("src");
            src = src.split("//").join("");
            var category = juegos.attr("data-category");
            var link = juegos.find('header.tarjeta-articulo__nombre>h3>a').attr("href");
            link = `https://wwww.pccomponentes.com${link}`;

            var temp = new event({
                    gameStore: "PcComponentes",
                    gameTitle: title,
                    gamePrice: price,
                    imageSrc:  src,
                    dataCategory: category,
                    gameLink: link,
                });
                eventList.push(temp);
	    }

    }
})

request('https://www.pccomponentes.com/juegos-nintendo-switch',function(error, response, html){

    if (!error && response.statusCode == 200) {

        var $ = cheerio.load(html);
        var blocks = $('#articleListContent');

        var juego = blocks.find('div.col-xs-6');
	    for (i = 0 ; i < juego.length;i++){
            var juegos = juego.find(`[data-loop=${i+1}]`);
            var title = juegos.attr('data-name');
            title = title.replace('Nintendo Switch','');
            title = title.replace('Nintendo eShop','');
            title = title.trimEnd();

            var price = juegos.attr("data-price");
            var src = juegos.find("div.tarjeta-articulo__foto>img").attr("src");
            src = src.split("//").join("");
            var category = juegos.attr("data-category");
            var link = juegos.find('header.tarjeta-articulo__nombre>h3>a').attr("href");
            link = `https://wwww.pccomponentes.com${link}`;

            var temp = new event({
                    gameStore: "PcComponentes",
                    gameTitle: title,
                    gamePrice: price,
                    imageSrc:  src,
                    dataCategory: category,
                    gameLink: link,
                });
                eventList.push(temp);
	    }
    }
})
request('https://www.pccomponentes.com/listado/ajax?page=1&order=relevance&gtmTitle=Juegos%20Nintendo%20Switch&idFamilies%5B%5D=1597',function(error, response, html){

    if (!error && response.statusCode == 206) {
		
        var $ = cheerio.load(html);
        var blocks = $('div.row');

        var juego = blocks.find('div.col-xs-6');
	    for (i = 0 ; i < juego.length;i++){
            var juegos = juego.find(`[data-loop=${i+1}]`);
            var title = juegos.attr('data-name');
            title = title.replace('Nintendo Switch','');
            title = title.replace('Nintendo eShop','');            
            title = title.trimEnd();

            var price = juegos.attr("data-price");
            var src = juegos.find("div.tarjeta-articulo__foto>img").attr("src");
            src = src.split("//").join("");
            var category = juegos.attr("data-category");
            var link = juegos.find('header.tarjeta-articulo__nombre>h3>a').attr("href");
            link = `https://wwww.pccomponentes.com${link}`;

            var temp = new event({
                    gameStore: "PcComponentes",
                    gameTitle: title,
                    gamePrice: price,
                    imageSrc:  src,
                    dataCategory: category,
                    gameLink: link,
                });
                eventList.push(temp);
	    }

    }
})

request('https://www.pccomponentes.com/listado/ajax?page=2&order=relevance&gtmTitle=Juegos%20Nintendo%20Switch&idFamilies%5B%5D=1597',function(error, response, html){

    if (!error && response.statusCode == 206) {
		
        var $ = cheerio.load(html);
        var blocks = $('div.row');

        var juego = blocks.find('div.col-xs-6');
	    for (i = 0 ; i < juego.length;i++){
            var juegos = juego.find(`[data-loop=${i+1}]`);
            var title = juegos.attr('data-name');
            title = title.replace('Nintendo Switch','');
            title = title.replace('Nintendo eShop','');
            title = title.trimEnd();

            var price = juegos.attr("data-price");
            var src = juegos.find("div.tarjeta-articulo__foto>img").attr("src");
            src = src.split("//").join("");
            var category = juegos.attr("data-category");
            var link = juegos.find('header.tarjeta-articulo__nombre>h3>a').attr("href");
            link = `https://wwww.pccomponentes.com${link}`;

            var temp = new event({
                    gameStore: "PcComponentes",
                    gameTitle: title,
                    gamePrice: price,
                    imageSrc:  src,
                    dataCategory: category,
                    gameLink: link,
                });
                eventList.push(temp);
	    }

    }
})


///////Segunda pagina -Media Markt


request('https://bit.ly/2HcaZ5H',function(error, response, html){

    if (!error && response.statusCode == 200) {

        var $ = cheerio.load(html);
        var blocks = $('ul.products-list');

	$('ul.products-list').each((i, ul) => {
  		const children = $(ul).find('div.product-wrapper');
		children.each((i,div) => {
			var link = $(div).find('[class="photo clickable"]');
			linkk = link.attr("data-clickable-href");
			enlace = `https://www.mediamarkt.es${linkk}`;

			var src = link.find('img');
			source = src.attr("data-original");
			src = source.split("//").join("");
			var title = link.find('img');
			var tit = title.attr("alt");
			title = tit.replace('PS4','');
			title = title.replace('Juego','');
			title = title.replace('-','');
			title = title.trimStart();

			var price = $(div).find('[class="price small"]').text();
			
			var temp = new event({
                    		gameStore: "MediaMarkt",
                    		gameTitle: title,
                    		gamePrice: price,
                    		imageSrc:  src,
                		dataCategory: "Juegos PS4",
        	        	gameLink: enlace,
	                });
			eventList.push(temp);
		})
	});

    }
})

request('https://bit.ly/2Usnh1v',function(error, response, html){

    if (!error && response.statusCode == 200) {
        var $ = cheerio.load(html);
        var blocks = $('ul.products-list');

	$('ul.products-list').each((i, ul) => {
  		const children = $(ul).find('div.product-wrapper');
		children.each((i,div) => {
			var link = $(div).find('[class="photo clickable"]');
			linkk = link.attr("data-clickable-href");
			enlace = `https://www.mediamarkt.es${linkk}`;

			var src = link.find('img');
			source = src.attr("data-original");
			src = source.split("//").join("");
			var title = link.find('img');
			var tit = title.attr("alt");
			title = tit.replace('PS4','');
			title = title.trimStart();

			var price = $(div).find('[class="price small"]').text();
			
			var temp = new event({
                    		gameStore: "MediaMarkt",
                    		gameTitle: title,
                    		gamePrice: price,
                    		imageSrc:  src,
                		dataCategory: "Juegos PS4",
        	        	gameLink: enlace,
	                });
			eventList.push(temp);
		})
	});
    }
})

request('https://bit.ly/2Uvs0iN',function(error, response, html){

    if (!error && response.statusCode == 200) {
        var $ = cheerio.load(html);
        var blocks = $('ul.products-list');

	$('ul.products-list').each((i, ul) => {
  		const children = $(ul).find('div.product-wrapper');
		children.each((i,div) => {
			var link = $(div).find('[class="photo clickable"]');
			linkk = link.attr("data-clickable-href");
			enlace = `https://www.mediamarkt.es${linkk}`;

			var src = link.find('img');
			source = src.attr("data-original");
			src = source.split("//").join("");
			var title = link.find('img');
			var tit = title.attr("alt");
			title = tit.replace('PS4','');
			title = title.trimStart();

			var price = $(div).find('[class="price small"]').text();
			
			var temp = new event({
                    		gameStore: "MediaMarkt",
                    		gameTitle: title,
                    		gamePrice: price,
                    		imageSrc:  src,
                		dataCategory: "Juegos PS4",
        	        	gameLink: enlace,
	                });
			eventList.push(temp);
		})
	});
    }
})

request('https://www.mediamarkt.es/es/search.html?searchParams=%2FSearch.ff%3Fquery%3Dvideojuegos%2Bps4%26filterTabbedCategory%3Donlineshop%26filteravailability%3D1%26filterCategoriesROOT%3DEntretenimiento%2By%2Bdeporte%25C2%25A7MediaESesc701118%26filterCategoriesROOT%252FEntretenimiento%2By%2Bdeporte%25C2%25A7MediaESesc701118%3DConsolas%2By%2Bvideojuegos%25C2%25A7MediaESesc701147%26filterCategoriesROOT%252FEntretenimiento%2By%2Bdeporte%25C2%25A7MediaESesc701118%252FConsolas%2By%2Bvideojuegos%25C2%25A7MediaESesc701147%3DJuegos%25C2%25A7MediaESesc701342%26filterCategoriesROOT%252FEntretenimiento%2By%2Bdeporte%25C2%25A7MediaESesc701118%252FConsolas%2By%2Bvideojuegos%25C2%25A7MediaESesc701147%252FJuegos%25C2%25A7MediaESesc701342%3DJuegos%2BPS4%25C2%25A7MediaESesc702297%26channel%3Dmmeses%26productsPerPage%3D20%26followSearch%3D9535&searchProfile=onlineshop&query=videojuegos+ps4&sort=&page=5&sourceRef=INVALID',function(error, response, html){

	
    if (!error && response.statusCode == 200) {
        var $ = cheerio.load(html);
        var blocks = $('ul.products-list');

	$('ul.products-list').each((i, ul) => {
  		const children = $(ul).find('div.product-wrapper');
		children.each((i,div) => {
			var link = $(div).find('[class="photo clickable"]');
			linkk = link.attr("data-clickable-href");
			enlace = `https://www.mediamarkt.es${linkk}`;

			var src = link.find('img');
			source = src.attr("data-original");
			src = source.split("//").join("");
			var title = link.find('img');
			var tit = title.attr("alt");
			title = tit.replace('PS4','');
			title = title.trimStart();

			var price = $(div).find('[class="price small"]').text();
			
			var temp = new event({
                    		gameStore: "MediaMarkt",
                    		gameTitle: title,
                    		gamePrice: price,
                    		imageSrc:  src,
                		dataCategory: "Juegos PS4",
        	        	gameLink: enlace,
	                });
			eventList.push(temp);
		})
	});
    }
})


// MediaMarkt xbox one

request('https://bit.ly/2S6QMV8',function(error, response, html){

    if (!error && response.statusCode == 200) {

        var $ = cheerio.load(html);
        var blocks = $('ul.products-list');

	$('ul.products-list').each((i, ul) => {
  		const children = $(ul).find('div.product-wrapper');
		children.each((i,div) => {
			var link = $(div).find('[class="photo clickable"]');
			linkk = link.attr("data-clickable-href");
			enlace = `https://www.mediamarkt.es${linkk}`;

			var src = link.find('img');
			source = src.attr("data-original");
			src = source.split("//").join("");
			var title = link.find('img');
			var tit = title.attr("alt");
			title = tit.replace('Xbox One','');
			title = title.replace('Juego','');
			title = title.replace('-','');
			title = title.trimStart();

			var price = $(div).find('[class="price small"]').text();
			
			var temp = new event({
                    		gameStore: "MediaMarkt",
                    		gameTitle: title,
                    		gamePrice: price,
                    		imageSrc:  src,
                		dataCategory: "Juegos Xbox One",
        	        	gameLink: enlace,
	                });
			eventList.push(temp);
		})
	});

    }
})

request('https://bit.ly/373LQ7t',function(error, response, html){

    if (!error && response.statusCode == 200) {
        var $ = cheerio.load(html);
        var blocks = $('ul.products-list');

	$('ul.products-list').each((i, ul) => {
  		const children = $(ul).find('div.product-wrapper');
		children.each((i,div) => {
			var link = $(div).find('[class="photo clickable"]');
			linkk = link.attr("data-clickable-href");
			enlace = `https://www.mediamarkt.es${linkk}`;

			var src = link.find('img');
			source = src.attr("data-original");
			src = source.split("//").join("");
			var title = link.find('img');
			var tit = title.attr("alt");
			title = tit.replace('Xbox One','');
			title = title.replace('Juego','');
			title = title.replace('-','');
			title = title.trimStart();

			var price = $(div).find('[class="price small"]').text();
			
			var temp = new event({
                    		gameStore: "MediaMarkt",
                    		gameTitle: title,
                    		gamePrice: price,
                    		imageSrc:  src,
                		dataCategory: "Juegos Xbox One",
        	        	gameLink: enlace,
	                });
			eventList.push(temp);
		})
	});
    }
})

request('https://bit.ly/2S2TOJK',function(error, response, html){

    if (!error && response.statusCode == 200) {
        var $ = cheerio.load(html);
        var blocks = $('ul.products-list');

	$('ul.products-list').each((i, ul) => {
  		const children = $(ul).find('div.product-wrapper');
		children.each((i,div) => {
			var link = $(div).find('[class="photo clickable"]');
			linkk = link.attr("data-clickable-href");
			enlace = `https://www.mediamarkt.es${linkk}`;

			var src = link.find('img');
			source = src.attr("data-original");
			src = source.split("//").join("");
			var title = link.find('img');
			var tit = title.attr("alt");
			title = tit.replace('Xbox One','');
			title = title.replace('Juego','');
			title = title.replace('-','');
			title = title.trimStart();

			var price = $(div).find('[class="price small"]').text();
			
			var temp = new event({
                    		gameStore: "MediaMarkt",
                    		gameTitle: title,
                    		gamePrice: price,
                    		imageSrc:  src,
                		dataCategory: "Juegos Xbox One",
        	        	gameLink: enlace,
	                });
			eventList.push(temp);
		})
	});
    }
})

request('https://bit.ly/39c65Bj',function(error, response, html){

	
    if (!error && response.statusCode == 200) {
        var $ = cheerio.load(html);
        var blocks = $('ul.products-list');

	$('ul.products-list').each((i, ul) => {
  		const children = $(ul).find('div.product-wrapper');
		children.each((i,div) => {
			var link = $(div).find('[class="photo clickable"]');
			linkk = link.attr("data-clickable-href");
			enlace = `https://www.mediamarkt.es${linkk}`;

			var src = link.find('img');
			source = src.attr("data-original");
			src = source.split("//").join("");
			var title = link.find('img');
			var tit = title.attr("alt");
			title = tit.replace('Xbox One','');
			title = title.replace('Juego','');
			title = title.replace('-','');
			title = title.trimStart();

			var price = $(div).find('[class="price small"]').text();
			
			var temp = new event({
                    		gameStore: "MediaMarkt",
                    		gameTitle: title,
                    		gamePrice: price,
                    		imageSrc:  src,
                		dataCategory: "Juegos Xbox One",
        	        	gameLink: enlace,
	                });
			eventList.push(temp);
		})
	});

    }
})

// Mediamarkt - nintendo switch

request('https://bit.ly/385DUEa',function(error, response, html){

    if (!error && response.statusCode == 200) {

        var $ = cheerio.load(html);
        var blocks = $('ul.products-list');

	$('ul.products-list').each((i, ul) => {
  		const children = $(ul).find('div.product-wrapper');
		children.each((i,div) => {
			var link = $(div).find('[class="photo clickable"]');
			linkk = link.attr("data-clickable-href");
			enlace = `https://www.mediamarkt.es${linkk}`;

			var src = link.find('img');
			source = src.attr("data-original");
			src = source.split("//").join("");
			var title = link.find('img');
			var tit = title.attr("alt");
			title = tit.replace('Nintendo Switch','');
			title = title.replace('Juego','');
			title = title.replace('-','');
			title = title.trimStart();

			var price = $(div).find('[class="price small"]').text();
            
            
            if(price == '')
                price = '-';
            
			var temp = new event({
                    		gameStore: "MediaMarkt",
                    		gameTitle: title,
                    		gamePrice: price,
                    		imageSrc:  src,
                		dataCategory: "Juegos Nintendo Switch",
        	        	gameLink: enlace,
	                });
			eventList.push(temp);
		})
	});

    }
})

request('https://bit.ly/2Uw3gqX',function(error, response, html){

    if (!error && response.statusCode == 200) {
        var $ = cheerio.load(html);
        var blocks = $('ul.products-list');

	$('ul.products-list').each((i, ul) => {
  		const children = $(ul).find('div.product-wrapper');
		children.each((i,div) => {
			var link = $(div).find('[class="photo clickable"]');
			linkk = link.attr("data-clickable-href");
			enlace = `https://www.mediamarkt.es${linkk}`;

			var src = link.find('img');
			source = src.attr("data-original");
			src = source.split("//").join("");
			var title = link.find('img');
			var tit = title.attr("alt");
			title = tit.replace('Nintendo Switch','');
			title = title.replace('Juego','');
			title = title.replace('-','');
			title = title.trimStart();

			var price = $(div).find('[class="price small"]').text();
			
			var temp = new event({
                    		gameStore: "MediaMarkt",
                    		gameTitle: title,
                    		gamePrice: price,
                    		imageSrc:  src,
                		dataCategory: "Juegos Nintendo Switch",
        	        	gameLink: enlace,
	                });
			eventList.push(temp);
		})
	});
    }
})

request('https://bit.ly/386rmMG',function(error, response, html){

    if (!error && response.statusCode == 200) {
        var $ = cheerio.load(html);
        var blocks = $('ul.products-list');

	$('ul.products-list').each((i, ul) => {
  		const children = $(ul).find('div.product-wrapper');
		children.each((i,div) => {
			var link = $(div).find('[class="photo clickable"]');
			linkk = link.attr("data-clickable-href");
			enlace = `https://www.mediamarkt.es${linkk}`;

			var src = link.find('img');
			source = src.attr("data-original");
			src = source.split("//").join("");
			var title = link.find('img');
			var tit = title.attr("alt");
			title = tit.replace('Nintendo Switch','');
			title = title.replace('Juego','');
			title = title.replace('-','');
			title = title.trimStart();

			var price = $(div).find('[class="price small"]').text();
			
			var temp = new event({
                    		gameStore: "MediaMarkt",
                    		gameTitle: title,
                    		gamePrice: price,
                    		imageSrc:  src,
                		dataCategory: "Juegos Nintendo Switch",
        	        	gameLink: enlace,
	                });
			eventList.push(temp);
		})
	});
    }
})

request('https://bit.ly/2OwHkIr',function(error, response, html){

	
    if (!error && response.statusCode == 200) {
        var $ = cheerio.load(html);
        var blocks = $('ul.products-list');

	$('ul.products-list').each((i, ul) => {
  		const children = $(ul).find('div.product-wrapper');
		children.each((i,div) => {
			var link = $(div).find('[class="photo clickable"]');
			linkk = link.attr("data-clickable-href");
			enlace = `https://www.mediamarkt.es${linkk}`;

			var src = link.find('img');
			source = src.attr("data-original");
			src = source.split("//").join("");
			var title = link.find('img');
			var tit = title.attr("alt");
			title = tit.replace('Nintendo Switch','');
			title = title.replace('Juego','');
			title = title.replace('-','');
			title = title.trimStart();

			var price = $(div).find('[class="price small"]').text();
			
			var temp = new event({
                    		gameStore: "MediaMarkt",
                    		gameTitle: title,
                    		gamePrice: price,
                    		imageSrc:  src,
                		dataCategory: "Juegos Nintendo Switch",
        	        	gameLink: enlace,
	                });
			eventList.push(temp);
		})
	});

    }
})


// Corte Ingles - ps4

request('https://www.elcorteingles.es/videojuegos/ps4/?f=type_description::Videojuegos',function(error, response, html){

    if (!error && response.statusCode == 200) {

        var $ = cheerio.load(html);
        var blocks = $('ul.product-list');

	$('ul.product-list').each((i, ul) => {
  		const children = $(ul).find('div.product-preview');
		
		children.each((i,div) => {
			var link = $(div).find('[class="event"]');
			linkk = link.attr("href");
			enlace = `https://elcorteingles.es${linkk}`;
			

			var src = link.find('img');
			source = src.attr("src");
			src = source.split("//").join("");

			var title = link.find('img');
			var tit = title.attr("title");
			title = tit.replace('PS4','');
			title = title.trimStart();

			var price = $(div).find('[class="product-price "]');
			//console.log(price.text());
			price = price.find('[class="current   sale"]').text();

			if(price == '')
				price = $(div).find('[class="product-price "]').text();

			var temp = new event({
                    		gameStore: "ElCorteIngles",
                    		gameTitle: title,
                    		gamePrice: price,
                    		imageSrc:  src,
                		dataCategory: "Juegos PS4",
        	        	gameLink: enlace,
	                });
			eventList.push(temp);
		})
	});
    }
})

request('https://www.elcorteingles.es/videojuegos/ps4/2/?f=type_description::Videojuegos',function(error, response, html){

    if (!error && response.statusCode == 200) {

        var $ = cheerio.load(html);
        var blocks = $('ul.product-list');

	$('ul.product-list').each((i, ul) => {
  		const children = $(ul).find('div.product-preview');
		
		children.each((i,div) => {
			var link = $(div).find('[class="event"]');
			linkk = link.attr("href");
			enlace = `https://elcorteingles.es${linkk}`;
			

			var src = link.find('img');
			source = src.attr("src");
			src = source.split("//").join("");

			var title = link.find('img');
			var tit = title.attr("title");
			title = tit.replace('PS4','');
			title = title.trimStart();

			var price = $(div).find('[class="product-price "]');
			//console.log(price.text());
			price = price.find('[class="current   sale"]').text();

			if(price == '')
				price = $(div).find('[class="product-price "]').text();

			var temp = new event({
                    		gameStore: "ElCorteIngles",
                    		gameTitle: title,
                    		gamePrice: price,
                    		imageSrc:  src,
                		dataCategory: "Juegos PS4",
        	        	gameLink: enlace,
	                });
			eventList.push(temp);
		})
	});
    }
})

request('https://www.elcorteingles.es/videojuegos/ps4/3/?f=type_description::Videojuegos',function(error, response, html){

    if (!error && response.statusCode == 200) {

        var $ = cheerio.load(html);
        var blocks = $('ul.product-list');

	$('ul.product-list').each((i, ul) => {
  		const children = $(ul).find('div.product-preview');
		
		children.each((i,div) => {
			var link = $(div).find('[class="event"]');
			linkk = link.attr("href");
			enlace = `https://elcorteingles.es${linkk}`;
			

			var src = link.find('img');
			source = src.attr("src");
			src = source.split("//").join("");

			var title = link.find('img');
			var tit = title.attr("title");
			title = tit.replace('PS4','');
			title = title.trimStart();

			var price = $(div).find('[class="product-price "]');
			//console.log(price.text());
			price = price.find('[class="current   sale"]').text();

			if(price == '')
				price = $(div).find('[class="product-price "]').text();

			var temp = new event({
                    		gameStore: "ElCorteIngles",
                    		gameTitle: title,
                    		gamePrice: price,
                    		imageSrc:  src,
                		dataCategory: "Juegos PS4",
        	        	gameLink: enlace,
	                });
			eventList.push(temp);
		})
	});
    }
})

// Elcorteingles - xbox one

request('https://www.elcorteingles.es/videojuegos/xbox-one/juegos/',function(error, response, html){

    if (!error && response.statusCode == 200) {

        var $ = cheerio.load(html);
        var blocks = $('ul.product-list');

	$('ul.product-list').each((i, ul) => {
  		const children = $(ul).find('div.product-preview');
		
		children.each((i,div) => {
			var link = $(div).find('[class="event"]');
			linkk = link.attr("href");
			enlace = `https://elcorteingles.es${linkk}`;
			

			var src = link.find('img');
			source = src.attr("src");
			src = source.split("//").join("");

			var title = link.find('img');
			var tit = title.attr("title");
			title = tit.replace('Xbox One','');
			title = title.trimStart();

			var price = $(div).find('[class="product-price "]');
			//console.log(price.text());
			price = price.find('[class="current   sale"]').text();

			if(price == '')
				price = $(div).find('[class="product-price "]').text();

			var temp = new event({
                    		gameStore: "ElCorteIngles",
                    		gameTitle: title,
                    		gamePrice: price,
                    		imageSrc:  src,
                		dataCategory: "Juegos Xbox One",
        	        	gameLink: enlace,
	                });
			eventList.push(temp);
		})
	});
    }
})

request('https://www.elcorteingles.es/videojuegos/xbox-one/juegos/2/',function(error, response, html){

    if (!error && response.statusCode == 200) {

        var $ = cheerio.load(html);
        var blocks = $('ul.product-list');

	$('ul.product-list').each((i, ul) => {
  		const children = $(ul).find('div.product-preview');
		
		children.each((i,div) => {
			var link = $(div).find('[class="event"]');
			linkk = link.attr("href");
			enlace = `https://elcorteingles.es${linkk}`;
			

			var src = link.find('img');
			source = src.attr("src");
			src = source.split("//").join("");

			var title = link.find('img');
			var tit = title.attr("title");
			title = tit.replace('Xbox One','');
			title = title.trimStart();

			var price = $(div).find('[class="product-price "]');
			//console.log(price.text());
			price = price.find('[class="current   sale"]').text();

			if(price == '')
				price = $(div).find('[class="product-price "]').text();

			var temp = new event({
                    		gameStore: "ElCorteIngles",
                    		gameTitle: title,
                    		gamePrice: price,
                    		imageSrc:  src,
                		dataCategory: "Juegos Xbox One",
        	        	gameLink: enlace,
	                });
			eventList.push(temp);
		})
	});
    }
})

request('https://www.elcorteingles.es/videojuegos/xbox-one/juegos/3/',function(error, response, html){

    if (!error && response.statusCode == 200) {

        var $ = cheerio.load(html);
        var blocks = $('ul.product-list');

	$('ul.product-list').each((i, ul) => {
  		const children = $(ul).find('div.product-preview');
		
		children.each((i,div) => {
			var link = $(div).find('[class="event"]');
			linkk = link.attr("href");
			enlace = `https://elcorteingles.es${linkk}`;
			

			var src = link.find('img');
			source = src.attr("src");
			src = source.split("//").join("");

			var title = link.find('img');
			var tit = title.attr("title");
			title = tit.replace('Xbox One','');
			title = title.trimStart();

			var price = $(div).find('[class="product-price "]');
			//console.log(price.text());
			price = price.find('[class="current   sale"]').text();

			if(price == '')
				price = $(div).find('[class="product-price "]').text();

			var temp = new event({
                    		gameStore: "ElCorteIngles",
                    		gameTitle: title,
                    		gamePrice: price,
                    		imageSrc:  src,
                		dataCategory: "Juegos Xbox One",
        	        	gameLink: enlace,
	                });
			eventList.push(temp);
		})
	});
    }
})

//elcorteingles - nintendo switch

request('https://www.elcorteingles.es/videojuegos/nintendo-switch/?f=type_description::Videojuegos',function(error, response, html){

    if (!error && response.statusCode == 200) {

        var $ = cheerio.load(html);
        var blocks = $('ul.product-list');

	$('ul.product-list').each((i, ul) => {
  		const children = $(ul).find('div.product-preview');
		
		children.each((i,div) => {
			var link = $(div).find('[class="event"]');
			linkk = link.attr("href");
			enlace = `https://elcorteingles.es${linkk}`;
			

			var src = link.find('img');
			source = src.attr("src");
			src = source.split("//").join("");

			var title = link.find('img');
			var tit = title.attr("title");
			title = tit.replace('Nintento Switch','');
			title = title.trimStart();

			var price = $(div).find('[class="product-price "]');
			//console.log(price.text());
			price = price.find('[class="current   sale"]').text();

			if(price == '')
				price = $(div).find('[class="product-price "]').text();

			var temp = new event({
                    		gameStore: "ElCorteIngles",
                    		gameTitle: title,
                    		gamePrice: price,
                    		imageSrc:  src,
                		dataCategory: "Juegos Nintendo Switch",
        	        	gameLink: enlace,
	                });
			eventList.push(temp);
		})
	});
    }
})

request('https://www.elcorteingles.es/videojuegos/nintendo-switch/2/?f=type_description::Videojuegos',function(error, response, html){

    if (!error && response.statusCode == 200) {

        var $ = cheerio.load(html);
        var blocks = $('ul.product-list');

	$('ul.product-list').each((i, ul) => {
  		const children = $(ul).find('div.product-preview');
		
		children.each((i,div) => {
			var link = $(div).find('[class="event"]');
			linkk = link.attr("href");
			enlace = `https://elcorteingles.es${linkk}`;
			

			var src = link.find('img');
			source = src.attr("src");
			src = source.split("//").join("");

			var title = link.find('img');
			var tit = title.attr("title");
			title = tit.replace('Nintendo Switch','');
			title = title.trimStart();

			var price = $(div).find('[class="product-price "]');
			//console.log(price.text());
			price = price.find('[class="current   sale"]').text();

			if(price == '')
				price = $(div).find('[class="product-price "]').text();

			var temp = new event({
                    		gameStore: "ElCorteIngles",
                    		gameTitle: title,
                    		gamePrice: price,
                    		imageSrc:  src,
                		dataCategory: "Juegos Nintendo Switch",
        	        	gameLink: enlace,
	                });
			eventList.push(temp);
		})
	});
    }
})

request('https://www.elcorteingles.es/videojuegos/nintendo-switch/3/?f=type_description::Videojuegos',function(error, response, html){

    if (!error && response.statusCode == 200) {

        var $ = cheerio.load(html);
        var blocks = $('ul.product-list');

	$('ul.product-list').each((i, ul) => {
  		const children = $(ul).find('div.product-preview');
		
		children.each((i,div) => {
			var link = $(div).find('[class="event"]');
			linkk = link.attr("href");
			enlace = `https://elcorteingles.es${linkk}`;
			

			var src = link.find('img');
			source = src.attr("src");
			src = source.split("//").join("");

			var title = link.find('img');
			var tit = title.attr("title");
			title = tit.replace('Nintendo Switch','');
			title = title.trimStart();

			var price = $(div).find('[class="product-price "]');
			//console.log(price.text());
			price = price.find('[class="current   sale"]').text();

			if(price == '')
				price = $(div).find('[class="product-price "]').text();

			var temp = new event({
                    		gameStore: "ElCorteIngles",
                    		gameTitle: title,
                    		gamePrice: price,
                    		imageSrc:  src,
                		dataCategory: "Juegos Nintendo Switch",
        	        	gameLink: enlace,
	                });
			eventList.push(temp);
		})
    });
    
    mongoose.connect(config.connectionString, { useCreateIndex: true, useNewUrlParser: true }).then(()=>{
        eventList.map((value)=>{value.save({})});
      }).then((event)=>{
        console.log(event)
      }).catch((e)=>{
      console.log(e);
      });
    
    }
})