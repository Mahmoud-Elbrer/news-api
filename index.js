const express = require("express");
const app = express();
require("dotenv").config();
const news = require("./routes/news");
const httpStatus = require("./utils/httpStatus");
const fileEasyUpload = require("express-easy-fileuploader");
require("./utils/swagger")(app);
require("./utils/swagger")(app);


app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
const cors = require("cors");
app.use(
  cors({
    origin: "*",
  })
);
app.use(
  fileEasyUpload({
    app,
    fileUploadOptions: {
      limits: { fileSize: 50 * 1024 * 1024 },
    },
  })
);

const URL = process.env.ROUTES_URL;

app.use(`${URL}/news`, news);

app.use(express.static("."));
// global error handler
app.use((error, req, res, next) => {
  res.status(error.statusCode || 500).json({
    status: error.statusText || httpStatus.ERROR,
    message: error.message,
    code: error.statusCode || 500,
    data: null,
  });
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, async () => {
  console.log(`app running at ${PORT}`);
});
