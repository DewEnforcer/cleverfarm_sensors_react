import { Paper } from "@mui/material";
import {forwardRef} from "react";
import Text from "./Text";

interface IMapPopoverProps {
    content: string
}
export type Ref = HTMLDivElement;

export default forwardRef<Ref, IMapPopoverProps>((props, ref) => {
    return (
        <Paper sx={{padding: "10px"}} elevation={3} ref={ref} className="map-popover">
            <Text>{props.content}</Text>
        </Paper>
    )
})