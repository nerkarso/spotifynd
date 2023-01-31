import { siteConfig } from '@/config/site';

export default function head() {
  return (
    <>
      <title>{siteConfig.name}</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
    </>
  );
}
