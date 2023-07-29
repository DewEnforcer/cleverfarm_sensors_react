import { Container, styled } from "@mui/material";
import Header from "../general/Header"
import {Outlet} from "react-router-dom";
import theme from "../../utils/theme";

const RootContainer = styled(Container)({
  padding: 0,
  minHeight: "100vh",
  display: "flex",
  flexFlow: "column nowrap",
  alignItems: "center",
  [theme.breakpoints.up("xs")]: {
    padding: 0
  }
})

function RootLayout() {
  return (
    <RootContainer maxWidth={false}>
      <Header/>
      <Outlet/>
    </RootContainer>
  )
}

export default RootLayout
