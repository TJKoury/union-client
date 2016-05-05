"use strict";

import Handsontable from '../node_modules/handsontable/dist/handsontable.full.min.js';
import '../node_modules/handsontable/dist/handsontable.full.css';
import './style.css';
import $ from 'jquery';
import data from '../../../services/data';
const fs = require('fs');

export default{
  name:'datatable',
  template: "<div id='datatable'></div>",
  data:function(){
    return {
      grid:[{a:1},{a:1},{a:1},{a:1}]
    };
  },
  components:[],
  methods:{
      resize:function(){
           this.table.render();
      },
  },
  ready:function(){
    
    this.table = new Handsontable(this.$el, {
        rowHeaders: true,
        colHeaders: true,
        contextMenu: true,
        startRows: 3,
        startCols: 6,
        stretchH: 'all'
    });
    setTimeout(this.resize, 100);
    this.table.loadData(this.$data.grid);
    $(window).resize(function() {
     setTimeout(this.resize, 300);
    }.bind(this));
 
  },
};