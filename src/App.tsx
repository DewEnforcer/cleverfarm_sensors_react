import { RouterProvider } from 'react-router-dom';
import SensorsContext from './context/SensorsContext';

import sensorsMock from "./sensors/sensors.json";
import Sensor from './types/Sensor';

import router from "./utils/router";
import theme from "./utils/theme";

import { ThemeProvider} from '@mui/material/styles';
import './App.css'

const data = sensorsMock as Sensor[];

function App() {
  return (
    <ThemeProvider theme={theme}>
      <SensorsContext.Provider value={data}>
        <RouterProvider router={router}/>
      </SensorsContext.Provider>
    </ThemeProvider>
  )
}

export default App
