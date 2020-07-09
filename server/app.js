require("dotenv").config();
const express = require(`express`);
const app = express();
const PORT = 3000;
const routers = require(`./routers`);

app.use(express.urlencoded({ extended: true }));
app.use(routers);
