import TracksList from '../../(tracks)/TracksList';
import { getSession } from '../../../lib/getSession';
import { spotifyApi } from '../../../lib/spotifyApi';

async function allPlaylistTracks(playlistId: string) {
  if (!getSession()) return null;

  const playlistTracksResponse = await spotifyApi.getPlaylistTracks(playlistId);

  return playlistTracksResponse.body;
}

export default async function page({ params }: any) {
  const playlistTracks = await allPlaylistTracks(params.id);

  return (
    <div className="mt-4">
      <TracksList className="divide-y" response={playlistTracks} />
    </div>
  );
}
