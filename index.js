const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();

const routesv1 = require("./src/routes/v1");

const app = express();
if (process.env.NODE_ENV === "development") {
  // CORS settings
  app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");

    // authorized headers for preflight requests
    // https://developer.mozilla.org/en-US/docs/Glossary/preflight_request
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();

    app.options("*", (req, res) => {
      // allowed XHR methods
      res.header(
        "Access-Control-Allow-Methods",
        "GET, PATCH, PUT, POST, DELETE, OPTIONS"
      );
      res.send();
    });
  });
}

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

const port = process.env.PORT || 8000;

app.get("/", (req, res) => res.send("Server express"));

mongoose
  .connect(`mongodb://${process.env.URL}/${process.env.DB}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to mongodb");
    app.listen(port, () => {
      console.log(`Express running on: http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.log("mongodb error", error);
  });

routesv1(app);
