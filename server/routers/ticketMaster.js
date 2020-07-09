const routers = require(`express`).Router();
const ticket = require(`../controller/TicketController`);

routers.get("/", ticket.getEvent);
routers.get("/search", ticket.searchEvent);

module.exports = routers;
