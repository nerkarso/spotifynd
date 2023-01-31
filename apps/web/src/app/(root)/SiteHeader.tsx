import Authenticated from '@/app/(auth)/Authenticated';
import ButtonLogin from '@/app/(auth)/ButtonLogin';
import Profile from '@/app/(user)/Profile';
import Link from 'next/link';

export default function SiteHeader() {
  return (
    <header className="flex justify-between gap-4 p-4">
      <div>
        <Link href="/" className="btn btn-secondary">
          Home
        </Link>
      </div>
      <Authenticated fallback={<ButtonLogin />}>
        <Profile />
      </Authenticated>
    </header>
  );
}
