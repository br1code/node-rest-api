'use strict';

function registerRoutes(app) {
    let routes = require('./routesConfig');
    let generateController = require('../controllers/controllerBase');
    
    routes.forEach((route) => {
        let controller = generateController(route.model);

        app.route(route.base)
            .get(controller.getAll)
            .post(controller.create);
        
        app.route(route.byId)
            .get(controller.getOne)
            .put(controller.update)
            .delete(controller.remove);
    });
}

module.exports = registerRoutes;