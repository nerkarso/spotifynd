import { SearchField } from '@/app/draft/(components)/search-field';
import { TrackItem } from '@/app/draft/(components)/track-item';
import { TrackListHeader } from '@/app/draft/(components)/track-list-header';
import Link from 'next/link';

export default function SearchPage() {
  return (
    <main>
      <header className="sticky top-0 z-20 pt-6 mb-6 bg-black border-b border-neutral-50/15">
        <div className="max-w-screen-lg px-4 mx-auto">
          <div className="flex items-center gap-4 mb-2">
            <Link href="/" className="focus:outline-none">
              <img
                src="/icons/android-chrome-192x192.png"
                className="w-10 h-10"
              />
            </Link>
            <div className="flex-grow flex-shrink-0">
              <SearchField className="w-full" />
            </div>
          </div>
          <div className="flex gap-6 overflow-x-auto">
            <button className="h-12 text-sm font-semibold tracking-wide text-white transition duration-300 border-b border-white rounded-none focus:border-primary-500 focus:outline-none">
              Tracks
            </button>
            <button className="h-12 text-sm font-semibold tracking-wide transition duration-300 border-b border-transparent rounded-none focus:border-primary-500 text-neutral-400 hover:text-white focus:outline-none">
              Playlists
            </button>
          </div>
        </div>
      </header>
      <section className="max-w-screen-lg px-2 mx-auto">
        <TrackListHeader />
        {[...Array(20).keys()].map((i) => (
          <TrackItem key={i} i={i} />
        ))}
      </section>
      <footer className="bg-black px-4 py-6 border-t border-neutral-50/15">
        <p className="text-center text-neutral-500 text-sm">&copy; 2022</p>
      </footer>
    </main>
  );
}
