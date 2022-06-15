import React from 'react';
import { Map } from '@esri/react-arcgis';
import { loadModules } from 'esri-loader';

function MapContainer() {

  const handleMapLoad = function (map, view) {
    loadModules([
      "esri/widgets/Search",
    ]).then(([Search]) => 
      {
        const searchWidget = new Search({
          view: view
        });
        view.ui.add(searchWidget, {
          position: "top-right"
        });
      },
    );

    loadModules([
      "esri/widgets/BasemapGallery",
    ]).then(([BasemapGallery]) => 
      {
        const basemapGallery = new BasemapGallery({
          view: view,
          container: document.createElement("div")
        });
        loadModules([
          "esri/widgets/Expand"
        ]).then(([Expand]) => 
          {
            const bgexpand = new Expand({
              view: view,
              content: basemapGallery
            });
            view.ui.add(bgexpand, {
              position: "bottom-right"
            });
          },
        );
      },
    );

    loadModules([
      "esri/widgets/Zoom",
    ]).then(([Zoom]) => 
      {
        const zoom = new Zoom({
          view: view
        });
        view.ui.add(zoom, {
          position: "bottom-right"
        });
      },
    );

    loadModules([
      "esri/layers/FeatureLayer",
    ]).then(([FeatureLayer]) => 
      {
        const featureLayer = new FeatureLayer({
          view: view,
          url: "https://gistaru.atrbpn.go.id/arcgis/rest/services/003_RTR_PROVINSI_PULAU_SUMATERA/_1000_PROVINSI_SUMATERA_PR_PERDA/MapServer/0"
        });
        map.add(featureLayer);
      },
    );
    
  };

  return (
    <Map
      className='map-view'
      mapProperties={{ 
        basemap: "topo-vector",}}
      viewProperties={{ 
        center: [106.865036, -6.175110],
        ui: {
          components: [ "attribution" ]
        },
        zoom: 5
      }}
      loaderOptions={{ version: "4.17", css: true }}
      onLoad={handleMapLoad}
    />
  )
}

export default MapContainer