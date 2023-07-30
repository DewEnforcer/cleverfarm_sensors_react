import { Link } from "react-router-dom"
import { Button } from "@mui/material"

interface INavigatiorProps {
    to: string,
    children: React.ReactNode,
    variant?: "contained" | "outlined" | "text", //couldnt find the according type, ButtonPropsVariantOverrides still threw error
    size?: "small" | "medium" | "large" //couldnt find the according type, ButtonPropsSizeOverrides still threw error
}

export default function Navigator({to, children, variant, size} : INavigatiorProps) {

    if (!variant) variant = "contained";
    if (!variant) size = "small";

  return (
    <Button variant={variant} size={size}>
        <Link className="navigator-link" to={to}>{children}</Link>     
    </Button>
  )
}
