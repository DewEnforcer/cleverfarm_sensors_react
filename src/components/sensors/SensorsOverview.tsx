import SensorList from "./SensorList";
import SectionTitle from "../general/SectionTitle";
import SectionContainer from "../muiCustom/SectionContainer";
import { getSensors } from "../../services/sensorsService";
import { useEffect } from "react";
import {useSelector, useDispatch} from "react-redux";
import { RootState } from "../../store";
import { setSensors } from "../../slices/sensorSlice";

export default function SensorsOverview() {
  const sensors = useSelector((state: RootState) => state.sensors.value);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchAndSetSensors();
  }, []);


  const fetchAndSetSensors = async () => {
    const sensorsData = await getSensors();
    dispatch(setSensors(sensorsData));
  }
 


  return (
    <SectionContainer maxWidth={false} className="sensors-overview">
      <SectionTitle label="Your sensors"/>
      <SensorList items={sensors}/>
    </SectionContainer>
  )
}
