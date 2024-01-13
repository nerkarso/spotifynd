import { Suspense } from 'react';
import TracksList from '../(tracks)/TracksList';
import { getSession } from '../../lib/getSession';
import { spotifyApi } from '../../lib/spotifyApi';

async function allUserPlaylists() {
  if (!getSession()) return null;

  const userPlaylistsResponse = await spotifyApi.getUserPlaylists({
    limit: 50,
  });

  return userPlaylistsResponse.body;
}

export default async function page() {
  const userPlaylists = await allUserPlaylists();

  return (
    <div className="space-y-4 divide-y divide-base-800">
      {userPlaylists?.items?.slice(0, -1)?.map((playlist: any) => (
        <div key={playlist.id}>
          <div className="sticky top-16 z-10 border-b border-base-800 bg-base-900/80 py-3 backdrop-blur-lg">
            <h4 className="text-lg font-bold">{playlist.name}</h4>
          </div>
          <PlaylistTracks id={playlist.id} />
        </div>
      ))}
    </div>
  );
}

async function allPlaylistTracks(playlistId: string) {
  if (!getSession()) return null;

  const playlistTracksResponse = await spotifyApi.getPlaylistTracks(playlistId);

  return playlistTracksResponse.body;
}

async function TracksListPromise({ promise }: any) {
  const playlistTracks: SpotifyApi.PlaylistTrackResponse = await promise;

  return (
    <TracksList
      className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-2"
      response={playlistTracks}
    />
  );
}

function PlaylistTracks({ id }: any) {
  const playlistTracks = allPlaylistTracks(id);

  return (
    <div className="mt-2">
      <Suspense fallback={<div>Loading...</div>}>
        {/* @ts-ignore */}
        <TracksListPromise promise={playlistTracks} />
      </Suspense>
    </div>
  );
}
