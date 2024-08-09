require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const { errors } = require('celebrate');
const mainRouter = require("./routes/index");

const {errorHandler} = require('./middlewares/error-handler');
const { requestLogger, errorLogger } = require('./middlewares/logger');

const app = express();
const {PORT = 3001} = process.env
const {DBPATH = 'mongodb://127.0.0.1:27017/news_db'} = process.env

app.use(express.json());
app.use(cors());


mongoose.connect(DBPATH, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(()=>{
    console.log("Connected to DB")
  })
  .catch(console.error);

app.use(requestLogger);
app.use("/", mainRouter);
app.use(errorLogger);
app.use(errorHandler);
app.use(errors());
app.listen(PORT, ()=>{
  console.log(`Server is running on port ${PORT}`);
})