import { Typography, TypographyProps } from "@mui/material";

export default function Text({children, ...restprops}: TypographyProps) {
  return (
    <Typography 
        className={"custom-text"}
        fontSize={16}
        sx={{
            fontFamily: "Roboto",
            textDecoration: "none"
        }}
        {...restprops}
    >
        {children}
    </Typography>
  )
}
