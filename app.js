var express = require('express')
var app = express()

app.use(express.static('public'));
app.set('view engine', 'ejs');


// app.get('/', function (req, res) {
//   res.send('Hello World!');
// })

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
