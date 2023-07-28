import { Box, Button } from "@mui/material";
import { Link, useRouteError } from "react-router-dom";
import Text from "../general/Text";
import SectionTitle from "../general/SectionTitle";

export default function SensorsDetailError() {
    let error = useRouteError() as any;

    return (
        <Box className={"error-wrapper sensors-error-wrapper"}>
            <Button>
                <Link to={"/"}>To homepage!</Link>
            </Button>
            <SectionTitle label="Oops! It seems this sensor no longer exists. Please contact support (patrik.medek@email.cz) or navigate back to homepage!"/>
            <Text>Error {error.status}</Text>
            <Text>{error.data}</Text>
        </Box>
    )
}
