import { HiOutlineHashtag, HiOutlineHome, HiOutlinePhotograph, HiOutlineUserGroup } from 'react-icons/hi';

export const genres = [
  { title: 'K-Pop', value: 'K_POP' },
  { title: 'Hip-Hop', value: 'HIP_HOP_RAP' },
  { title: 'Dance', value: 'DANCE' },
  { title: 'Electronic', value: 'ELECTRONIC' },
  { title: 'Soul', value: 'SOUL_RNB' },
  { title: 'Alternative', value: 'ALTERNATIVE' },
  { title: 'Rock', value: 'ROCK' },
  { title: 'Latin', value: 'LATIN' },
  { title: 'Film', value: 'FILM_TV' },
  { title: 'Country', value: 'COUNTRY' },
  { title: 'Worldwide', value: 'WORLDWIDE' },
  { title: 'Reggae', value: 'REGGAE_DANCE_HALL' },
  { title: 'House', value: 'HOUSE' },
  { title: 'Pop', value: 'POP' },
];

export const links = [
  { name: '디스커버', to: '/', icon: HiOutlineHome },
  { name: '딩신의 근처', to: '/around-you', icon: HiOutlinePhotograph },
  { name: '탑 아티스트', to: '/top-artists', icon: HiOutlineUserGroup },
  { name: '탑 차트', to: '/top-charts', icon: HiOutlineHashtag },
];
