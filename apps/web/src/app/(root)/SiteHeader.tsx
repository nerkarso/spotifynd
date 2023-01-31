import Authenticated from '@/app/(auth)/Authenticated';
import ButtonLogin from '@/app/(auth)/ButtonLogin';
import Profile from '@/app/(user)/Profile';
import { buttonVariants } from '@/ui';
import { Home } from 'lucide-react';
import Link from 'next/link';

export default function SiteHeader() {
  return (
    <header className="bg-neutral-900/80 backdrop-blur-lg sticky top-0 border-b border-neutral-800 z-20">
      <div className="flex justify-between gap-4 px-4 h-16 items-center">
        <Link
          prefetch={false}
          href="/"
          className={buttonVariants({ variant: 'ghost', size: 'sm' })}
        >
          <Home />
        </Link>
        <Authenticated fallback={<ButtonLogin />}>
          <Profile />
        </Authenticated>
      </div>
    </header>
  );
}
