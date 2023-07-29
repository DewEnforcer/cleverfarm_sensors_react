import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Link } from 'react-router-dom';
import Text from './Text';

export default function Header() {
  return (
    <AppBar className='header-main' position="sticky">
      <Toolbar disableGutters>
        <Link to={"/"}>
          <Text fontSize={20} variant='h6' marginLeft={5}>Cleverfarm - Sensors</Text>
        </Link>
      </Toolbar>
    </AppBar>
  );
}