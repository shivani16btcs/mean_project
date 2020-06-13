const path = require("path");
const mongoose = require('mongoose');
const express = require('express');
const server = express();
const dotenv=require('dotenv');
dotenv.config();
const bodyParser = require('body-parser');
const register = require('./routes/register');
const login=require('./routes/login');
const forget=require('./routes/forget');
const reset=require('./routes/reset');
const uploadpost=require('./routes/uploadpost');
const cors=require('cors');


server.use(cors({exposedHeaders:["Autorization"]}));
mongoose.connect(process.env.MONGO_URI,
    {useNewUrlParser: true,useUnifiedTopology: true})
.then(()=>console.log("db connected"));
mongoose.connection.on('error',err=>{
    console.log(`db connection error:${err.message}`)
});
mongoose.set('useFindAndModify', false);


server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: false}));
server.use("/images", express.static(path.join("backend/images")));

server.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});

server.use('/', register);
server.use('/',login);
server.use('/',forget);
server.use('/',reset);
server.use('/',uploadpost);
let port = 1234;
server.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});












