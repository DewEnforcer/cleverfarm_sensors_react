import React from "react";
import Sensor from "../interfaces/Sensor";

const SensorsContext = React.createContext<Sensor[]>([]);

export default SensorsContext;