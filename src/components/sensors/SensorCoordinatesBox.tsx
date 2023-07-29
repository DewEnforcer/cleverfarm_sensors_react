import { Box } from "@mui/material"
import Text from "../general/Text"

interface ISensorCoordinatesBoxProps {
    latitude: number
    longitude: number,
}

export default function SensorCoordinatesBox({latitude, longitude} : ISensorCoordinatesBoxProps) {
  return (
    <Box>
        <Box>
            <Text>latitude X: </Text>
            <Text>{latitude}</Text>
        </Box>
        <Box>
            <Text>latitude Y: </Text>
            <Text>{longitude}</Text>
        </Box>
    </Box>
  )
}
