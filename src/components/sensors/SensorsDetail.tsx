import { useContext } from "react";
import { useParams } from "react-router-dom"
import SensorsContext from "../../context/SensorsContext";
import { Container } from "@mui/material";

export default function SensorsDetail() {
  const {id} = useParams(); //sensor id

  const sensors = useContext(SensorsContext);
  const sensor = sensors.find(s => s.id === id);


  return (
    <Container>
      {sensor?.name}
    </Container>
  )
}
