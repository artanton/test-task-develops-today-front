import { BorderCountryItem } from './borderCountryItem';

export const BorderCountriesList = ({ onClose, borderCountries }) => {
  return (
    <ul>
      {borderCountries.map(borderCountry => {
        
        return (
          <li key={borderCountry.countryCode}>
            <BorderCountryItem onClose={onClose} country={borderCountry} />
          </li>
        );
      })}
    </ul>
  );
};
