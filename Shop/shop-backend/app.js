var createError = require('http-errors');
var express = require('express');
var path = require('path');
const cors = require('cors');
require('dotenv').config()
const mongoose = require('mongoose');


var usersRouter = require('./routes/users');
var ordersRouter = require('./routes/orders');
var motorTypesRouter = require('./routes/motorTypes');
var productsRouter = require('./routes/products');
var reviewsRouter = require('./routes/reviews');

const url = process.env.MONGODB_URI;

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(result => {
    console.log('connected to MongoDB')
  })
  .catch((error) => {
    console.log('error connecting to MongoDB:', error.message)
  })
var app = express();


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/users', usersRouter);
app.use('/orders', ordersRouter);
app.use('/motorTypes', motorTypesRouter);
app.use('/products', productsRouter);
app.use('/reviews', reviewsRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
