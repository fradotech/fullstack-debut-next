import { Container, CssBaseline, ThemeProvider } from '@mui/material';
import React from 'react';
import { ColorModeContext, useMode } from '../../client/styling/theme';
import Sidebar from './Sidebar';
import Topbar from './Topbar';

type MainProps = {
  children: React.ReactNode;
};

const Main: React.FC<MainProps> = ({ children }) => {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app" style={{ display: 'flex', height: '100%' }} >
          <Sidebar />
          <main className="content" style={{ display: 'grid', flexDirection: 'row', height: '100%', width: '100%' }}>
            <Topbar />
            <Container style={{ padding: '3%' }}>
              {children}
            </Container>
          </main>
        </div>
      </ThemeProvider >
    </ColorModeContext.Provider >
  );
};

export default Main;
