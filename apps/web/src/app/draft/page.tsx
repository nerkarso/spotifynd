import { SearchField } from '@/app/draft/(components)/search-field';

export default function HomePage() {
  const isLoggedIn = true;

  return (
    <div className="absolute inset-0 grid h-full overflow-y-auto place-items-center">
      <div className="w-full max-w-lg p-6 text-center">
        <h1 className="mb-4 text-5xl font-bold text-primary-500">
          Spotify Search
        </h1>
        <p className="mb-8 text-white text-opacity-50">
          Search for tracks in all your playlists
        </p>
        {isLoggedIn ? (
          <form action="/draft/search">
            <SearchField className="w-full" />
          </form>
        ) : (
          <a href="/api/login">Log in with Spotify</a>
        )}
      </div>
    </div>
  );
}
