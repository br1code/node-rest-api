# Task Repository API

Available routes:

> Replace the word 'models' with your model name

Action | Route | Function
--- | --- | ---
GET | /models | getAll()
POST | /models | create()
GET | /models/:id | getOne(id)
PUT | /models/:id | update(id, model)
DELETE | /models/:id | remove(id)

In order to add a new entity to use with the API, you need to create a new MongoDB Model

```js
// Model example
// Path directory -> /models

'use strict';

const mongoose = require('mongoose');

let postSchema = new mongoose.Schema({
    body: String,
    title: String,
    author: String
});

let postModel = mongoose.model('Post', postSchema);

module.exports = postModel;

```
Then you need to register the routes of your new model

```js
// Path directory -> /routes/routesConfig.js

// Add your new route here
const routes = [
    // createRoutes(Route Name '/posts', Model Name 'post')
    createRoutes('posts', 'post')
];

```
Your API is ready to use. Just run:

```
node server.js
```
