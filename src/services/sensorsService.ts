import httpservice from "./httpservice";

import sensorsMock from "../sensors/sensors.json";
import Sensor from "../interfaces/Sensor";


const data = sensorsMock as Sensor[];
const epURL = "/sensors";

export const getSensors = () => {
    //mock ep
    return new Promise<Sensor[]>((res) => {
        res(data);
    })
    //return httpservice.get(epURL);
}