const express = require("express");
const cors = require("cors");
const ErrorHandler = require("./middleware/error");

const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
//const dotenv = require("dotenv")

//dotenv.config()
const app = express();
app.use(cors());
app.use(express.json());
//app.use(express.static("public"))
//app.use(cookieParser());
app.use(bodyParser.urlencoded({extended:true}));
//app.use(fileUpload({ useTempFiles: true }));

//config

if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({
    path: "Config/.env"
  });
}

//for error handling
app.use(ErrorHandler);

module.exports = app;
