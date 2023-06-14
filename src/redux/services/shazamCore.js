import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const shazamCoreApi = createApi({
  reducerPath: 'shazamCoreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam-core.p.rapidapi.com/',
    prepareHeaders: (headers) => {
      headers.set('X-RapidAPI-Key', 'd08cbefa8bmshb22565f687ad7f2p1b34f0jsn2d793a5d730b');

      return headers;
    },
  }),
  endpoints: (build) => ({
    getSongsByGenre: build.query({ query: (genre) => `v1/charts/genre-world?genre_code=${genre}` }),
    getSongsByCountry: build.query({ query: (countryCode) => `v1/charts/country?country_code=${countryCode}` }),
    getSongsBySearch: build.query({ query: (searchTerm) => `v1/search/multi?search_type=SONGS_ARTISTS&query=${searchTerm}` }),
    getArtistDetails: build.query({ query: (artistId) => `v2/artists/details?artist_id=${artistId}` }),
    getTopCharts: build.query({ query: () => 'v1/charts/world' }),
    getSongDetail: build.query({ query: ({ songid }) => `v1/tracks/details?track_id=${songid}` }),
    getSongRelated: build.query({ query: ({ songid }) => `v1/tracks/related?track_id=${songid}` }),
  }),
});

export const { useGetTopChartsQuery,
  useGetSongDetailQuery,
  useGetSongsByGenreQuery,
  useGetArtistDetailsQuery,
  useGetSongsByCountryQuery,
  useGetSongsBySearchQuery,
  useGetSongRelatedQuery } = shazamCoreApi;
