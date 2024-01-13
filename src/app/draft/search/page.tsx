import { SearchField } from '@/app/draft/(components)/search-field';
import { TrackItem } from '@/app/draft/(components)/track-item';
import { TrackListHeader } from '@/app/draft/(components)/track-list-header';
import Link from 'next/link';

export default function SearchPage() {
  return (
    <main>
      <header className="sticky top-0 z-20 mb-6 border-b border-base-50/15 bg-black pt-6">
        <div className="mx-auto max-w-screen-lg px-4">
          <div className="mb-2 flex items-center gap-4">
            <Link href="/" className="focus:outline-none" prefetch={false}>
              <img src="/icons/android-chrome-192x192.png" className="h-10 w-10" />
            </Link>
            <div className="flex-shrink-0 flex-grow">
              <SearchField className="w-full" />
            </div>
          </div>
          <div className="flex gap-6 overflow-x-auto">
            <button className="h-12 rounded-none border-b border-white text-sm font-semibold tracking-wide text-white transition duration-300 focus:border-primary-500 focus:outline-none">
              Tracks
            </button>
            <button className="h-12 rounded-none border-b border-transparent text-sm font-semibold tracking-wide text-base-400 transition duration-300 hover:text-white focus:border-primary-500 focus:outline-none">
              Playlists
            </button>
          </div>
        </div>
      </header>
      <section className="mx-auto max-w-screen-lg px-2">
        <TrackListHeader />
        {Array.from(Array(20).keys()).map((i) => (
          <TrackItem key={i} i={i} />
        ))}
      </section>
      <footer className="border-t border-base-50/15 bg-black px-4 py-6">
        <p className="text-center text-sm text-base-500">&copy; 2022</p>
      </footer>
    </main>
  );
}
