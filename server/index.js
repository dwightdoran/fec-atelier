const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, '..', '/client/dist')));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// ========== Shared ========== //

// ========== Overview ========== //

// ========== Related Products ========== //

// ========== Questions & Answers ========== //

app.get('/qa/questions/:product_id', function(req, res) {
  const apiCalls = require('../utils/apiCalls.js');
  let product = req.params.product_id;

  apiCalls.getProductQuestionData(product, (questions) => {
    res.send(questions);
  })
})

// ========== Ratings & Reviews ========== //

// ========== Server Listen ========== //

app.listen(port, () => {
  console.log('Listening on port 3000');
});
