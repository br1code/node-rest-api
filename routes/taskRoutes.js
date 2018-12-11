module.exports = (app) => {
    let task = require('../controllers/taskController');

    app.route('/tasks')
        .get(task.getAll)
        .post(task.create);

    app.route('/tasks/:taskID')
        .put(task.update)
        .get(task.getOne)
        .delete(task.remove);
};