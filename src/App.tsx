import {  lazy} from 'react';

import { Route, Routes } from 'react-router-dom';
import { AppLayout } from './AppLauout';


import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { Loader } from './AppLayoutStyled';
import { useFetchCountriesQuery } from './redux/sliceApi';



const HomePage = lazy(() => import('./Pages/Home/HomePage'));
const CountryPage = lazy(() => import('./Pages/countryPage/countryPage'));
const NotFoundPage = lazy(() => import('./Pages/notFoundPage/NotFoundPage'));

export const App = () => {
  
  const { isLoading } = useFetchCountriesQuery({});
 

  return isLoading ? (
    <Loader>
      <Box sx={{ display: 'flex' }}>
      <CircularProgress />
    </Box>
    </Loader>
  ) : (
<Routes>
  <Route path="/" element={<AppLayout />}>
    <Route index element={<HomePage />} />
    
    <Route path="/country" element={<CountryPage />} />
    
    <Route path="*" element={<NotFoundPage />} />
  </Route>
</Routes>
  );
};
