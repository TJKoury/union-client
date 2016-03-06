<template>
  <div class="grid">

    <map-component></map-component>
  </div>
</template>
<style>
  .grid{
    z-index:0;
    position:relative; /*z-index for map elements, etc.*/
  }
</style>
<script>

import $ from 'webpack-zepto';
import map from './map.vue';
import gridlist from 'grid-list';
import ui from '../services/ui.vue';


export default{
  name:'main',
  data:function(){
    return {
      grid:false
    };
  },
  components:[map],
  ready:function(){
    window.$ = $;

  },

};

</script>
