'use strict';

const Task = require('../models/taskModel');

function getAll(req, res) {
    Task.find({}, (err, tasks) => {
        if (err) res.send(err).status(400);
        res.json({tasks});
    });
}

function create(req, res) {
    Task.create(req.body.task, (err, task) => {
        if (err) res.send(err).status(400);
        res.json({task});
    });
}

function getOne(req, res) {
    Task.findById(req.params.taskID, (err, task) => {
        if (err) res.send(err).status(400);
        res.json({task});
    });
}

function update(req, res) {
    Task.findByIdAndUpdate(req.params.taskID, req.body.task, {new: true}, (err, task) => {
        if (err) res.send(err).status(400);
        res.json({task});
    });
}

function remove(req, res) {
    Task.findByIdAndRemove(req.params.taskID, (err) => {
        if (err) res.send(err).status(400);
        res.json({response: 'Task successfully deleted'});
    });
}

module.exports = {
    getAll,
    getOne,
    create,
    update,
    remove
};