import { useEffect, useState } from "react";
import {useSelector, useDispatch} from "react-redux";

import SensorList from "./SensorList";
import SectionTitle from "../general/SectionTitle";
import SectionContainer from "../muiCustom/SectionContainer";

import { getSensors } from "../../services/sensorsService";
import { StoreRootState } from "../../store";
import { setSensors } from "../../slices/sensorSlice";
import Text from "../general/Text";

export default function SensorsOverview() {
  const sensors = useSelector((state: StoreRootState) => state.sensors.value);
  const dispatch = useDispatch();

  const [isError, setIsError] = useState(false);

  useEffect(() => {
    fetchAndSetSensors();
  }, []);


  const fetchAndSetSensors = async () => {
    const {data, success} = await getSensors();
    
    if (!success) return setIsError(true);
    //could at the error to some report tool in the future
    dispatch(setSensors(data));
  }
 


  return (
    <SectionContainer maxWidth={false} className="sensors-overview">
      <SectionTitle label="Your sensors"/>
      {!isError ? <SensorList items={sensors}/> : <Text>Failed to fetch sensor data.</Text>}
    </SectionContainer>
  )
}
