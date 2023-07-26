import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from "@mui/material/Button";
import Sensor from '../types/Sensor';
import { Avatar } from '@mui/material';
import { blue } from '@mui/material/colors';
import { nameToCapital } from '../utils/card';
import { Link } from 'react-router-dom';

export default function SensorCard({item} : {item: Sensor}) {
  const coordinatesToString = (coords: number[]) => {
    if (!coords.length) return ``;

    return `${coords[0]} | ${coords[1]}`;
  }

  return (
    <Card>
      <CardHeader avatar={
          <Avatar sx={{ bgcolor: blue[500] }} aria-label="sensor-name">
            {nameToCapital(item.name)}
          </Avatar>
        } title={item.name} subheader={coordinatesToString(item.coordinates)}>
      </CardHeader>
      <CardContent>
        {item.description}
      </CardContent>
      <CardActions>
        <Button size='small'>
          <Link to={`/details/${item.id}`}>See sensors details...</Link>
        </Button>
      </CardActions>
    </Card>
  )
}
