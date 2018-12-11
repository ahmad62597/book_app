'use strict';

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.listen(PORT, () => {
  console.log(`listening on the coolest port: ${PORT}`);
})
app.get('/', (request, response) => {
  response.render('../views/pages/index');
});
