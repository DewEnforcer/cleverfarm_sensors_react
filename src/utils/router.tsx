import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

import SensorsDetail from '../components/sensors/SensorsDetail';
import RootLayout from '../components/layouts/RootLayout';
import sensorDetailLoader from '../loaders/sensorDetailLoader';
import SensorsDetailError from '../components/errors/SensorsDetailError';
import SensorsOverview from '../components/sensors/SensorsOverview';

const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout/> }>
        <Route index element={<SensorsOverview />} />
        <Route path='details/:id' element={<SensorsDetail />} loader={sensorDetailLoader} errorElement={<SensorsDetailError/>} />
      </Route>
    )
  )


  export default router;