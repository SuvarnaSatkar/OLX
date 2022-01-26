var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const db=require('../model/index.model')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const { devNull } = require('os');
const indexModel=require('../model/index.model')
var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
db.sequelize.sync();
module.exports = app;
