import { LoaderFunctionArgs } from "react-router-dom";
import { getSensorById } from "../services/sensorsService";

import Sensor from "../interfaces/Sensor";

export interface ISensorDetailLoaderReturnObj {
    sensor: Sensor
}

const sensorDetailLoader = async ({params}: LoaderFunctionArgs) => {
    const id = params.id;
    if (!id) throw new Response("Sensor id not provided", {status: 500});

    const {data, success} = await getSensorById(id);

    if (!success) throw new Response("Sensor not found", {status: 404});
    
    return {sensor: data};
}

export default sensorDetailLoader;