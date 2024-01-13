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
          <div key={track?.id} className="track">
            <Link
              className="grid grid-cols-[3.5rem,1fr] items-center gap-3 rounded-lg p-2 hover:bg-base-800"
              href={`https://open.spotify.com/track/${track?.id}`}
              prefetch={false}
              target="_blank"
            >
              <div className="relative h-14 w-14 overflow-hidden rounded">
                <Image
                  fill
                  alt="Album cover"
                  className="object-cover"
                  src={track?.album.images[0].url || ''}
                />
              </div>
              <div>
                <p>{track?.name}</p>
                <p className="text-sm text-base-400">{artists?.join(', ')}</p>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
