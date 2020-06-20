import 'ol/ol.css';
import GeoJSON from 'ol/format/GeoJSON';
import Map from 'ol/Map';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import View from 'ol/View';
import sync from 'ol-hashed';
import DragAndDrop from 'ol/interaction/DragAndDrop';
import Draw from 'ol/interaction/Draw';
import Modify from 'ol/interaction/Modify';

const source = new VectorSource();
const map = new Map({
    target: 'map-container',
    view: new View({
        center: [0, 0],
        zoom: 2
    })
});

const layer = new VectorLayer({
      source: source
});

map.addInteraction(new DragAndDrop({
      source: source,
      formatConstructors: [GeoJSON]
}));

map.addInteraction(new Modify({
      source: source
}));

map.addInteraction(new Draw({
      type: 'Polygon',
      source: source
}));

const clear = document.getElementById('clear');
clear.addEventListener('click', function() {
  source.clear();
});

const format = new GeoJSON({featureProjection: 'EPSG:3857'});
const download = document.getElementById('download');
source.on('change', function() {
  const features = source.getFeatures();
  const json = format.writeFeatures(features);
  download.href = 'data:text/json;charset=utf-8,' + json;
});

map.addLayer(layer);

sync(map);
