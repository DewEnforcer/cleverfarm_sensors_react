import { defaultZoom, pointData } from '../../types/map'
import { ICustomController } from '../../interfaces/CustomController';
import { resetMapView } from '../../utils/map';
import OlMap from '../general/OlMap';

interface ISensorMapProps {
    pointData: pointData,
}

export default function SensorMap({pointData} : ISensorMapProps) {
    const SENSOR_ICON_SRC = "/src/assets/map-pointer-xs.png"; //move to cfg
    const DEFAULT_ZOOM: defaultZoom = 8;

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
