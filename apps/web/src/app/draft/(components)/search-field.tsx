import { Search } from 'lucide-react';

export function SearchField({ className, ...props }: any) {
  return (
    <div className="relative">
      <div className="absolute inset-0 inline-flex items-center w-8 h-full ml-4">
        <Search className="w-6 h-6" />
      </div>
      <input
        name="q"
        type="search"
        className={`h-12 pr-4 placeholder-white placeholder-opacity-50 transition duration-300 bg-white rounded-full shadow-md pl-14 bg-opacity-10 focus:outline-none hover:bg-opacity-[0.15] focus:bg-opacity-[0.15] ${className}`.trim()}
        placeholder="Artists, songs, or albums"
        {...props}
      />
    </div>
  );
}
