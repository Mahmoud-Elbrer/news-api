const router = require("express").Router();
const {
  getNews,
  getNewsById,
  createNews,
  editNews,
  deleteNews,
} = require("../controllers/news");

router
  .post("/", createNews)
  .get("/", getNews)
  .get("/:id", getNewsById)
  .put("/:id", editNews)
  .delete("/:id", deleteNews);

module.exports = router;

/** POST Methods */
/**
 * @swagger
 * '/news':
 *  post:
 *     tags:
 *     - News
 *     summary: Get a user by username
 *     responses:
 *      200:
 *        description: Fetched Successfully
 *      400:
 *        description: Bad Request
 *      404:
 *        description: Not Found
 *      500:
 *        description: Server Error
 */

/** POST Methods */
/**
 * @swagger
 * '/news/users':
 *  post:
 *     tags:
 *     - News
 *     summary: Post a user by username
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            required:
 *              - userId
 *            properties:
 *              userId:
 *                type: string
 *                default: ''
 *              firstName:
 *                type: string
 *                default: ''
 *              lastName:
 *                type: string
 *                default: ''
 *     responses:
 *      200:
 *        description: Fetched Successfully
 *      400:
 *        description: Bad Request
 *      404:
 *        description: Not Found
 *      500:
 *        description: Server Error
 */

/** GET Methods */
/**
 * @swagger
 * /news:
 *   get:
 *     tags:
 *     - News
 *     summary: Get a list of users
 *     description: Retrieve a list of users from the database.
 *     responses:
 *       200:
 *         description: Successful response with a list of users.
 */

/** GET Methods */
/**
 * @swagger
 * /news/{id}:
 *   get:
 *     tags:
 *     - News
 *     summary: Get a list of users
 *     parameters:
 *      - name: id
 *        in: path
 *        description: The id of the user
 *        required: true
 *     description: Retrieve a list of users from the database.
 *     responses:
 *       200:
 *         description: Successful response with a list of users.
 */

/**
 * @swagger
 * /news/{id}:
 *   put:
 *     tags:
 *     - News
 *     summary: Get a list of users
 *     parameters:
 *      - name: id
 *        in: path
 *        description: The id of the user
 *     description: Retrieve a list of users from the database.
 *     responses:
 *       200:
 *         description: Successful response with a list of users.
 */

/**
 * @swagger
 * /news/{id}:
 *   delete:
 *     tags:
 *     - News
 *     summary: Get a list of users
 *     parameters:
 *      - name: id
 *        in: path
 *        description: The id of the user
 *     description: Retrieve a list of users from the database.
 *     responses:
 *       200:
 *         description: Successful response with a list of users.
 */
