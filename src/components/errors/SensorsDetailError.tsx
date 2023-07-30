import { useRouteError } from "react-router-dom";

import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';
import SentimentDissatisfiedTwoToneIcon from '@mui/icons-material/SentimentDissatisfiedTwoTone';
import { Stack } from '@mui/material';

import Text from "../general/Text";
import SectionTitle from "../general/SectionTitle";
import Navigator from '../general/Navigator';
import SectionContainer from "../muiCustom/SectionContainer";

import { RouteErrorType } from '../../types/RouteErrorType';

export default function SensorsDetailError() {
    let error = useRouteError() as RouteErrorType;
    
    const isErrorTrace = typeof error === "undefined";
    
    return (
        <SectionContainer className={"error-wrapper sensors-error-wrapper"}>
            <Navigator to={"/"}><HomeTwoToneIcon/>To home</Navigator>
            <Stack direction={"row"} alignItems={"center"} gap={"5px"}>
                <SentimentDissatisfiedTwoToneIcon fontSize='large'/>
                <SectionTitle label="Oops! It seems we ran into some problems while loading your sensors data."/>
            </Stack>
            <Text variant='h6'>Please contact support (patrik.medek@email.cz) or navigate back to homepage!</Text>
            {isErrorTrace && <Text>Unknown error!</Text>}
            {!isErrorTrace && <>
                <Text>Error {error.status}</Text>
                <Text>{error.data}</Text>
            </>}
        </SectionContainer>
    )
}
