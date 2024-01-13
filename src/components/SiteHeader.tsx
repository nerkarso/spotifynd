import Authenticated from '@/app/(auth)/Authenticated';
import ButtonLogin from '@/app/(auth)/ButtonLogin';
import Profile from '@/app/(user)/Profile';
import { buttonVariants } from '@/ui';
import { Home } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 border-b border-base-800 bg-base-900/80 backdrop-blur-lg">
      <div className="flex h-16 items-center gap-4 px-4">
        <Image src="/img/icon.png" alt="Logo" width={32} height={32} />
        <Link
          prefetch={false}
          href="/"
          className={buttonVariants({ variant: 'ghost', size: 'sm' })}
        >
          <Home />
        </Link>
        <div className="ml-auto">
          <Authenticated fallback={<ButtonLogin />}>
            <Profile />
          </Authenticated>
        </div>
      </div>
    </header>
  );
}
