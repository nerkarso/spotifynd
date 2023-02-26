import SiteHeader from '@/app/(root)/SiteHeader';
import { DM_Sans as FontSans } from '@next/font/google';
import './globals.css';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: '500',
});

export default function layout({ children }: React.PropsWithChildren) {
  return (
    <html
      lang="en"
      style={{
        ['--font-sans' as string]: fontSans.style.fontFamily,
      }}
    >
      <head />
      <body className="min-h-screen bg-white font-sans text-neutral-900 antialiased dark:bg-neutral-900 dark:text-neutral-50">
        <SiteHeader />
        <main className="p-4">{children}</main>
      </body>
    </html>
  );
}
