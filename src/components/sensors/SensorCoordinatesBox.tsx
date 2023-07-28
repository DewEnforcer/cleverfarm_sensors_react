import { Box } from "@mui/material"
import Text from "../general/Text"

interface ISensorCoordinatesBoxProps {
    lattitudeX: number
    lattitudeY: number,
}

export default function SensorCoordinatesBox({lattitudeX, lattitudeY} : ISensorCoordinatesBoxProps) {
  return (
    <Box>
        <Box>
            <Text>Lattitude X: </Text>
            <Text>{lattitudeX}</Text>
        </Box>
        <Box>
            <Text>Lattitude Y: </Text>
            <Text>{lattitudeY}</Text>
        </Box>
    </Box>
  )
}
