import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

import Home from '../components/Home';
import SensorsDetail from '../components/sensors/SensorsDetail';
import RootLayout from '../components/layouts/RootLayout';
import sensorDetailLoader from '../loaders/sensorDetailLoader';
import SensorsDetailError from '../components/errors/SensorsDetailError';

const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout/> }>
        <Route index element={<Home />} />
        <Route path='details/:id' element={<SensorsDetail />} loader={sensorDetailLoader} errorElement={<SensorsDetailError/>} />
      </Route>
    )
  )


  export default router;