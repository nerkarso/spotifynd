import SearchBox from './SearchBox';

export default function layout({ children }: any) {
  return (
    <>
      <SearchBox />
      <div className="mt-4">{children}</div>
    </>
  );
}
