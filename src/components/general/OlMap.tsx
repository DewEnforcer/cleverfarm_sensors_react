import { useEffect, useState, useRef } from "react";
import { createMap } from "../../utils/map";
import { Map } from 'ol';
import { defaultZoom, pointData } from "../../types/map";

import { Box } from "@mui/material";

import "ol/ol.css";

interface IOlMapProps {
  pointData: pointData,
  zoomLevel?: defaultZoom
}

export default function OlMap({pointData, zoomLevel}: IOlMapProps) {
  const mapEl = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<Map | null>(null); //might not be needed, refactor in the future

  const DEFAULT_ZOOM_LEVEL = 8; //move to config

  useEffect(() => {
    const targetId = mapEl.current?.id;

    if (!targetId) return;

    const newMap = createMap(targetId, zoomLevel ?? DEFAULT_ZOOM_LEVEL, pointData, mapEl);

    if (!newMap) return;

    setMap(newMap);
  }, []);

  return (
    <Box className="wrapper">
      <div ref={mapEl} id="map" className="map" tabIndex={0}></div>
    </Box>
  )
}
