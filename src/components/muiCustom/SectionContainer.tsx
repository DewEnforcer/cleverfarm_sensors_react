import { Container, ContainerProps, styled } from "@mui/material"
import theme from "../../utils/theme"

export default function SectionContainer({children, ...restprops}: ContainerProps) {
  const SectionContainer = styled(Container)({
        margin: 0,
        minHeight: "calc(100% - 64px)",
        height: "fit-content",
        backgroundColor: "rgb(250,250,250,0.8)",
        borderBottomLeftRadius: "5px", 
        borderBottomRightRadius: "5px",
        [theme.breakpoints.up("xs")]: {
            padding: "20px"
        },
        [theme.breakpoints.up("md")]: {
            width: "80vw"
        },
   })

  return (
    <SectionContainer {...restprops}>
        {children}
    </SectionContainer>
  )
}
