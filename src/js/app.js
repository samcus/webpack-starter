require ('../scss/screen.scss');
const $ = require('jquery');
const moment = require('moment');
const test = require('./modules/test');

const image = require('../images/sprite.png');

$(document).ready(function(){
    $('body').append('<h1>Hello, from JQuery!!</h1>');
    $('body').append('<h2> From Moment: ' + moment().format("MMM Do YY") + '</h2>');
    test.greenify('h1');
    $('body').append(image);
});

