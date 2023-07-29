import { Feature, Map, MapEvent, Overlay } from "ol";
import OSM from "ol/source/OSM";
import TileLayer from "ol/layer/Tile";
import View from "ol/View";
import { Point } from "ol/geom";
import Style from "ol/style/Style";
import Icon from "ol/style/Icon";
import VectorSource from "ol/source/Vector";
import VectorLayer from "ol/layer/Vector";
import { useGeographic } from "ol/proj";
import {defaults as defaultControls} from 'ol/control.js';

import { defaultZoom, pointData } from "../types/map";
import { ICustomController } from "../interfaces/CustomController";
import CustomController from "../openlayer/CustomController";

type popoverHideFnType = () => any;
type popoverShowFnType = (x: number, y: number, properties: any) => any;

export const createMap = (target: string, defaultZoom: defaultZoom, pointData: pointData | null, mapEl: React.RefObject<HTMLDivElement>, customControls?: ICustomController[], popoverEl?: React.RefObject<HTMLDivElement>) => {
    //prevent duplicate map, should not happen in real env, but check for it anyway
    const copiedChildren = mapEl.current?.children ? [...mapEl.current.children] : [];
    
    const oldMapEl = copiedChildren.find(c => c.classList.contains("ol-viewport"));
    
    if (oldMapEl) return;

    const layersArr = [];
    let popover;

    layersArr.push(createOSMTileVectorLayer(new OSM()));
    if (pointData) layersArr.push(createPointerVectorLayer(pointData));

    const centerLong = pointData?.longitude ?? 0;
    const centerLat = pointData?.latitude ?? 0;

    useGeographic();
    

    const customControllersComponents = customControls?.map(cC => createCustomController(cC));

    const map = new Map({
        controls: defaultControls().extend(customControllersComponents ?? []),
        layers: layersArr,
        target: target,
        view: new View({
          center: [centerLong, centerLat],
          zoom: defaultZoom,
        }),
    });
    
    if (popoverEl && popoverEl.current && map) popover = createPopoverOverlay(map, popoverEl.current);

    return {map, popover};
}

export const createOSMTileVectorLayer = (source: OSM) => {
  return new TileLayer({source})
}

export const createPopoverHook = (map: Map, showFn: popoverShowFnType, hideFn: popoverHideFnType) => {
  const closePopover = () => {
    hideFn();
  }

  map.on("click", function (evt: any) {
    const feature = map.forEachFeatureAtPixel(evt.pixel, function (feature) {
      return feature;
    });

    if (!feature) return closePopover();

    const [x, y] = evt.coordinate;

    showFn(x,y, feature.getProperties());
  })

  map.on('pointermove', function (e) {
    const pixel = map.getEventPixel(e.originalEvent);
    const hit = map.hasFeatureAtPixel(pixel);

    const target = map.getTarget();
    if (!target || typeof target === "string" || !hit) return;

    target.style.cursor = "pointer";
  })
}

export const createPopoverOverlay = (map: Map, popoverEl: HTMLDivElement) => {
  const popup = new Overlay({
    element: popoverEl,
    positioning: 'bottom-center',
    stopEvent: false,
  });

  map.addOverlay(popup);
  
  return popup;
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

export const createCustomController = (options: ICustomController) => {
    const controller = new CustomController(options)

    return controller;
}
//custom control fns
export const resetMapView = (map: Map, longitude: number, latitude: number, zoom: defaultZoom) => {
  useGeographic();

  map.setView(new View({
      center: [longitude ,latitude],
      zoom: zoom
  }));
}