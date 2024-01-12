import '@/styles/globals.css';

import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';
import { Metadata } from 'next';
import { DM_Sans as FontSans } from 'next/font/google';

export const metadata: Metadata = {
  title: siteConfig.name,
  icons: {
    icon: '/img/icon.png',
  },
};

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export default function layout({ children }: React.PropsWithChildren) {
  return (
    <html lang="en">
      <head />
      <body
        className={cn(
          'min-h-screen font-sans antialiased dark:bg-base-900 dark:text-base-50',
          fontSans.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
