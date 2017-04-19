require('../scss/screen.scss');

const $ = require('jquery');
const moment = require('moment');

$(document).ready(function(){
    $('body').append('<h1>Hello, from JQuery!</h1>');
    $('body').append('<h2> From Moment: ' + moment().format("MMM Do YY") + '</h2>');
});
