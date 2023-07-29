import { Link, useLoaderData } from "react-router-dom"
import { Box, Container } from "@mui/material";
import SectionTitle from "../general/SectionTitle";
import Text from "../general/Text";
import SensorCoordinatesBox from "./SensorCoordinatesBox";
import { ISensorDetailLoaderReturnObj } from "../../loaders/sensorDetailLoader";
import OlMap from "../general/OlMap";

export default function SensorsDetail() {
  const SECTION_TITLE_LABEL = "Sensor detail";
  const SENSOR_ICON_SRC = "/src/assets/map-pointer-xs.png"; //move to cfg

  const {sensor} = useLoaderData() as ISensorDetailLoaderReturnObj;
  
  const [latitude, longitude] = sensor.coordinates;

  const pointData = {
    latitude: latitude,
    longitude: longitude,
    iconSource: SENSOR_ICON_SRC,
    name: sensor.name
  }
  
  //i am aware that description is only required in the overview (in card), 
  //but it does not make any sense from UI perspective, in fact, 
  //i believe it should be the other way around if we want the description only in one place

  return (
    <Container maxWidth={false}>
      <Link to={'..'}>Go back</Link>
      <SectionTitle label={SECTION_TITLE_LABEL}/>
      <SectionTitle label={sensor?.name ?? "Unknown sensor"} variant="subtitle2"/>
      {sensor?.description && <Text>{sensor.description}</Text>}
      <Box>
        <SectionTitle label="Geography information" variant="subtitle2"/>
        <SensorCoordinatesBox latitude={latitude} longitude={longitude}/>
      </Box>
      <OlMap pointData={pointData}/>
    </Container>
  )
}
