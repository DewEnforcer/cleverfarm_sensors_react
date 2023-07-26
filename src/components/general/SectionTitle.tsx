import { Box, Typography } from "@mui/material";


export default function SectionTitle({label} : {label: String}) {
  return (
    <Box>
      <Typography 
      className="section-title"
      variant="subtitle1"
      noWrap
      sx={{
        mr: 2,
        fontFamily: 'Roboto',
        fontWeight: 700,
        color: "rgb(75,75,75)",
        textDecoration: 'none',
        fontSize: 30
      }}
      >{label}</Typography>
    </Box>
  )
}
