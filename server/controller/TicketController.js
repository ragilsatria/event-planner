const axios = require(`axios`);

class TicketController {
    static getEvent(req, res) {
        axios({
            method: `get`,
            url: `https://app.ticketmaster.com/discovery/v2/events.json?countryCode=DE&apikey=${process.env.TICKET}`,
        })
            .then((result) => {
                // console.log(result.data);
                return res.status(200).json({
                    events: result.data._embedded.events,
                });
            })
            .catch((err) => {
                console.log(err);
            });
    }

    static searchEvent(req, res) {
        const keyword = req.body.keyword;

        axios({
            method: `get`,
            url: `https://app.ticketmaster.com/discovery/v2/events.json?keyword=${keyword}&apikey=${process.env.TICKET}&size=20`,
        })
            .then((result) => {
                return res.status(200).json({
                    events: result.data._embedded.events,
                });
            })
            .catch((err) => {
                console.log(err);
            });
    }
}

module.exports = TicketController;
