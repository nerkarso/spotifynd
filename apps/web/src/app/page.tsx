import Link from 'next/link';

export default async function page() {
  return (
    <div className="flex gap-4">
      <Link href="/playlists" className="btn btn-primary">
        My playlists
      </Link>
      <Link href="/search" className="btn btn-primary">
        Search
      </Link>
    </div>
  );
}
