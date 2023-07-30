import { ICustomController } from '../../interfaces/CustomController';
import { DefaultZoom, PointData } from '../../types/Map';

import { resetMapView } from '../../utils/map';

import OlMap from '../general/OlMap';

import defaultConfig from "../../config/default.json";

interface ISensorMapProps {
    pointData: PointData,
}

export default function SensorMap({pointData} : ISensorMapProps) {
    const SENSOR_ICON_SRC = `/src/assets/${defaultConfig.icons.sensorIcon}`;
    const DEFAULT_ZOOM: DefaultZoom = defaultConfig.DEFAULT_MAP_ZOOM_LEVEL as DefaultZoom;

    const customControls: ICustomController[] = [
        {
            className: "reset-view-controller",
            htmlContent: "R",
            title: "Reset view",
            onClick: resetMapView,
        }
    ]

    const pointDataCopy = structuredClone(pointData);

    pointDataCopy["iconSource"] = SENSOR_ICON_SRC;

    return (
        <OlMap customControls={customControls} zoomLevel={DEFAULT_ZOOM} pointData={pointDataCopy}/>
    )
}
