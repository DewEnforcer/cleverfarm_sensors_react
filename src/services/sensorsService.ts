import httpservice from "./httpservice";

import sensorsMock from "../sensors/sensors.json";
import Sensor from "../interfaces/Sensor";


const data = sensorsMock as Sensor[];
const epURL = "/sensors";

interface IMockSensorResult<T> {
    data: T | undefined,
    success: boolean,
    error: Error | undefined
}

export const getSensors = () => {
    //mock ep
    return new Promise<IMockSensorResult<Sensor[]>>((res) => {
        let success = true, error;
        
        if (!data) error = new Error("Failed to load sensors data.");

        res({data, success: success, error});
    })
    //return httpservice.get(epURL);
}
export const getSensorById = (id: string) => {
    //mock ep
    return new Promise<IMockSensorResult<Sensor>>((res) => {
        let success = true, error;
        
        if (!data) error = new Error("No sensors data available to look through.");

        res({data: data.find(s => s.id === id), success: success, error});
    })
    //return httpservice.get(`${epURL}/${id}`);
}