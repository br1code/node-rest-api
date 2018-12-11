'use strict';

function createRoute(routeName, modelName) {
    return {
        base: '/' + routeName,
        byId: '/' + routeName + '/:id',
        model: require('../models/' + modelName + 'Model')
    }
}

const routes = [
    createRoute('tasks', 'task')
];

module.exports = routes;

