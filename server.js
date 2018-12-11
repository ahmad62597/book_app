'use strict';

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');

app.get('/index', (request, response) => {
  response.render('/views/pages/index');
});

app.listen(PORT, () => {
  console.log(`listening on the coolest port: ${PORT}`);
})