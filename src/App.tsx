import { RouterProvider } from 'react-router-dom';

import router from "./utils/router";
import theme from "./utils/theme";

import store from './store';
import { ThemeProvider} from '@mui/material/styles';
import { Provider } from 'react-redux';

import './App.css'


 function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <RouterProvider router={router}/>
      </Provider>
    </ThemeProvider>
  )
}

export default App
