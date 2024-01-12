'use client';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/ui';
import { useRouter } from 'next/navigation';

export default function PlaylistSelector({ items }: any) {
  const router = useRouter();

  return (
    <Select
      onValueChange={(value) => {
        router.push(`/playlists/${value}`);
      }}
    >
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a paylist" />
      </SelectTrigger>
      <SelectContent>
        {items?.map((playlist: any) => (
          <SelectItem value={playlist.id} key={playlist.id}>
            {playlist.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
