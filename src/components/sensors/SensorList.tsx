import { Box, Grid } from "@mui/material";
import Sensor from "../../interfaces/Sensor";
import SensorCard from "./SensorCard";

interface ISensorListProps {
  items: Sensor[]
}

export default function SensorList({items}: ISensorListProps) {
  return (
    <Box className={"sensor-list"}>
        <Grid container spacing={6}>
            {items.map(i => 
                <Grid item xs={12} md={6} xl={4} key={i.id}>
                    <SensorCard item={i}/>
                </Grid>    
            )}
        </Grid>
    </Box>
  )
}
