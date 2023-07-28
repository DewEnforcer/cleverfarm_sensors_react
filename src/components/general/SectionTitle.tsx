import { Box, TypographyProps } from "@mui/material";
import Text from "./Text";

interface ISectionTitleProps {
  label: string,
  variant?: "subtitle1" | "subtitle2"
}

export default function SectionTitle({label, variant} : ISectionTitleProps) {
  //main section title by default
  variant = variant ?? "subtitle1";

  //could extract into some general component config file later
  const config: TypographyProps = {
    variant,
    noWrap: true,
    sx: {
      mr: 2,
      fontFamily: 'Roboto',
      fontWeight: 700,
      color: "rgb(75,75,75)",
      textDecoration: 'none',
      fontSize: 30
    }
  }

  return (
    <Box>
      <Text {...config} className="section-title">
        {label}
      </Text>
    </Box>
  )
}
