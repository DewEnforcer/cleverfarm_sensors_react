import SensorList from "./SensorList";
import SectionTitle from "../general/SectionTitle";
import { useContext } from "react";
import SensorsContext from "../../context/SensorsContext";
import SectionContainer from "../muiCustom/SectionContainer";

export default function SensorsOverview() {
  const sensors = useContext(SensorsContext);

  return (
    <SectionContainer maxWidth={false} className="sensors-overview">
      <SectionTitle label="Your sensors"/>
      <SensorList items={sensors}/>
    </SectionContainer>
  )
}
