var Vue = require('vue');

Vue.component('sidemenu',  require('./components/sidemenu.vue'));
Vue.component('main', require('./components/main.vue'));

new Vue({
  el:'body',
  ready:function(){
    
  }
});
