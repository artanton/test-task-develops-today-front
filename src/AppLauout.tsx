import { GlobalStyle } from './globalStyles/GlobalStyle';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Container, Loader } from './AppLayoutStyled';
import { AppBar } from './components/AppBar/AppBar';
import { HelmetProvider } from 'react-helmet-async';

import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

export const AppLayout = () => {
  return (
    <HelmetProvider>
      <Container>
        <AppBar />
        <main>
          <Suspense
            fallback={
              <Loader>
                <Box sx={{ display: 'flex' }}>
                  <CircularProgress />
                </Box>
              </Loader>
            }
          >
            <Outlet />
          </Suspense>
        </main>

        <GlobalStyle />
      </Container>
    </HelmetProvider>
  );
};
