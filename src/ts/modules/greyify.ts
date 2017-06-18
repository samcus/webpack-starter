import * as $ from 'jquery';

let greyify = function(el){
    $(el).css({'color':'lightGray'});
    return $(el);
}

export { greyify }