import React from "react";
import Sensor from "../types/Sensor";

const defVal: Sensor[] = [];

const SensorsContext = React.createContext(defVal);

export default SensorsContext;