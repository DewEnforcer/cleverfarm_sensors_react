import { CoordinateArray } from "../types/map";

interface Sensor {
    id: string,
    name: string,
    description: string | null,
    coordinates: CoordinateArray
}

export default Sensor;