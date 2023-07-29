import { useEffect, useState, useRef } from "react";
import { createMap, createPopoverHook } from "../../utils/map";
import { Map, Overlay } from 'ol';
import { defaultZoom, pointData } from "../../types/map";

import { Box } from "@mui/material";
import MapPopover from "./MapPopover";

import "ol/ol.css";

interface IOlMapProps {
  pointData: pointData,
  zoomLevel?: defaultZoom
}

export default function OlMap({pointData, zoomLevel}: IOlMapProps) {
  const mapEl = useRef<HTMLDivElement>(null);
  const popoverEl = useRef<HTMLDivElement>(null);

  const [popoverContent, setPopoverContent] = useState("");

  //state not needed
  let map: Map | null = null;
  let popoverOverlay: Overlay | null = null;

  const DEFAULT_ZOOM_LEVEL = 8; //move to config

  useEffect(() => {//hook later
    initializeOlMap();
  }, []);

  const initializeOlMap = () => {
    const targetId = mapEl.current?.id;

    if (!targetId) return;
  
    const newMapData = createMap(targetId, zoomLevel ?? DEFAULT_ZOOM_LEVEL, pointData, mapEl, popoverEl);

    if (!newMapData || !newMapData.map) return;

    const {map: newMap, popover} = newMapData;

    map = newMap;
    
    if (!popover) return;
    
    popoverOverlay = popover;
    createPopoverHook(map, triggerPopover, hidePopover);
  }

  const getPopoverStyle = () => {
    if (!popoverEl.current) return;

    const style = popoverEl.current.style;    

    return style;
  }

  const triggerPopover = (x: number, y: number, properties: any) => {
    const style = getPopoverStyle();

    if (!popoverContent && properties.name) setPopoverContent(properties.name);
    
    if (!style) return;
    
    popoverOverlay?.setPosition([x,y]);

    style.display = "block";
    
  }
  const hidePopover = () => {
    const style = getPopoverStyle();

    if (!style) return;

    style.display = "none"; 
  }

  return (
    <Box className="map-wrapper">
      <div ref={mapEl} id="map" className="map" tabIndex={0}>
        <MapPopover ref={popoverEl} content={popoverContent}/>
      </div> 
    </Box>
  )
}
