import { Box, Stack } from "@mui/material"
import Text from "../general/Text"

interface ISensorCoordinatesBoxProps {
    latitude: number
    longitude: number,
}

export default function SensorCoordinatesBox({latitude, longitude} : ISensorCoordinatesBoxProps) {
  return (
    <Stack direction={"column"}>
        <Stack direction={"row"} alignItems={"center"}>
            <Text variant="h6">Longitude: </Text>
            <Text marginLeft={"2px"}>{latitude}</Text>
        </Stack>
        <Stack direction={"row"} alignItems={"center"}>
            <Text variant="h6">Latitude: </Text>
            <Text marginLeft={"2px"}>{longitude}</Text>
        </Stack>
    </Stack>
  )
}
