import { Container } from "@mui/material";
import SensorList from "../SensorList";
import SectionTitle from "../general/SectionTitle";
import { useContext } from "react";
import SensorsContext from "../../context/SensorsContext";

export default function SensorsOverview() {
  const sensors = useContext(SensorsContext);

  return (
    <Container maxWidth={false} className="sensors-overview">
      <SectionTitle label={"Your sensors"}></SectionTitle>
      <SensorList items={sensors}/>
    </Container>
  )
}
