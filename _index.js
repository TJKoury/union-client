var Vue = require('vue');
var map = require('./components/map.vue');

global.data = require('./components/data.js');
new Vue({
  el:'body',
  components:[map]
});
