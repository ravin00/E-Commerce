const app = require("./app");
const connectDatabase = require("./db/Database");




//Handling Uncaught Exceptions

process.on("uncaughtException",(err) => {
    console.log(`Error: ${err.message}`);
    console.log(`shutting down the server for handling uncaught exceptions`);
})

//config

if(process.env.NODE_ENV !== "PRODUCTION"){
    require("dotenv").config({
        path:"Config/.env"
    })
}

//connect db
connectDatabase();


//create server
const server = app.listen(process.env.PORT,() => {
    console.log(`Server is running on http://localhost:${process.env.PORT}`)
})

//unhandled promise exceptions 
process.on("unhandledRejection",(err) => {
    console.log(`Shutting down the server for ${err.message}` );
    console.log(`shutting down the server for unhandled promise rejection`);

    server.close(() => {
        process.exit(1);
    });
});