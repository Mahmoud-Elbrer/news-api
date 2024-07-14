const asyncWrapper = require("../middlewares/asyncWrapper.js");
const { models } = require("../database/connection.js");
const httpStatus = require("../utils/httpStatus.js");
const errorResponse = require("../utils/errorResponse.js");
const { validationResult } = require("express-validator");
const RssParser = require('rss-parser');

const { areas, cities } = models;

  
  
/**
 * @swagger
 * /users:
 *   get:
 *     summary: Get a list of users
 *     description: Retrieve a list of users from the database.
 *     responses:
 *       200:
 *         description: Successful response with a list of users.
 */

exports.getNews = asyncWrapper(async (req, res) => {
 
  const parser = new RssParser();
 var data  ; 
  parser.parseURL('https://news.un.org/feed/subscribe/ar/news/region/africa/feed/rss.xml')
  .then(feed => {
    // Use the parsed feed data
   console.log(feed.title);
   data = feed.items ;
    //console.log(feed.items);
    return res.json({ status: httpStatus.SUCCESS, title : feed.title , link : feed.link , data });
  });

  


});

exports.getNewsById = asyncWrapper(async (req, res) => {
  let data = await areas.findOne({
    where: { id: req.params.id },
    include: [
      {
        model: cities,
        as: "cities"  
      },
    ],
  });
  return res.json({ status: httpStatus.SUCCESS, data });
});

exports.createNews = asyncWrapper(async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const error = errorResponse.create(errors.array(), 400, httpStatus.FAIL);
    return next(error);
  }
  let data = await areas.create(req.body);
  return res.json({ status: httpStatus.SUCCESS, data });
});

exports.editNews = asyncWrapper(async (req, res) => {
  let data = await areas.update(req.body, {
    where: { id: req.params.id },
  });
  return res.json({ status: httpStatus.SUCCESS, data });
});

exports.deleteNews = asyncWrapper(async (req, res) => {
  let data = await areas.destroy({ where: { id: req.params.id } });
  return res.json({ status: httpStatus.SUCCESS, data });
});
