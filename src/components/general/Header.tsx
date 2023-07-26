import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <AppBar className='header-main' position="static">
      <Container maxWidth={false}>
        <Toolbar disableGutters>
          <Link to={"/"}>
            <Typography
              variant="h6"
              noWrap
              sx={{
                mr: 2,
                fontFamily: 'Roboto',
                fontWeight: 700,
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              Cleverfarm - Sensors
            </Typography>
          </Link>
        </Toolbar>
      </Container>
    </AppBar>
  );
}