const express = require("express");
const cors = require("cors");
const ErrorHandler = require("./middleware/error");

const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const sendToken = require("./utils/jwtToken");
// const fileUpload = require("express-fileupload");
//const dotenv = require("dotenv")

//dotenv.config()
const app = express();
app.use(
  cors({
    origin: "https://localhost:3000",
    credentials: true,
  })
);
app.use(express.json());
app.use("/", express.static("uploads"));
// app.use(express.static("public"))
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
// app.use(fileUpload({ useTempFiles: true }));

//config

if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({
    path: "Config/.env",
  });
}

//import routes
const user = require("./controller/user");
app.use("/api/v2/user", user);

//for error handling
app.use(ErrorHandler);

module.exports = app;
