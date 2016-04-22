
require("./sidebar.less");
var fs = require('fs');

module.exports = {
  template:fs.readFileSync('./components/templates/sidebar.template').toString('utf8'),
  name:'sidebar-component',
  data:function(){
    return {
      map:false
    }
  },
  created:function(){
    console.log('created');
  },
  beforeCompile:function(){
    console.log('beforeCompile');
  },
  compiled:function(){
    console.log('compiled');
  },
  created:function(){
    console.log('created');
  },
  ready:function(){

  }
};
