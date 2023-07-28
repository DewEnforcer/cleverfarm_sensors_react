import { Typography, TypographyProps } from "@mui/material";

export default function Text({children, ...restprops}: TypographyProps) {
  return (
    <Typography 
        classes={["custom-text"]}
        sx={{
            fontFamily: "Roboto",
            fontSize: 16,
            textDecoration: "none"
        }}
        {...restprops}
    >
        {children}
    </Typography>
  )
}
