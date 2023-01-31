import Image from 'next/image';
import Link from 'next/link';

export default function TracksList({
  className,
  response,
}: {
  className?: string;
  response: SpotifyApi.PlaylistTrackResponse | null;
}) {
  return (
    <div className={className}>
      {response?.items.map(({ track }) => {
        const artists = track?.artists.map((artist) => artist.name);

        return (
          <div className="track" key={track?.id}>
            <Link
              href={`https://open.spotify.com/track/${track?.id}`}
              className="py-2 flex gap-2 hover:bg-primary/30 px-2 rounded"
              target="_blank"
            >
              <div className="w-14 h-14 relative rounded overflow-hidden">
                <Image
                  src={track?.album.images[0].url || ''}
                  fill
                  alt="Album cover"
                  className="object-cover"
                />
              </div>
              <div>
                <p>{track?.name}</p>
                <p className="text-sm opacity-75">{artists?.join(', ')}</p>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
