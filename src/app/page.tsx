import { buttonVariants } from '@/ui';
import Link from 'next/link';

export default async function page() {
  return (
    <div className="flex gap-4">
      <Link
        href="/playlists"
        className={buttonVariants({ variant: 'subtle' })}
        prefetch={false}
      >
        My playlists
      </Link>
      <Link
        href="/search"
        className={buttonVariants({ variant: 'subtle' })}
        prefetch={false}
      >
        Search
      </Link>
    </div>
  );
}
