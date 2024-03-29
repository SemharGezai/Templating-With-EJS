const express = require('express');
const app = express();
const port = 3000;

app.set('view engine','ejs');

//this will allow us to serve up static files, CSS, images & JS
app.use(express.static(__dirname));


app.get('/', (req, res) => {
  var title = 'My Home Page';
  res.render('pages/index',{title:title});
});

app.get('/about-us', (req, res) => {
  var title = 'My About Us Page';
  res.render('pages/about-us',{title:title});
});

app.get('/mission', (req, res) => {
  var title = 'Mission';
  res.render('pages/mission',{title:title});
});

app.get('/financials', (req, res) => {
  var title = 'Financials';
  res.render('pages/financials',{title:title});
});

app.get('/cards', (req, res) => {
  var title = 'Cards';
  res.render('pages/cards',{title:title});
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});