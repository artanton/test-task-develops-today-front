import { GlobalStyle } from '../../globalStyles/GlobalStyle';

import { useState } from 'react';

import TemporaryDrawer from './Component/swipeableEdgeDrawer/SwipeableEdgeDrawer';
import { ChartContainer, Container, CountryInfo, DrawlerBtn } from './CountryPageStyled';

import { Helmet } from 'react-helmet-async';

import Button from '@mui/material/Button';
import { useFetchCountryQuery } from '../../redux/sliceApi';
import { errorHandler } from '../../helpers/helper';
import { useLocation } from 'react-router-dom';
import BasicLineChart from './Component/lineChart/BasicLineChart';

const Countries = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  const countryCode = searchParams.get('countryCode');
  const country = searchParams.get('country');
  const { data: countryData, isLoading, isSuccess, error } = useFetchCountryQuery(
    {
      countryCode,
      country,
    }
  );

  const [open, setOpen] = useState(false);

  const toggleDrawer = newOpen => () => {
    setOpen(newOpen);
  };

  if (error) {
    errorHandler(error);
    return <p>Something went wrong. Please try again later.</p>;
  }



  return (
    <Container>
      {isSuccess && countryData &&(
        <>
          <Helmet>
            <title>{countryData.countryInfo.commonName}</title>
          </Helmet>
          <CountryInfo>
            <div>
            <img
                src={countryData.flag?.data?.flag}
                alt={`${countryData.flag?.data?.name} flag`}
                width="70"
              />
            </div>
            <h1>{countryData.countryInfo.commonName}</h1>
          </CountryInfo>
          <ChartContainer>
          <BasicLineChart population ={countryData.population.data.populationCounts}/>
          </ChartContainer>
          
          <DrawlerBtn style={{ zIndex: 0, padding: '40px' }}>
            <Button variant="contained" onClick={toggleDrawer(true)}>
              Border Countries
            </Button>
          </DrawlerBtn>
          <TemporaryDrawer
            borderCountries={countryData.countryInfo}
            open={open}
            onClose={toggleDrawer(false)}
          />
        </>
      )}

      <GlobalStyle />
    </Container>
  );
};
export default Countries;
