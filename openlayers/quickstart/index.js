import 'ol/ol.css';
import {Map, View, proj} from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
//import fromLonLat from 'ol/proj';

const map = new Map({
  target: 'map',
  layers: [
    new TileLayer({
      source: new OSM()
    })
  ],
  view: new View({
    //center: fromLonLat([0,0]),
    center: [37.41, 8.82],
    zoom: 4
  })
});
