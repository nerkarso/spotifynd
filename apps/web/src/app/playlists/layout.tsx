import { getSession } from '../../lib/getSession';
import { spotifyApi } from '../../lib/spotifyApi';
import Link from 'next/link';

async function allUserPlaylists() {
  if (!getSession()) return null;

  const userPlaylistsResponse = await spotifyApi.getUserPlaylists({
    limit: 50,
  });

  return userPlaylistsResponse.body;
}

export default async function layout({ children }: any) {
  const userPlaylists = await allUserPlaylists();

  return (
    <div className="flex gap-4">
      <aside className="w-1/4">
        <h1>Playlists</h1>
        <div className="mt-4 divide-y">
          {userPlaylists?.items.map((playlist) => (
            <Link
              href={`/playlists/${playlist.id}`}
              key={playlist.id}
              className="py-1 block hover:bg-primary"
            >
              <p>{playlist.name}</p>
              <p>{playlist.description}</p>
            </Link>
          ))}
        </div>
      </aside>
      <main className="flex-1">{children}</main>
    </div>
  );
}
