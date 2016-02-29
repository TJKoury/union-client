<template>
  <div class="grid">
    <div class="grid-item"></div>
    <div class="grid-item"></div>
    <div class="grid-item"></div>
    <div class="grid-item"></div>
    <div class="grid-item"></div>
    <div class="grid-item"></div>
    <div class="grid-item"></div>
    <div class="grid-item"></div>
    <div class="grid-item"></div>
    <div class="grid-item"></div>
    <div class="grid-item"></div>
    <div class="grid-item"></div>
    <div class="grid-item"></div>
    <div class="grid-item"></div>
    <div class="grid-item"></div>
    <div class="grid-item"></div>
    <div class="grid-item"></div>
    <div class="grid-item"></div>
    <div class="grid-item"></div>
    <div class="grid-item"></div>
    <map-component></map-component>
  </div>
</template>
<style>
  * { box-sizing: border-box; }

  body { font-family: sans-serif; }

  /* ---- grid ---- */

  .grid {
  background: #DDD;
  width:100%;
  margin:auto;
  }

  /* clear fix */
  .grid:after {
  content: '';
  display: block;
  clear: both;
  }

  /* ---- .grid-item ---- */

  .grid-item {
  float: left;
  width: 100px;
  height: 100px;
  background: #C09;
  border: 2px solid hsla(0, 0%, 0%, 0.5);
  }

  .grid-item--width2 { width: 200px; }
  .grid-item--height2 { height: 200px; }

  .grid-item:hover {
  border-color: hsla(0, 0%, 100%, 0.5);
  cursor: move;
  }

  .grid-item.is-dragging,
  .grid-item.is-positioning-post-drag {
  background: #C90;
  z-index: 2;
  }

  .packery-drop-placeholder {
  outline: 1px dashed hsla(0, 0%, 0%, 0.5);
  outline-offset: -6px;
  -webkit-transition: -webkit-transform 0.2s;
          transition: transform 0.2s;
  }
</style>
<script>
import map from './map.vue';
import Packery from 'packery';
import ui from '../services/ui.vue';
import dgb from 'draggabilly';

export default{
  name:'main',
  data:function(){
    return {
      grid:false
    };
  },
  components:[map],
  ready:function(){
    console.log(document.getElementsByClassName("grid")[0].style);
    ui.grid = new Packery( '.grid', {
      itemSelector: '.grid-item',
      columnWidth: 100,
      containerStyle:{
        height:'100vh'
      }
    });

    ui.grid.getItemElements().forEach( function( itemElem ) {
      var draggie = new dgb( itemElem );
      ui.grid.bindDraggabillyEvents( draggie );
      draggie.on("dragStart", function(){
        console.log('dragstart');
      })
    });

  },

};

</script>
