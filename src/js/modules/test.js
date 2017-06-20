const $ = require('jquery');
// export function test(){
//     return $('h1').innerHTML;
// }
let greenify = function(el){
    $(el).css({'color':'green'});
    return $(el);
}

export { greenify }