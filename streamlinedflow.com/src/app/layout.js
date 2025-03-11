import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'StreamlinedFlow - B2B Growth Systems',
  description: 'We build hands-off growth systems for B2B founders. Automate your lead acquisition and scale your business to 8 figures.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
