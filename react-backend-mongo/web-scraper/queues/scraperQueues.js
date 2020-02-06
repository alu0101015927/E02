const Queue = require("bull");
const cheerio = require("cheerio");
const rp = require("request-promise");
const models = require("../models");

const webScraperQueue = new Queue("web-scraping");

webScraperQueue.process(async (job, done) => {
    const deal = job.data.deal;
    const respone = await rp(deal.url);
    const $ = cheerio.load(respone);

    const game_item = $(".tarjeta-articulo__elementos-basicos");

    let games = [];

    Object.keys(game_item).forEach(key => {
        const title = $(game_item[key]).find(".tarjeta-articulo__nombre a").text("data-name");
        const price = $(game_item[key]).find(".tarjeta-articulo__nombre a").attr("data-price");
        let image_src = $(game_item[key]).find(".tarjeta-articulo__foto img").attr("src");           //save image src url
        image_src = image_src.split("//").join("");

        const data_category = $(game_item[key]).find(".tarjeta-articulo__nombre a").attr("data-category");

        let game_link = $(game_item[key]).find(".tarjeta-articulo__nombre a").attr("href");

        game_link = `https://wwww.pccomponentes.com{game_link}`;

        games.push({ title, price, game_link, image_src, data_category});

    });

    await models.Deal.update(
        {
            content: JSON.stringify(games),
        },
        {
            where: {
                id: deal.id,
            },
        }
    );
    done();
});

export {webScraperQueue};