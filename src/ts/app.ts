import '../scss/screen.scss';

import * as $ from 'jquery';
import * as moment from 'moment';
import { greyify } from './modules/greyify';

$(document).ready(function(){
    $('body').append('<h1>Hello, from JQuery!!</h1>');
    //$('body').append('<script src="http://localhost:35729/livereload.js"></script>');
    $('body').append('<h2>From Moment: ' + moment().format('MMM Do YY') + '</h2>');
    greyify('h1');
});

