<template>
  <div id='main' class="grid">
    <div class="grid-item">
      <div class="grid-content">
      <div class="grid-inner-content">
        adf
      </div>
      </div>
    </div>
    <div class="grid-item">
        <div class="grid-content">
        <div class="grid-inner-content">
          adf
        </div>
        </div>
    </div>
    <div class="grid-item">
      <div class="grid-content">
      <div class="grid-inner-content">
        adf
      </div>
      </div>
    </div>
    <div class="grid-item">
        <div class="grid-content">
        <div class="grid-inner-content">
          adf
        </div>
        </div>
    </div>
    <div class="grid-item">
      <div class="grid-content">
      <div class="grid-inner-content">
        adf
      </div>
      </div>
    </div>
    <div class="grid-item">
        <div class="grid-content">
        <div class="grid-inner-content">
          adf
        </div>
        </div>
    </div>
    <div class="grid-item">
      <div class="grid-content">
      <div class="grid-inner-content">
        adf
      </div>
      </div>
    </div>
    <div class="grid-item">
        <div class="grid-content">
        <div class="grid-inner-content">
          adf
        </div>
        </div>
    </div>
    <div class="grid-item">
      <div class="grid-content">
      <div class="grid-inner-content">
        adf
      </div>
      </div>
    </div>
    <div class="grid-item">
        <div class="grid-content">
        <div class="grid-inner-content">
          adf
        </div>
        </div>
    </div>
    <map-component></map-component>
  </div>
</template>
<style>
  .grid-item{

    color:white
  }
  .grid-item{
    background:#FF2222
  }
  .grid-item>.grid-content{
    height:60px;
    width:60px;
  }
  .grid-inner-content{
  padding:1px;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  text-align:center;
  }
</style>
<script>
import map from './map.vue';
import Packery from 'packery';
import ui from '../services/ui.js';

export default{
  name:'main',
  data:function(){
    return {
      grid:false
    };
  },
  components:[map],
  ready:function(){
    ui.grid = new Packery( '.grid', {
      itemSelector: '.grid-item',
      gutter: 10,
      initLayout: false,
      transitionDuration: false
    });
    ui.grid.layout();
  },

};

</script>
