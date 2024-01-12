import Link from 'next/link';
import { getSession } from '../../lib/getSession';
import { spotifyApi } from '../../lib/spotifyApi';

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
    <div className="flex flex-wrap">
      <aside className="flex-[1_1_30%] min-w-[15ch]">
        <div className="divide-y divide-base-800 mr-4">
          {userPlaylists?.items?.map((playlist) => (
            <Link
              prefetch={false}
              href={`/playlists/${playlist.id}`}
              key={playlist.id}
              className="block py-2 hover:bg-base-800 px-2"
            >
              <p>{playlist.name}</p>
              <p>{playlist.description}</p>
            </Link>
          ))}
        </div>
      </aside>
      <main className="flex-[1_1_70%] min-w-[25ch]">{children}</main>
    </div>
  );
}
