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
export const getSensorById = (id: string) => {
    //mock ep
    return new Promise<Sensor | undefined>((res, rej) => {
        if (!data) return rej(new Error("No sensors data available to look through."));
        
        res(data.find(s => s.id === id))
    })
    //return httpservice.get(epURL, id);
}