const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));
let quotes = require('random-movie-quotes')
app.get('/quote', (req, res) => { 
  console.log('the response will be sent by the next function ...')
  res.json({
    quote: quotes.getQuote()
  });
});


app.listen(port, () => console.log(`Awesome app listening on port ${port}!`));