import React from "react";
import Sensor from "../types/Sensor";

const SensorsContext = React.createContext<Sensor[]>([]);

export default SensorsContext;