import '../scss/screen.scss';

import * as $ from 'jquery';
import * as moment from 'moment';

$(document).ready(function(){
    $('body').append('<h1>Hello, from JQuery!!</h1>');
    $('body').append('<h2> From Moment: ' + moment().format("MMM Do YY") + '</h2>');
});

