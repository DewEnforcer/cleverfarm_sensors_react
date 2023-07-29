import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Sensor from '../../interfaces/Sensor';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import Text from '../general/Text';
import Navigator from '../general/Navigator';
import DefaultAvatar from '../muiCustom/DefaultAvatar';

interface ISensorCardProps {
  item: Sensor
}

export default function SensorCard({item} : ISensorCardProps) {
  const coordinatesToString = (coords: number[]) => {
    if (!coords.length) return ``;

    return `${coords[0]} | ${coords[1]}`;
  }

  return (
    <Card sx={{height: "100%"}}>
      <CardHeader avatar={<DefaultAvatar name={item.name} ariaLabel='sensor-name'/>} title={<Text variant='h6'>{item.name}</Text>} subheader={coordinatesToString(item.coordinates)}>
      </CardHeader>
      <CardContent>
        <Text noWrap>{item.description}</Text>
      </CardContent>
      <CardActions sx={{justifyContent: "flex-end", paddingRight: 2}}>
        <Navigator to={`/details/${item.id}`}><SearchTwoToneIcon/>See sensors details...</Navigator>
      </CardActions>
    </Card>
  )
}
