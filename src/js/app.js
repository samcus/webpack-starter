require ('../scss/screen.scss');
const $ = require('jquery');
// import * as $ from 'jquery';
// import * as moment from 'moment';
// import * as headingTransform from './modules/headingTransform';

//let T = new test($);

$(document).ready(function(){
    $('body').append('<h1>Hello, from JQuery!!</h1>');
    const vip = require('./modules/test')($);
    console.log(vip);
//     $('body').append('<h2> From Moment: ' + moment().format("MMM Do YY") + '</h2>');
//     $('body').append(headingTransform.getText($('h1')));
});

