import { siteConfig } from '@/config/site';
import ButtonLogin from './(auth)/ButtonLogin';

export default async function page() {
  return (
    <div className="min-h-screen grid place-items-center px-4">
      <div className="max-w-screen-sm rounded-lg w-full bg-base-900 overflow-hidden">
        <div className="h-1 bg-base-800">
          <div className="h-full bg-primary-500 rounded-e" style={{ width: '0%' }}></div>
        </div>
        <div className="px-4 py-12 text-center space-y-6">
          <h1 className="text-5xl font-bold text-primary-500">{siteConfig.name}</h1>
          <p className="text-lg">{siteConfig.seo.description}</p>
          <ButtonLogin />
        </div>
      </div>
    </div>
  );
}
