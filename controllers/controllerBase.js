'use strict';

function generateController(modelType) {
    const model = modelType;
    const modelName = model.modelName.toLowerCase();

    function sendResponse(res, err, data) {
        if (err) res.send(err).status(400);
        res.json({ [setKeyName(data)]: data });
    }

    function setKeyName(data) {
        if (Array.isArray(data)) return pluralizeModelName(modelName);
        return modelName;
    }

    function pluralizeModelName(name) {
        return name + 's';
    }

    function getAll(req, res) {
        model.find({}, (err, data) => {
            sendResponse(res, err, data);
        });
    }

    function getOne(req, res) {
        model.findById(req.params.id, (err, data) => {
            sendResponse(res, err, data);
        });
    }

    function create(req, res) {
        model.create(req.body.model, (err, data) => {
            sendResponse(res, err, data);
        })
    }

    function update(req, res) {
        model.findByIdAndUpdate(req.params.id, req.body.model, { new: true }, (err, data) => {
            sendResponse(res, err, data);
        });
    }

    function remove(req, res) {
        model.findByIdAndRemove(req.params.id, (err, data) => {
            sendResponse(res, err, data);
        });
    }

    return {
        getAll,
        getOne,
        create,
        update,
        remove
    };
}

module.exports = generateController;