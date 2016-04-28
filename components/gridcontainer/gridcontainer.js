"use strict";

import mainstyle from "./gridcontainer.less";
import thirdpartystyle from "./thirdparty/css/thirdparty.css";

import $ from 'jquery';
import jqueryui from 'jquery-ui';
import sidebar from '../sidebar/sidebar.js';
import g from './thirdparty/js/jquery.gridList.js';
import ui from '../../services/ui.js';
import fixtures from './fixtures.js';
const fs = require('fs');

export default{
  name:'gridcontainer',
  template: fs.readFileSync('./components/gridcontainer/gridcontainer.template').toString('utf8'),
  data:function(){
    return {
      currentSize:8,
      grid:false,
      editMode:false
    };
  },
  components:[sidebar],
  methods:{
    registerElement:function(element){
      
    },
    toggleEdit:function(edit){
      if(!edit||this.el.hasClass('editmode')){
        this.el.removeClass('editmode');
        this.el.find('li').draggable('disable');
      }else{
        this.el.addClass('editmode');
        this.el.find('li').draggable('enable');
      }
    },
    buildElement:function(items){
      
      var _cstring = '';
      
      for(var i=1;i<=this.currentSize;i++){
        
        _cstring+= '<a href="#zoom1" class="resize" data-w="'+i+'" data-h="1">'+i+'x1</a>'
      };
      
      var item, i;
        for (i = 0; i < items.length; i++) {
          item = items[i];
                            
          var $item = $(
            '<li>' +
              '<div class="inner">' +
                '<div class="controls">' +
                  _cstring+
                '</div>' +
                i +
              '</div>' +
            '</li>'
          );
          $item.attr({
            'data-w': item.w,
            'data-h': item.h,
            'data-x': item.x,
            'data-y': item.y
          });
         
          $(this.$el).append($item)
         
        }
       
    },
    flashItems: function(items) {
      // Hack to flash changed items visually
      for (var i = 0; i < items.length; i++) {
        (function($element) {
          $element.addClass('changed')
          setTimeout(function() {
            $element.removeClass('changed');
          }, 0);
        })(items[i].$element);
      }
    },
    change:function(changedItems) {
          this.flashItems(changedItems);
    },
    resize: function(size) {
      console.log(this.currentSize)
      if (size) {
        this.currentSize = size;
      }
      $(this.$el).gridList('resize', this.currentSize);
    },
  },  
  ready:function(){
  
    this.el = $(this.$el);

    /** TODO **/

    this.buildElement(fixtures.DEMO);
 
    this.el.gridList({
      direction:'vertical',
      lanes:this.currentSize,
      widthHeightRatio: 1,
      heightToFontSizeRatio: 0.25,
      onChange: this.change
    });
    
    this.el.gridList('reflow');

    this.el.find('li .resize').click(function(e) {
     
      e.preventDefault();
      var itemElement = $(e.currentTarget).closest('li'),
          itemWidth = $(e.currentTarget).data('w'),
          itemHeight = $(e.currentTarget).data('h');

      this.el.gridList('resizeItem', itemElement, {
        w: itemWidth,
        h: itemHeight
      }).gridList('reflow');

    }.bind(this));
    
    $(window).resize(function() {
      this.el.gridList('reflow');
    }.bind(this));
    
    this.toggleEdit(true);
  }

};
