import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

/* Shazam API를 위한 API 클라이언트 생성 */
export const shazamCoreApi = createApi({
  /* Redux Toolkit Slice의 이름 및 위치 지정 */
  reducerPath: 'shazamCoreApi',
  /* 기본 쿼리 함수 설정 */
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam-core.p.rapidapi.com/',
    /* 요청 헤더에 API 키 추가 */
    prepareHeaders: (headers) => {
      headers.set('X-RapidAPI-Key', 'd08cbefa8bmshb22565f687ad7f2p1b34f0jsn2d793a5d730b');

      return headers;
    },
  }),
  /* 엔드포인트 정의 */
  endpoints: (build) => ({
    /* 장르별 노래 가져오기 */
    getSongsByGenre: build.query({ query: (genre) => `v1/charts/genre-world?genre_code=${genre}` }),
    /* 국가별 노래 가져오기 */
    getSongsByCountry: build.query({ query: (countryCode) => `v1/charts/country?country_code=${countryCode}` }),
    /* 검색어로 노래 및 아티스트 가져오기 */
    getSongsBySearch: build.query({ query: (searchTerm) => `v1/search/multi?search_type=SONGS_ARTISTS&query=${searchTerm}` }),
    /* 아티스트 세부 정보 가져오기 */
    getArtistDetails: build.query({ query: (artistId) => `v2/artists/details?artist_id=${artistId}` }),
    /* 글로벌 차트 가져오기 */
    getTopCharts: build.query({ query: () => 'v1/charts/world' }),
    /* 노래 세부 정보 가져오기 */
    getSongDetail: build.query({ query: ({ songid }) => `v1/tracks/details?track_id=${songid}` }),
    /* 관련된 노래 가져오기 */
    getSongRelated: build.query({ query: ({ songid }) => `v1/tracks/related?track_id=${songid}` }),
  }),
});

/* 생성된 엔드포인트를 각각의 Hook으로 내보내기 */
export const { useGetTopChartsQuery,
  useGetSongDetailQuery,
  useGetSongsByGenreQuery,
  useGetArtistDetailsQuery,
  useGetSongsByCountryQuery,
  useGetSongsBySearchQuery,
  useGetSongRelatedQuery } = shazamCoreApi;
