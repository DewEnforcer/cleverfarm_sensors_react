import { Box, Grid } from "@mui/material";
import Sensor from "../../interfaces/Sensor";
import SensorCard from "./SensorCard";

interface ISensorListProps {
  items: Sensor[]
}

export default function SensorList({items}: ISensorListProps) {
  return (
    <Box className={"sensor-list"}>
        <Grid container>
            {items.map(i => 
                <Grid key={i.id}>
                    <SensorCard item={i}/>
                </Grid>    
            )}
        </Grid>
    </Box>
  )
}
