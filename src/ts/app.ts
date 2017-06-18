import '../scss/screen.scss';

import * as $ from 'jquery';
import * as moment from 'moment';
import { greyify } from './modules/greyify';

//const image = require('../images/sprite.png');
//const image = require('file-loader?name=[name].[ext]!');

$(document).ready(function(){
    $('body').append('<h1>Hello, from JQuery!!</h1>');
    $('body').append('<h2> From Moment: ' + moment().format('MMM Do YY') + '</h2>');
    //$('body').append(`<img src="${image}"/>`);
    greyify('h1');
    //let test = "test";

});

