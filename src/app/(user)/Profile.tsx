import ButtonLogout from '../(auth)/ButtonLogout';
import { spotifyApi } from '../../lib/spotifyApi';
import { cookies } from 'next/headers';
import Image from 'next/image';
import { Suspense } from 'react';

async function getUser() {
  const accessTokenCookie = cookies().get('accessToken');
  if (!accessTokenCookie) return null;
  spotifyApi.setAccessToken(accessTokenCookie.value);

  const user = await spotifyApi.getMe();

  return user.body;
}

export default function Profile() {
  const user = getUser();

  return (
    <Suspense fallback={<div>Loading...</div>}>
      {/* @ts-ignore */}
      <UserProfile promise={user} />
    </Suspense>
  );
}

async function UserProfile({ promise }: any) {
  const user: SpotifyApi.CurrentUsersProfileResponse = await promise;

  return (
    <div className="flex items-center gap-4">
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 relative rounded-full overflow-hidden">
          <Image
            src={user.images?.[0].url || ''}
            fill
            alt="Avatar"
            className="object-cover"
          />
        </div>
        <div className="hidden sm:block">
          <p className="text-sm">{user.display_name}</p>
          <p className="text-xs text-base-400">{user.email}</p>
        </div>
      </div>
      <ButtonLogout />
    </div>
  );
}
