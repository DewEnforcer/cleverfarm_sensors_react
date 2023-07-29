import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';
import SentimentDissatisfiedTwoToneIcon from '@mui/icons-material/SentimentDissatisfiedTwoTone';
import { useRouteError } from "react-router-dom";
import Text from "../general/Text";
import SectionTitle from "../general/SectionTitle";
import SectionContainer from "../muiCustom/SectionContainer";
import Navigator from '../general/Navigator';
import { Stack } from '@mui/material';

export default function SensorsDetailError() {
    let error = useRouteError() as any;

    return (
        <SectionContainer className={"error-wrapper sensors-error-wrapper"}>
            <Navigator to={"/"}><HomeTwoToneIcon/>To home</Navigator>
            <Stack direction={"row"} alignItems={"center"} gap={"5px"}>
                <SentimentDissatisfiedTwoToneIcon fontSize='large'/>
                <SectionTitle label="Oops! It seems this sensor no longer exists."/>
            </Stack>
            <Text variant='h6'>Please contact support (patrik.medek@email.cz) or navigate back to homepage!</Text>
            <Text>Error {error.status}</Text>
            <Text>{error.data}</Text>
        </SectionContainer>
    )
}
