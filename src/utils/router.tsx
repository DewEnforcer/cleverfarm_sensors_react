import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

import Home from '../components/Home';
import SensorsDetail from '../components/sensors/SensorsDetail';
import RootLayout from '../components/layouts/RootLayout';

const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout/> }>
        <Route index element={<Home />} />
        <Route path='details' element={<SensorsDetail />} />
      </Route>
    )
  )


  export default router;