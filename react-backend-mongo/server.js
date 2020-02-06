require('rootpath')();
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('_helpers/jwt');
const errorHandler = require('_helpers/error-handlers');
const request = require("request");
const cheerio = require("cheerio");
const mongoose = require("mongoose");
const config = require("configuration.json");
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

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use(jwt());     // use jwt token auth middleware for security

app.use('/users', require('./users/users.controller')); //set routes

app.use(errorHandler);

app.get('*',(req,res)=>{
    request({
      uri: "https://www.pccomponentes.com/juegos-ps4",
    }, function(error, response, body) {
        if(error){
          console.log(error);
        }
        console.log("ERROR");
        var $ = cheerio.load(body);
        var blocks = $("div.tarjeta-articulo__elementos-basicos");
        var title = blocks.find("header.tarjeta-articulo__nombre>h3>a");
        var price = blocks.find("header.tarjeta-articulo__nombre>h3>a").attr("data-price");
        var src = blocks.find("div.tarjeta-articulo__foto").attr("src");
        src = src.split("//").join("");

        var category = blocks.find("header.tarjeta-articulo__nombre>h3>a").attr("data-category");
        var link = blocks.find("header.tarjeta-articulo__nombre>h3>a").attr("href");
        link = `https://wwww.pccomponentes.com{link}`;
    
        for(i=0; i < blocks.length; i++){
          var temp = new event({
            gameStore: "PcComponentes",
            gameTitle: title[i].children[0].data,
            gamePrice:price[i].children[0].data,
            imageSrc:src[i].children[0].data,
            dataCategory:category[i].children[0].data,
            gameLink:link[i].children[0].data,
          });
          eventList.push(temp);
        }
        mongoose.connect(mongoose.connect(config.connectionString, { useCreateIndex: true, useNewUrlParser: true })
        ).then(()=>{
          eventList.map((value)=>{value.save({})});
        }).then((event)=>{
          console.log(event)
        }).catch((e)=>{
        console.log(e);
        });
      });
    request({
    uri: "https://www.pccomponentes.com/juegos-xbox-one",
    }, function(error, response, body) {
        if(error){
        console.log(error);
        }
        var $ = cheerio.load(body);
        var blocks = $("div.tarjeta-articulo__elementos-basicos");
        var title = blocks.find("header.tarjeta-articulo__nombre>h3>a");
        var price = blocks.find("header.tarjeta-articulo__nombre>h3>a").attr("data-price");
        var src = blocks.find("div.tarjeta-articulo__foto").attr("src");
        src = src.split("//").join("");
        
        var category = blocks.find("header.tarjeta-articulo__nombre>h3>a").attr("data-category");
        var link = blocks.find("header.tarjeta-articulo__nombre>h3>a").attr("href");
        link = `https://wwww.pccomponentes.com{link}`;
    
        for(i=0; i < blocks.length; i++){
        var temp = new event({
            gameStore: "PcComponentes",
            gameTitle: title[i].children[0].data,
            gamePrice:price[i].children[0].data,
            imageSrc:src[i].children[0].data,
            dataCategory:category[i].children[0].data,
            gameLink:link[i].children[0].data,
        });
        eventList.push(temp);
        }
        mongoose.connect(mongoose.connect(config.connectionString, { useCreateIndex: true, useNewUrlParser: true })
        ).then(()=>{
        eventList.map((value)=>{value.save({})});
        }).then((event)=>{
        console.log(event)
        }).catch((e)=>{
        console.log(e);
        });
    });
    request({
      uri: "https://www.pccomponentes.com/juegos-nintendo-switch",
      }, function(error, response, body) {
          if(error){
          console.log(error);
          }
          var $ = cheerio.load(body);
          var blocks = $("div.tarjeta-articulo__elementos-basicos");
          var title = blocks.find("header.tarjeta-articulo__nombre>h3>a");
          var price = blocks.find("header.tarjeta-articulo__nombre>h3>a").attr("data-price");
          var src = blocks.find("div.tarjeta-articulo__foto").attr("src");
          src = src.split("//").join("");
          
          var category = blocks.find("header.tarjeta-articulo__nombre>h3>a").attr("data-category");
          var link = blocks.find("header.tarjeta-articulo__nombre>h3>a").attr("href");
          link = `https://wwww.pccomponentes.com{link}`;
      
          for(i=0; i < blocks.length; i++){
          var temp = new event({
              gameStore: "PcComponentes",
              gameTitle: title[i].children[0].data,
              gamePrice:price[i].children[0].data,
              imageSrc:src[i].children[0].data,
              dataCategory:category[i].children[0].data,
              gameLink:link[i].children[0].data,
          });
          eventList.push(temp);
          }
          mongoose.connect(mongoose.connect(config.connectionString, { useCreateIndex: true, useNewUrlParser: true })
          ).then(()=>{
          eventList.map((value)=>{value.save({})});
          }).then((event)=>{
          console.log(event)
          }).catch((e)=>{
          console.log(e);
          });
      });
      request({
        uri: "https://www.instant-gaming.com/es/games/playstation/",
        }, function(error, response, body) {
            if(error){
            console.log(error);
            }
            var $ = cheerio.load(body);
            var blocks = $("div.item mainshadow");
            var title = blocks.find("div.name");
            var price = blocks.find("div.shadow>div.price");
            var src = blocks.find("a.cover>img.picture mainshadow").attr("src");
            //src = src.split("//").join("");
            
            var category = "Juegos PS4";
            var link = blocks.find("a.cover").attr("href");
            //link = `https://wwww.pccomponentes.com{link}`;
        
            for(i=0; i < blocks.length; i++){
            var temp = new event({
                gameStore: "Instant-Gaming",
                gameTitle: title[i].children[0].data,
                gamePrice:price[i].children[0].data,
                imageSrc:src[i].children[0].data,
                dataCategory:category[i].children[0].data,
                gameLink:link[i].children[0].data,
            });
            eventList.push(temp);
            }
            mongoose.connect(mongoose.connect(config.connectionString, { useCreateIndex: true, useNewUrlParser: true })
            ).then(()=>{
            eventList.map((value)=>{value.save({})});
            }).then((event)=>{
            console.log(event)
            }).catch((e)=>{
            console.log(e);
            });
        });
      request({
        uri: "https://www.instant-gaming.com/es/games/xbox/",
        }, function(error, response, body) {
            if(error){
            console.log(error);
            }
            var $ = cheerio.load(body);
            var blocks = $("div.item mainshadow");
            var title = blocks.find("div.name");
            var price = blocks.find("div.shadow>div.price");
            var src = blocks.find("a.cover>img.picture mainshadow").attr("src");
            //src = src.split("//").join("");
            
            var category = "Juegos Xbox One";
            var link = blocks.find("a.cover").attr("href");
        
            for(i=0; i < blocks.length; i++){
            var temp = new event({
                gameStore: "Instant-Gaming",
                gameTitle: title[i].children[0].data,
                gamePrice:price[i].children[0].data,
                imageSrc:src[i].children[0].data,
                dataCategory:category[i].children[0].data,
                gameLink:link[i].children[0].data,
            });
            eventList.push(temp);
            }
            mongoose.connect(mongoose.connect(config.connectionString, { useCreateIndex: true, useNewUrlParser: true })
            ).then(()=>{
            eventList.map((value)=>{value.save({})});
            }).then((event)=>{
            console.log(event)
            }).catch((e)=>{
            console.log(e);
            });
        });
      request({
        uri: "https://www.instant-gaming.com/es/games/nintendo/",
        }, function(error, response, body) {
            if(error){
            console.log(error);
            }
            var $ = cheerio.load(body);
            var blocks = $("div.item mainshadow");
            var title = blocks.find("div.name");
            var price = blocks.find("div.shadow>div.price");
            var src = blocks.find("a.cover>img.picture mainshadow").attr("src");
            //src = src.split("//").join("");
            
            var category = "Juegos Nintendo Switch";
            var link = blocks.find("a.cover").attr("href");
        
            for(i=0; i < blocks.length; i++){
            var temp = new event({
                gameStore: "Instant-Gaming",
                gameTitle: title[i].children[0].data,
                gamePrice:price[i].children[0].data,
                imageSrc:src[i].children[0].data,
                dataCategory:category[i].children[0].data,
                gameLink:link[i].children[0].data,
            });
            eventList.push(temp);
            }
            mongoose.connect(mongoose.connect(config.connectionString, { useCreateIndex: true, useNewUrlParser: true })
            ).then(()=>{
            eventList.map((value)=>{value.save({})});
            }).then((event)=>{
            console.log(event)
            }).catch((e)=>{
            console.log(e);
            });
        });
        request({
          uri: "https://www.g2a.com/category/games-c189?drm%5B3%5D=8586&banner=m1",
          }, function(error, response, body) {
              if(error){
              console.log(error);
              }
              var $ = cheerio.load(body);
              var blocks = $("li.products-grid__item");
              var title = blocks.find("div.Card__headings>h3>a").attr("title");
              var price = blocks.find("div.Card__footer>span.Card__price-cost price");
              var src = blocks.find("div.Card__media>div.Card__cover>img").attr("src");
              //src = src.split("//").join("");
              
              var category = "Juegos PS4";
              var link = blocks.find("div.Card__headings>h3.Card__title>a").attr("href");
          
              for(i=0; i < blocks.length; i++){
              var temp = new event({
                  gameStore: "G2A",
                  gameTitle: title[i].children[0].data,
                  gamePrice:price[i].children[0].data,
                  imageSrc:src[i].children[0].data,
                  dataCategory:category[i].children[0].data,
                  gameLink:link[i].children[0].data,
              });
              eventList.push(temp);
              }
              mongoose.connect(mongoose.connect(config.connectionString, { useCreateIndex: true, useNewUrlParser: true })
              ).then(()=>{
              eventList.map((value)=>{value.save({})});
              }).then((event)=>{
              console.log(event)
              }).catch((e)=>{
              console.log(e);
              });
          });
        request({
          uri: "https://www.g2a.com/category/games-c189?drm%5B7%5D=273&banner=m1",
          }, function(error, response, body) {
              if(error){
              console.log(error);
              }
              var $ = cheerio.load(body);
              var blocks = $("li.products-grid__item");
              var title = blocks.find("div.Card__headings>h3>a").attr("title");
              var price = blocks.find("div.Card__footer>span.Card__price-cost price");
              var src = blocks.find("div.Card__media>div.Card__cover>img").attr("src");
              //src = src.split("//").join("");
              
              var category = "Juegos Xbox One";
              var link = blocks.find("div.Card__headings>h3.Card__title>a").attr("href");
          
              for(i=0; i < blocks.length; i++){
              var temp = new event({
                  gameStore: "G2A",
                  gameTitle: title[i].children[0].data,
                  gamePrice:price[i].children[0].data,
                  imageSrc:src[i].children[0].data,
                  dataCategory:category[i].children[0].data,
                  gameLink:link[i].children[0].data,
              });
              eventList.push(temp);
              }
              mongoose.connect(mongoose.connect(config.connectionString, { useCreateIndex: true, useNewUrlParser: true })
              ).then(()=>{
              eventList.map((value)=>{value.save({})});
              }).then((event)=>{
              console.log(event)
              }).catch((e)=>{
              console.log(e);
              });
          });
        request({
          uri: "https://www.g2a.com/category/games-c189?drm%5B7%5D=273&banner=m1",
          }, function(error, response, body) {
              if(error){
              console.log(error);
              }
              var $ = cheerio.load(body);
              var blocks = $("li.products-grid__item");
              var title = blocks.find("div.Card__headings>h3>a").attr("title");
              var price = blocks.find("div.Card__footer>span.Card__price-cost price");
              var src = blocks.find("div.Card__media>div.Card__cover>img").attr("src");
              //src = src.split("//").join("");
              
              var category = "Juegos Xbox One";
              var link = blocks.find("div.Card__headings>h3.Card__title>a").attr("href");
          
              for(i=0; i < blocks.length; i++){
              var temp = new event({
                  gameStore: "G2A",
                  gameTitle: title[i].children[0].data,
                  gamePrice:price[i].children[0].data,
                  imageSrc:src[i].children[0].data,
                  dataCategory:category[i].children[0].data,
                  gameLink:link[i].children[0].data,
              });
              eventList.push(temp);
              }
              mongoose.connect(mongoose.connect(config.connectionString, { useCreateIndex: true, useNewUrlParser: true })
              ).then(()=>{
              eventList.map((value)=>{value.save({})});
              }).then((event)=>{
              console.log(event)
              }).catch((e)=>{
              console.log(e);
              });
          });
        });
    

const port = process.env.NODE_ENV === 'production' ? (process.env.PORT || 80) : 4000;
const server = app.listen(port, function () {
    console.log('Server listening on port ' + port);
});