//错误处理
var express = require('express');
var app = express();

app.get('/',(req,res,next)=>{
  // res.send("hello world")
  res.sed("hello world")
})


function logErrors(err, req, res, next) {
  console.error('错误日志',err.stack);
  next(err);
}

function clientErrorHandler(err, req, res, next) {
  if (req.xhr) {
    res.status(500).send({ error: 'Something failed!' });
  } else {
    next(err);
  }
}

function errorHandler(err, req, res, next) {
  res.status(500);
  res.end(err.stack);
}

app.use(logErrors);
app.use(clientErrorHandler);
app.use(errorHandler);




app.listen(8081, function () {
  console.log("应用实例，8081")
})