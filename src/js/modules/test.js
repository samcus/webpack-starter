const $ = require('jquery');
// export function test(){
//     return $('h1').innerHTML;
// }

// export default class TodosService {
//   constructor({ JQ }) {
//     this.JQ= JQ
//   }
//   getTodos() {
//     return JQ('h1').innerHTML;
//   }


// }

(function ( $ ) {
 
    $.fn.greenify = function() {
        this.css( "color", "green" );
        return this;
    };
 
}( $ ));