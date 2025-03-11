import { Space_Grotesk } from 'next/font/google';
import './globals.css';

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export const metadata = {
  title: 'StreamlinedFlow - B2B Growth Systems',
  description: 'We build hands-off growth systems for B2B founders. Automate your lead acquisition and scale your business to 8 figures.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={spaceGrotesk.className}>{children}</body>
    </html>
  );
}
