const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')

app.use(express.static('../client/dist'))

// Routing
app.get('/', (req, res) => {
  // res.render(''); // Doesn't seem to work
  // 
});

app.get('/api/cows', (req, res, next) => {
  // get list of cows from the DB and send it to the React app
  // call a model get method to return all entries in the cows table at the name column
  // model.Cows.get();
});

// Create a new cow in the DB and re-render cow list on success
app.post('/api/cows', (req, res, next) => {
  console.log(`>>> req.body`, req.body);
  // let newCow = {
  //   name: req.body.name,
  //   description: req.body.description
  // };
  // return model.Cows.create({name, description})
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))


// TODO //////////////////////////////////////////////////////////////////////////////////
// [] get post to register

// NOTES /////////////////////////////////////////////////////////////////////////////////
// (1) 

// QUESTIONS /////////////////////////////////////////////////////////////////////////////
// (1) How do I manage React renders from index.js? 
// - Use res.render() to re-write index.jsx?
// (2) What is the format of req.body after body parser runs?