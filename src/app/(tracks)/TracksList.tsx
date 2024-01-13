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
              prefetch={false}
              href={`https://open.spotify.com/track/${track?.id}`}
              className="grid grid-cols-[3.5rem,1fr] items-center gap-3 rounded-lg p-2 hover:bg-base-800"
              target="_blank"
            >
              <div className="relative h-14 w-14 overflow-hidden rounded">
                <Image
                  src={track?.album.images[0].url || ''}
                  fill
                  alt="Album cover"
                  className="object-cover"
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
