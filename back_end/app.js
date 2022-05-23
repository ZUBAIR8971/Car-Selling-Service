const config = require("./config");
const express = require("express");
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const fileupload = require('express-fileupload');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cookieParser());
app.use(bodyParser.urlencoded({
   extended: true, limit: '50mb'
}));
app.use(bodyParser.json({
   limit: '50mb'
}));

app.use(fileupload());
app.use(cors());

const http = require('http').createServer(app);

require("./db/conn");

app.use(express.json());

app.use('/', require("./routers"));

startServer = async () => {
   let {port} = config;
   http.listen(port, (err) => {
      console.log(`App listen at port ${port}`);
  });
};