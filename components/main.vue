<template>
  <div class="header">
      <a href="#remove-row" class="button remove-row">-</a>
      <a href="#add-row" class="button add-row">+</a>
      <p>
        <a class="github-button" href="https://github.com/hootsuite/grid" data-style="mega" data-count-href="/hootsuite/grid/stargazers" data-count-api="/repos/hootsuite/grid#stargazers_count" data-count-aria-label="# stargazers on GitHub" aria-label="Star hootsuite/grid on GitHub">GitHub</a>
      </p>
    </div>
    <div class="grid-container">
      <ul id="grid" class="grid">
        <li class="position-highlight">
          <div class="inner"></div>
        </li>
      </ul>
    </div>
  </div>
</template>
<style>

  * {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }
  body {
    background: #E5E5E5;
  }
  .grid-container {
    position: absolute;
    top: 66px;
    left: 0;
    right: 10px;
    bottom: 0;
    overflow: auto;
  }
  .grid {
    position: relative;
    height: 100%;
    list-style: none;
    /* Will be modified by the grid jquery lib, depending on the items */
    -webkit-transition: width 0.2s,
                        height 0.2s;
            transition: width 0.2s,
                        height 0.2s;
  }
    .grid li {
      position: absolute;
      z-index: 1;
      font-weight: bold;
      line-height: 4em;
      text-align: center;
      cursor: pointer;
      -webkit-transition: top 0.2s,
                          left 0.2s,
                          width 0.2s,
                          height 0.2s,
                          font-size 0.2s,
                          line-height 0.2s;
              transition: top 0.2s,
                          left 0.2s,
                          width 0.2s,
                          height 0.2s,
                          font-size 0.2s,
                          line-height 0.2s;
    }
    .grid li .inner {
      position: absolute;
      background: #fff;
      border: 1px solid #bbb;
      top: 0;
      bottom: 10px;
      left: 10px;
      right: 0;
      -webkit-transition: background 3s;
              transition: background 3s;
    }
    .grid li.changed .inner {
      background: #ffff66;
      -webkit-transition: none;
              transition: none;
    }
    .grid li.ui-draggable-dragging {
      -webkit-transition: none;
              transition: none;
    }
    .grid li.position-highlight {
      -webkit-transition: none;
              transition: none;
    }
      .grid li.position-highlight .inner {
        border: none;
        background: #ccc;
      }
    .grid .controls {
      position: absolute;
      top: 0;
      right: 0;
      float: right;
      font-size: 0.4em;
      font-weight: normal;
      line-height: 1em;
      opacity: 0;
      -webkit-transition: opacity 0.2s;
              transition: opacity 0.2s;
    }
      .grid .controls .resize {
        font-size: 0.6em;
        float: left;
        margin: 5px 5px 0 0;
        padding: 0.3em;
        background: #fafafa;
        color: #444;
        text-decoration: none;
      }
      .grid .controls .resize:hover {
        background: #f1f1f1;
      }
    .grid li:hover .controls {
      opacity: 1;
    }

  .header {
    height: 55px;
    border-bottom: 1px solid #ccc;
  }
    .header .button {
      float: left;
      width: 40px;
      height: 40px;
      margin: 6px 0 0 10px;
      border: solid 1px #ccc;
      background: #fafafa;
      color: #000;
      font-size: 18px;
      line-height: 40px;
      font-weight: 700;
      text-align: center;
      text-decoration: none;
      cursor: pointer;
    }
    .header p {
      float: left;
      padding: 14px 0 0 10px;
      font-size: 18px;
      line-height: 18px;
    }

</style>
<script>

import $ from 'jquery';
import jqueryui from 'jquery-ui';
import map from './map.vue';
import g from './thirdparty/jquery.gridList.js';
import ui from '../services/ui.vue';
import fixtures from './fixtures.js';

export default{
  name:'main',
  data:function(){
    return {
      grid:false
    };
  },
  components:[map],
  ready:function(){

    var DemoGrid = {
      currentSize: 3,
      buildElements: function($gridContainer, items) {
        var item, i;
        for (i = 0; i < items.length; i++) {
          item = items[i];
          var $item = $(
            '<li>' +
              '<div class="inner">' +
                '<div class="controls">' +
                  '<a href="#zoom1" class="resize" data-w="1" data-h="1">1x1</a>' +
                  '<a href="#zoom2" class="resize" data-w="2" data-h="1">2x1</a>' +
                  '<a href="#zoom3" class="resize" data-w="3" data-h="1">3x1</a>' +
                  '<a href="#zoom1" class="resize" data-w="1" data-h="2">1x2</a>' +
                  '<a href="#zoom2" class="resize" data-w="2" data-h="2">2x2</a>' +
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
          $gridContainer.append($item);
        }
      },
      resize: function(size) {
        if (size) {
          this.currentSize = size;
        }
        $('#grid').gridList('resize', this.currentSize);
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
      }
  };

  $(window).resize(function() {
    $('#grid').gridList('reflow');
  });

  $(function() {
    DemoGrid.buildElements($('#grid'), fixtures.DEMO);

    $('#grid').gridList({
      lanes: DemoGrid.currentSize,
      widthHeightRatio: 264 / 294,
      heightToFontSizeRatio: 0.25,
      onChange: function(changedItems) {
        DemoGrid.flashItems(changedItems);
      }
    });
    $('#grid li .resize').click(function(e) {
      e.preventDefault();
      var itemElement = $(e.currentTarget).closest('li'),
          itemWidth = $(e.currentTarget).data('w'),
          itemHeight = $(e.currentTarget).data('h');

      $('#grid').gridList('resizeItem', itemElement, {
        w: itemWidth,
        h: itemHeight
      });
    });
    $('.add-row').click(function(e) {
      e.preventDefault();
      DemoGrid.resize(DemoGrid.currentSize + 1);
    });
    $('.remove-row').click(function(e) {
      e.preventDefault();
      DemoGrid.resize(Math.max(1, DemoGrid.currentSize - 1));
    });
  });
  },

};

</script>
