import { Avatar } from "@mui/material";
import { green } from "@mui/material/colors";
import { nameToCapital } from "../../utils/avatar";

interface IDefaultAvatarProps {
    name: string,
    ariaLabel?: string
}

export default function DefaultAvatar({name, ariaLabel}: IDefaultAvatarProps) {
  return (
    <Avatar sx={{ bgcolor: green[500] }} aria-label={ariaLabel}>
    {nameToCapital(name)}
  </Avatar>
  )
}
