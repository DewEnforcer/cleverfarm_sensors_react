import { ICustomController } from '../../interfaces/CustomController';
import { DefaultZoom, PointData } from '../../types/map';

import { resetMapView } from '../../utils/map';

import OlMap from '../general/OlMap';

interface ISensorMapProps {
    pointData: PointData,
}

export default function SensorMap({pointData} : ISensorMapProps) {
    const SENSOR_ICON_SRC = "/src/assets/map-pointer-xs.png"; //move to cfg
    const DEFAULT_ZOOM: DefaultZoom = 8;

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
