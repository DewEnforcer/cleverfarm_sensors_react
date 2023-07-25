import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Header from './components/general/Header';
import Home from './components/Home';

import { ThemeProvider, createTheme} from '@mui/material/styles';

import './App.css'

const theme = createTheme({
  palette: {
    primary: {
      main: "#008267"
    },
  },
});

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Header />}>
      <Route index element={<Home />} />
    </Route>
  )
)
function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router}/>
    </ThemeProvider>
  )
}

export default App
