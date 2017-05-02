var express = require('express')
var app = express()
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))


app.use(express.static('public'));
app.set('view engine', 'ejs');


// app.get('/', function (req, res) {
//   res.send('Hello World!');
// })

app.get("/signup", function(req,res){
  res.render("email-signup")
})
app.get("/the_user_submitted_the_form",function(req,res){
  console.log(req.query);
  res.send("Thank you for submitting, "+req.query.the_email_that_the_user_submitted);
})

app.post("/the_user_submitted_the_form_post",function(req,res){
  console.log(req.body);
  res.send("Thank you for submitting, "+ req.body.the_email_that_the_user_submitted);
})


app.get("/answer", function(req,res){
  var answer = -5042 + 5084;
  res.send("<h1>The answer is "+answer+"</h1>")
})

app.get("/ejs-answer", function(req,res){
  var answer = -5042 + 5084;

  res.render("answer",{answer: answer});
})
app.listen(8000, function () {
  console.log('Example app listening on port 8000!')
})
