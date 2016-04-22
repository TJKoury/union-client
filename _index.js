var Vue = require('vue');
var fs = require('fs');

var main = require('./components/main.js');

Vue.component('main', Vue.extend(main.default));

new Vue({
  el:'body',

  ready:function(){

  }
});
