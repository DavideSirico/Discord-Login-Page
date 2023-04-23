
const express = require('express');
 
const app = express();
 
// Render static files
app.use(express.static('public'));
// Set the view engine to ejs
app.set('view engine', 'ejs');
// Port website will run on
app.listen(3000);

app.use(express.json());       
app.use(express.urlencoded({extended: true})); 

// *** GET Routes - display pages ***
// Root Route
app.get('/login', function (req, res) {
    res.render('index.ejs');

});
 
app.post("/", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  console.log("Username: " + email);
  console.log("Password: " + password);
  res.send("Data received");
});
 