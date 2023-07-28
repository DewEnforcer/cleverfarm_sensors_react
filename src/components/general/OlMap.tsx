import { Button, setRef } from "@mui/material";
import { useEffect, useState, useRef } from "react";
import { createMap } from "../../utils/map";
import { Map } from 'ol';

export default function OlMap() {
  const mapEl = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<Map | null>(null);

  useEffect(() => {
    const newMap = createMap("map", mapEl);

    if (!newMap) return;

    setMap(newMap);
  }, []);

  const handleZoomIn = () => {
    if (!map) return;
    
    const view = map.getView();
    const zoom = view.getZoom();
    if (!zoom) return;
    view.setZoom(zoom + 1);
  }
  const handleZoomOut = () => {
    
    if (!map) return;
    
    const view = map.getView();
    const zoom = view.getZoom(); 
    if (!zoom) return;
    view.setZoom(zoom - 1);
  }

  return (
    <div className="wrapper">
      <div ref={mapEl} id="map" className="map" tabIndex={0}>

      </div>
      <Button onClick={handleZoomIn}>Zoom in</Button>
      <Button onClick={handleZoomOut}>Zoom out</Button>
    </div>
  )
}
