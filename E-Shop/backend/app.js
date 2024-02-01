const express = require("express");
const cors = require("cors");
const ErrorHandler = require("./middleware/error");

const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const sendToken = require("./utils/jwtToken");
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(
    cors({
      origin: ["http://localhost:3000", "https://localhost:3000"],
      credentials: true,
    })
  );
app.use("/", express.static("uploads"));
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));


//config

if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({
    path: "Config/.env",
  });
}

//import routes
const user = require("./controller/user");
// console.log("111")
app.use("/api/v2/user", user);

//for error handling
app.use(ErrorHandler);

module.exports = app;
