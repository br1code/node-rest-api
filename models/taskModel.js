'use strict';

const mongoose = require('mongoose');
const moment = require('moment');

let taskSchema = new mongoose.Schema({
    name: String,
    date: {
        type: String,
        default: moment().format('LLL')
    },
    type: String,
    assignedTo: String,
    observation: String,
    hours: Number
});

let taskModel = mongoose.model('Task', taskSchema);

module.exports = taskModel;