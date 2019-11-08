const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const routes = require("./routes");

const server = express();

mongoose.connect(
  `mongodb+srv://guest:guest123456@cluster0-9fefr.mongodb.net/backend_ufop?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  }
);

server.use(cors());
server.use(express.static("public"));
server.use(express.json());
server.use(routes);

server.listen(process.env.PORT || 3333);
