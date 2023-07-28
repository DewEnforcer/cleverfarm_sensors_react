import { Map } from "ol";
import OSM from "ol/source/OSM";
import TileLayer from "ol/layer/Tile";
import View from "ol/View";

export const createMap = (target: string, mapEl: React.RefObject<HTMLDivElement>) => {
    //prevent duplicate map, should not happen in real env, but check for it anyway
    if (mapEl.current?.children.length) return;
    

    const map = new Map({
        layers: [
          new TileLayer({
            source: new OSM(),
          }),
        ],
        target: target,
        view: new View({
          center: [0, 0],
          zoom: 2,
        }),
    });

    return map;
}