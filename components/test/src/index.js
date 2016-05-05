'use strict';

module.exports = {
  name:'testm',
  template: "<div>test</div>",
  data:function(){
    return {
      test:'test'
    };
  },
  components:[],
  methods:{},
  ready:function(){
    console.log('test module loaded')
  }
}