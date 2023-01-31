'use client';

function search(query: string) {
  const collection: NodeListOf<HTMLDivElement> =
    document.querySelectorAll('.track');
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
    <input
      type="search"
      placeholder="Search"
      className="input w-full max-w-xs border-2 border-base-200 rounded-lg"
      onChange={(e) => search(e.target.value.toLowerCase())}
    />
  );
}
