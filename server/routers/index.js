const routers = require("express").Router();
const ticketMaster = require(`./ticketMaster`);

routers.use(`/get-event`, ticketMaster);

module.exports = routers;
