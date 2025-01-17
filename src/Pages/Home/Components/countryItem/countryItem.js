import { Link } from 'react-router-dom';

export const CountryItem = ({ country }) => {
  const { name, countryCode } = country;

  return (
    <Link to={`country?countryCode=${countryCode}&country=${name}`}>
      {name}
    </Link>
  );
};
