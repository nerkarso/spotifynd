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
              className="grid grid-cols-[3.5rem,1fr] gap-3 hover:bg-neutral-800 p-2 rounded-lg items-center"
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
                <p className="text-sm text-neutral-400">
                  {artists?.join(', ')}
                </p>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
