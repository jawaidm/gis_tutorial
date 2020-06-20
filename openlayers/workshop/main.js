import 'ol/ol.css';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import XYZSource from 'ol/source/XYZ';
import {fromLonLat} from 'ol/proj';

const key = 'pk.eyJ1Ijoiam11c2h0YXEiLCJhIjoiY2tibnN5NnZsMDdwNTJxcG91YmlxcjdkNiJ9.fovPgbwp-Uj-NS-AOfkJww';

const elevation = new XYZSource({
  url: 'https://api.mapbox.com/v4/mapbox.terrain-rgb/{z}/{x}/{y}.pngraw?access_token=' + key,
  crossOrigin: 'anonymous'
});


new Map({
  target: 'map-container',
  layers: [
    new TileLayer({
      source: new XYZSource({
        url: 'http://tile.stamen.com/terrain/{z}/{x}/{y}.jpg'
      })
    }),
    new TileLayer({
      opacity: 0.8,
      source: elevation
    })

  ],
  view: new View({
    center: fromLonLat([-117.1493, 32.6965]), // San Diego
    //center: fromLonLat([74.32936, 31.582045]), //lahore
    zoom: 12
  })
});

