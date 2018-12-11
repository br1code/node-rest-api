'use strict';

const express           = require('express'),
      cors              = require('cors'),
      mongoose          = require('mongoose'),
      utils             = require('./utils'),
      bodyParser        = require('body-parser');

const PORT              = process.env.PORT || 3000,
      DB_URL            = process.env.DB_URL || utils.getDBLocalURL();

const registerRoutes        = require('./routes/registerRoutes');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect(DB_URL, {useNewUrlParser: true});

registerRoutes(app);

app.get('*', (req, res) => {
    res.json({response: 'Error'});
});

app.listen(PORT, () => {
    console.log('API server listening at port: ' + PORT);
});