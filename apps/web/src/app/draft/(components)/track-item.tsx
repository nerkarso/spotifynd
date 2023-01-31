export function TrackItem(props: any) {
  return (
    <a
      href="#"
      className="grid items-center h-20 grid-flow-col px-4 py-1 my-2 tracking-wider transition duration-200 rounded-lg hover:bg-neutral-800 grid-cols-[2rem_1fr_1fr_1fr]"
      target="_blank"
    >
      <span className="text-white/60">{props.i}</span>
      <div className="flex items-center gap-4">
        <img
          src="https://i.scdn.co/image/ab67616d000048510cc52c57ce1e7e1962f36dcb"
          width="64"
          height="64"
        />
        <div className="flex flex-col">
          <span>Name</span>
          <span className="text-white/60">Name</span>
        </div>
      </div>
      <span className="text-white/60">Album</span>
      <span className="text-white/60">Playlist</span>
    </a>
  );
}
