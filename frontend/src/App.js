import logo from './logo.svg';
import './App.css';
import { Box, Typography } from '@mui/joy';
import Home from './pages/home/home';
import GeneralProvider from './contexts/GeneralContext';



function App() {
  return (
      <GeneralProvider>
        <Box>
          <Home />
        </Box>
      </GeneralProvider>
  );
}

export default App;
