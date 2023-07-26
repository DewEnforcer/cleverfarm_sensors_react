import { Box, Grid } from "@mui/material";
import CardList from "./general/CardList";
import Sensor from "../types/Sensor";
import SensorCard from "./SensorCard";

export default function SensorList({items}: {items: Sensor[]}) {
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
