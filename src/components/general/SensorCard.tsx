import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from "@mui/material/Button";

export default function SensorCard() {
  return (
    <Card>
      <CardHeader>
        Hello world
      </CardHeader>
      <CardContent>
        This is my cards content
      </CardContent>
      <CardActions>
        <Button size='small'>
          See details...
        </Button>
      </CardActions>
    </Card>
  )
}
