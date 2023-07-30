import { useParams } from "react-router-dom"
import {useSelector} from "react-redux";

import { Box } from "@mui/material";
import { ArrowBackIosNewTwoTone } from "@mui/icons-material";

import SectionTitle from "../general/SectionTitle";
import Text from "../general/Text";
import SensorCoordinatesBox from "./SensorCoordinatesBox";
import SensorMap from "./SensorMap";
import SectionContainer from "../muiCustom/SectionContainer";
import Navigator from "../general/Navigator";
import SensorsDetailError from "../errors/SensorsDetailError";

import { StoreRootState } from "../../store";

export default function SensorsDetail() {
  const sensors = useSelector((state: StoreRootState) => state.sensors.value);

  const {id} = useParams();

  const sensor = sensors.find(s => s.id === id);
  
  if (!sensor) return <SensorsDetailError/>

  const [latitude, longitude] = sensor.coordinates;

  const pointData = {
    latitude: latitude,
    longitude: longitude,
    name: sensor.name
  }

  
  //i am aware that description is only required in the overview (in card), 
  //but it does not make sense from UI perspective

  return (
    <SectionContainer maxWidth={false}>
      <Navigator to={".."}><ArrowBackIosNewTwoTone fontSize="small"/>To overview...</Navigator>
      <SectionTitle label={sensor?.name ?? "Unknown sensor"} variant="subtitle2"/>
      {sensor?.description && <Text>{sensor.description}</Text>}
      <Box>
        <Text variant="h6">Geography information:</Text>
        <SensorCoordinatesBox latitude={latitude} longitude={longitude}/>
      </Box>
      <SensorMap pointData={pointData}/>
    </SectionContainer>
  )
}
