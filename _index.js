import Vue from 'vue';
import main from './components/main/main.js';

Vue.component('main', Vue.extend(main));

new Vue({
  el:'body',
  ready:function(){
    
  }
});