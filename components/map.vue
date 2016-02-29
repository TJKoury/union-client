<template>
  <div class="grid-item grid-test">
    <div id="draghandle" style="background:blue;width:100%;height:100%;cursor:hand"></div>
    <div id='map'></div>
  </div>

</template>
<style>
  @import '../node_modules/leaflet/dist/leaflet.css';
  @import '../node_modules/leaflet-draw/dist/leaflet.draw.css';
  #map{
    position:absolute;
    width:300px;
    height:400px;
  }

  .grid-test{
      width:300px;
      height:400px;
  }

</style>

<script>
import leaflet from 'leaflet';
import leafletdraw from '../node_modules/leaflet-draw/dist/leaflet.draw.js';
import ui from '../services/ui.vue';

export default{
  name:'map-component',
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

    leaflet.Icon.Default.imagePath = 'node_modules/leaflet/dist/images/';

    this.map = leaflet.map('map', {crs:leaflet.CRS.EPSG4326}).setView([0,0], 3);

    leaflet.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://osm.org/copyright">osm</a> contributors'
    }).addTo(this.map);

    var drawnItems = new leaflet.FeatureGroup();
		this.map.addLayer(drawnItems);

    var drawControl = new leaflet.Control.Draw({
			draw: {
				position: 'topleft',
				polygon: {
					title: 'Draw a sexy polygon!',
					allowIntersection: false,
					drawError: {
						color: '#b00b00',
						timeout: 1000
					},
					shapeOptions: {
						color: '#bada55'
					},
					showArea: true
				},
				polyline: {
					metric: false
				},
				circle: {
					shapeOptions: {
						color: '#662d91'
					}
				}
			},
			edit: {
				featureGroup: drawnItems
			}
		});
		this.map.addControl(drawControl);

		this.map.on('draw:created', function (e) {
			var type = e.layerType,
				layer = e.layer;

			if (type === 'marker') {
				layer.bindPopup('A popup!');
			}

			drawnItems.addLayer(layer);
		});

  }
};

</script>
