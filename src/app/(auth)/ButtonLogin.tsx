'use client';

import { SPOTIFY_CLIENT_ID, SPOTIFY_REDIRECT_URL } from '@/config/env';
import { Button } from '@/ui';
import { LogIn } from 'lucide-react';
import queryString from 'query-string';

export default function ButtonLogin() {
  async function handleLogin() {
    const qs = queryString.stringify(
      {
        client_id: SPOTIFY_CLIENT_ID,
        response_type: 'code',
        redirect_uri: SPOTIFY_REDIRECT_URL,
        scope: [
          'streaming',
          'user-read-email',
          'user-read-private',
          'user-library-read',
          'user-library-modify',
          'user-read-playback-state',
          'user-modify-playback-state',
        ].join('%20'),
      },
      {
        encode: false,
      }
    );
    const url = `https://accounts.spotify.com/authorize?${qs}`;
    // Open URL
    window.location.href = url;
  }

  return (
    <Button className="gap-2 px-3" variant="subtle" onClick={handleLogin}>
      <LogIn className="flex-shrink-0" size={16} />
      Login
    </Button>
  );
}
