export function TrackItem(props: any) {
  return (
    <a
      className="my-2 grid h-20 grid-flow-col grid-cols-[2rem_1fr_1fr_1fr] items-center rounded-lg px-4 py-1 tracking-wider transition duration-200 hover:bg-base-800"
      href="#"
      target="_blank"
    >
      <span className="text-white/60">{props.i}</span>
      <div className="flex items-center gap-4">
        <img
          alt=""
          height="64"
          src="https://i.scdn.co/image/ab67616d000048510cc52c57ce1e7e1962f36dcb"
          width="64"
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
