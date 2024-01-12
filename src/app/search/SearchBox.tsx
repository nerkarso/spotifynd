'use client';

import { Input } from '@/ui';

function search(query: string) {
  const collection: NodeListOf<HTMLDivElement> = document.querySelectorAll('.track');
  for (let i = 0; i < collection.length; i++) {
    if (collection[i].innerHTML.toLowerCase().indexOf(query) > -1) {
      collection[i].style.display = 'block';
    } else {
      collection[i].style.display = 'none';
    }
  }
}

export default function SearchBox() {
  return (
    <Input
      type="search"
      placeholder="Search"
      className="w-full max-w-xs"
      onChange={(e) => search(e.target.value.toLowerCase())}
    />
  );
}
