import { Link } from 'react-router-dom';

export const BorderCountryItem = ({ onClose, country }) => {
  const { commonName, countryCode } = country;

  return (
    <Link
      to={`?countryCode=${countryCode}&country=${commonName}`}
      onClick={onClose}
    >
      {commonName}
    </Link>
  );
};
