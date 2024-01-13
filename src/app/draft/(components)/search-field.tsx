import { Search } from 'lucide-react';

export function SearchField({ className, ...props }: any) {
  return (
    <div className="relative">
      <div className="absolute inset-0 ml-4 inline-flex h-full w-8 items-center">
        <Search className="h-6 w-6" />
      </div>
      <input
        name="q"
        type="search"
        className={`h-12 rounded-full bg-white bg-opacity-10 pl-14 pr-4 placeholder-white placeholder-opacity-50 shadow-md transition duration-300 hover:bg-opacity-[0.15] focus:bg-opacity-[0.15] focus:outline-none ${className}`.trim()}
        placeholder="Artists, songs, or albums"
        {...props}
      />
    </div>
  );
}
