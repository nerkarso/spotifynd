import { siteConfig } from '@/config/site';
import ButtonLogin from './(auth)/ButtonLogin';

export default async function page() {
  return (
    <div className="grid min-h-screen place-items-center px-4">
      <div className="w-full max-w-screen-sm overflow-hidden rounded-lg bg-base-900">
        <div className="h-1 bg-base-800">
          <div className="h-full rounded-e bg-primary-500" style={{ width: '0%' }}></div>
        </div>
        <div className="space-y-6 px-4 py-12 text-center">
          <h1 className="text-5xl font-bold text-primary-500">{siteConfig.name}</h1>
          <p className="text-lg">{siteConfig.seo.description}</p>
          <ButtonLogin />
        </div>
      </div>
    </div>
  );
}
