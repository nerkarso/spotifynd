import { siteConfig } from '@/config/site';
import Authenticated from './(auth)/Authenticated';
import ButtonLogin from './(auth)/ButtonLogin';
import Profile from './(user)/Profile';

export default async function page() {
  return (
    <div className="grid min-h-screen place-items-center px-4">
      <div className="w-full max-w-screen-sm overflow-hidden rounded-lg bg-base-900">
        <div className="h-1 bg-base-800">
          <div className="h-full rounded-e bg-primary-500" style={{ width: '0%' }}></div>
        </div>
        <div className="flex flex-col items-center gap-6 px-4 py-12 text-center">
          <h1 className="text-5xl font-bold text-primary-500">{siteConfig.name}</h1>
          <p className="text-lg">{siteConfig.seo.description}</p>
          <div className="text-left">
            <Authenticated fallback={<ButtonLogin />}>
              <Profile />
            </Authenticated>
          </div>
        </div>
      </div>
    </div>
  );
}
