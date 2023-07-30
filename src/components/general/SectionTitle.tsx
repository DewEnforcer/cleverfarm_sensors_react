import { Box, TypographyProps } from "@mui/material";
import Text from "./Text";

import defaultConfig from "../../config/default.json";

interface ISectionTitleProps {
  label: string,
  variant?: "subtitle1" | "subtitle2"
}

export default function SectionTitle({label, variant} : ISectionTitleProps) {
  //main section title by default
  variant = variant ?? "subtitle1";

  const defaultStyle = defaultConfig.muiCustomStyles.SectionTitle as TypographyProps;

  const config: TypographyProps = {
    variant,
    ...defaultStyle
  }

  return (
    <Box>
      <Text {...config} className={"section-title"}>{label}</Text>
    </Box>
  )
}
