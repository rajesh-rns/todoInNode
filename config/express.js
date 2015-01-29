/**
 * Created by rajeshs on 1/28/2015.
 */
var express = require('express'),
    methodOverride = require('method-override'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    logger = require('morgan'),
    path = require('path'),
    favicon = require('serve-favicon');



module.exports = function(){
    var app = express();
    app.use(favicon(path.join(__dirname,'../public/favicon.ico')));
    app.use(logger('dev'));
    app.use(methodOverride('_method'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:false}));
    app.use(cookieParser());
    app.use(express.static(path.join(__dirname, '../public/')));

    return app;

};

