'use strict';

function createRoutes(routeName, modelName) {
    return {
        base: '/' + routeName,
        byId: '/' + routeName + '/:id',
        model: require('../models/' + modelName + 'Model')
    }
}

const routes = [
    createRoutes('tasks', 'task')
];

module.exports = routes;

