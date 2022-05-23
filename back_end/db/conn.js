const mongoose = require("mongoose");
const config = require("../config");

const DB = config.DATABASE;

mongoose.connect(DB, {
    useNewUrlParser:true,
    useUnifiedTopology:true})
.then( async () => {
   console.log("Connection Successfull");
   await startServer();
}).catch((err) => {
   console.log("No Connection");
   console.log(err);
});