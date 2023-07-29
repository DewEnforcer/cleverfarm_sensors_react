import { Feature, Map } from "ol";
import OSM from "ol/source/OSM";
import TileLayer from "ol/layer/Tile";
import View from "ol/View";
import { Point } from "ol/geom";
import Style from "ol/style/Style";
import Icon from "ol/style/Icon";
import VectorSource from "ol/source/Vector";
import VectorLayer from "ol/layer/Vector";
import { useGeographic } from "ol/proj";

import { defaultZoom, pointData } from "../types/map";


export const createMap = (target: string, defaultZoom: defaultZoom, pointData: pointData | null, mapEl: React.RefObject<HTMLDivElement>) => {
    //prevent duplicate map, should not happen in real env, but check for it anyway
    if (mapEl.current?.children.length) return;

    const layersArr = [];

    layersArr.push(createOSMTileVectorLayer(new OSM()));
    if (pointData) layersArr.push(createPointerVectorLayer(pointData));

    const centerLong = pointData?.longitude ?? 0;
    const centerLat = pointData?.latitude ?? 0;

    useGeographic()

    const map = new Map({
        layers: layersArr,
        target: target,
        view: new View({
          center: [centerLong, centerLat],
          zoom: defaultZoom,
        }),
    });

    return map;
}

export const createOSMTileVectorLayer = (source: OSM) => {
  return new TileLayer({source})
}

export const createPointerVectorLayer = (mapPointerData: pointData) => {
  const {latitude, longitude, iconSource, name} = mapPointerData;

  const feature = new Feature({
    geometry: new Point([longitude, latitude]),
    name,
  });

  const style = new Style({
    image: new Icon({
      anchor: [0.5, 46],
      anchorXUnits: 'fraction',
      anchorYUnits: 'pixels',
      src: iconSource,
    }),
  });

  feature.setStyle(style);

  const vectorSource = new VectorSource({
    features: [feature],
  });

  const vectorLayer = new VectorLayer({
    source: vectorSource,
  });

  return vectorLayer;
}