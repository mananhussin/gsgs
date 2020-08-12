const Route = require('../classes/Route');

class Discord extends Route {
    constructor(app) {
        super(app, '/invite');
    }
    createRoute() {
        this.route.get('/', (req, res) => {
            res.redirect(`https://discord.com/oauth2/authorize?client_id=${process.env.MODE !== 'DEV' ? process.env.CLIENT_ID : process.env.DEV_CLIENT_ID}&scope=bot&permissions=285599830`);
        });
        return this.route;
    }
}

module.exports = Discord;