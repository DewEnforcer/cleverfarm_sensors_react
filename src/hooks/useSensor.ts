//temporary placeholder, put the sensors from app and from here into store

import Sensor from "../interfaces/Sensor";
import sensorsMock from "../sensors/sensors.json";

const data = sensorsMock as Sensor[];

const useSensor = (id: string) => {
    const sensors = data;

    const sensor = sensors.find(s => s.id === id);

    return sensor;
}

export default useSensor;