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
      <aside className="min-w-[15ch] flex-[1_1_30%]">
        <div className="mr-4 divide-y divide-base-800">
          {userPlaylists?.items?.map((playlist) => (
            <Link
              prefetch={false}
              href={`/playlists/${playlist.id}`}
              key={playlist.id}
              className="block px-2 py-2 hover:bg-base-800"
            >
              <p>{playlist.name}</p>
              <p>{playlist.description}</p>
            </Link>
          ))}
        </div>
      </aside>
      <main className="min-w-[25ch] flex-[1_1_70%]">{children}</main>
    </div>
  );
}
