import { spotifyApi } from './spotifyApi';
import { cookies } from 'next/headers';

export function getSession() {
  const accessTokenCookie = cookies().get('accessToken');

  if (!accessTokenCookie) return false;

  spotifyApi.setAccessToken(accessTokenCookie.value);

  return true;
}
