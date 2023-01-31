import TracksList from '../(tracks)/TracksList';
import { getSession } from '../../lib/getSession';
import { spotifyApi } from '../../lib/spotifyApi';
import { Suspense } from 'react';

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
    <div className="space-y-4">
      {userPlaylists?.items.map((playlist) => (
        <div
          key={playlist.id}
          className="py-3 px-4 rounded-lg border-base-200 border-2"
        >
          <div className="top-0 sticky py-2 bg-base-100 z-10">
            <h4>{playlist.name}</h4>
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
    <TracksList className="grid grid-cols-4 gap-2" response={playlistTracks} />
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
