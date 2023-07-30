import { CoordinateArray } from "../types/Map";

interface Sensor {
    id: string,
    name: string,
    description: string | null,
    coordinates: CoordinateArray
}

export default Sensor;