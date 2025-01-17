


import { useFetchCountriesQuery } from '../../../../redux/sliceApi';
import { CountryItem } from '../countryItem/countryItem';




export const CountryList = () => {
    const {
      data: countries,
      isSuccess
     
    } = useFetchCountriesQuery();

  return (
    <ul>
      {isSuccess&& (countries.map(country => {
        return (
          <li key={country.countryCode}>
            <CountryItem country={country} />
          </li>
        );
      }))}
    </ul>
  );
};