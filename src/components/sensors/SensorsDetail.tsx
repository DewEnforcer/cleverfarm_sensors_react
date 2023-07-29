import { useLoaderData } from "react-router-dom"
import { Box } from "@mui/material";
import SectionTitle from "../general/SectionTitle";
import Text from "../general/Text";
import SensorCoordinatesBox from "./SensorCoordinatesBox";
import { ISensorDetailLoaderReturnObj } from "../../loaders/sensorDetailLoader";
import SensorMap from "./SensorMap";
import SectionContainer from "../muiCustom/SectionContainer";
import Navigator from "../general/Navigator";
import { ArrowBackIosNewTwoTone } from "@mui/icons-material";

export default function SensorsDetail() {
  const {sensor} = useLoaderData() as ISensorDetailLoaderReturnObj;
  
  const [latitude, longitude] = sensor.coordinates;

  const pointData = {
    latitude: latitude,
    longitude: longitude,
    name: sensor.name
  }

  
  //i am aware that description is only required in the overview (in card), 
  //but it does not make any sense from UI perspective, in fact, 
  //i believe it should be the other way around if we want the description only in one place

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
