"use strict";

import mainstyle from "./main.less";
import thirdpartystyle from "./thirdparty/css/thirdparty.css";

import $ from 'jquery';
import jqueryui from 'jquery-ui';
import sidebar from '../sidebar/sidebar.js';
import ui from '../../services/ui.js';
import gridcontainer from '../gridcontainer/gridcontainer.js';
const fs = require('fs');

export default{
  name:'main',
  template: fs.readFileSync('./components/main/main.template').toString('utf8'),
  data:function(){
    return {
      grid:false,
      editMode:false
    };
  },
  components:[sidebar, gridcontainer],
  methods:{

  },
  ready:function(){

  
  },

};
