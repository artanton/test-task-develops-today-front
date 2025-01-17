import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const defaultURL = `${process.env.REACT_APP_API_URL}`;

export const generalApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: defaultURL,
  }),

  endpoints: builder => ({
    fetchCountries: builder.query({
      query: () => ({
        url: '',
      }),
    }),

    fetchCountry: builder.query({
      query: ({ countryCode, country }) => ({
        url: `country`,
        params: {
          countryCode,
          country,
        },
      }),
    }),
  }),
});
export const { useFetchCountriesQuery, useFetchCountryQuery } = generalApi;
