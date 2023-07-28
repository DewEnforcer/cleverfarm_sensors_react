import { useContext } from "react";
import { useParams } from "react-router-dom"
import SensorsContext from "../../context/SensorsContext";
import { Container } from "@mui/material";
import SectionTitle from "../general/SectionTitle";

export default function SensorsDetail() {
  const {id} = useParams(); //sensor id

  const SECTION_TITLE_LABEL = "Sensor detail";

  const sensors = useContext(SensorsContext);
  const sensor = sensors.find(s => s.id === id);




  return (
    <Container maxWidth={false}>
      <SectionTitle label={SECTION_TITLE_LABEL}/>
      <SectionTitle label={sensor?.name ?? "Unknown sensor"} variant="subtitle2"/>
    </Container>
  )
}
