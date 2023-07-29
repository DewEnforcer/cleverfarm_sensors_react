import { RouterProvider } from 'react-router-dom';

import router from "./utils/router";
import theme from "./utils/theme";

import { ThemeProvider} from '@mui/material/styles';
import './App.css'
import { Provider } from 'react-redux';
import store from './store';


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
