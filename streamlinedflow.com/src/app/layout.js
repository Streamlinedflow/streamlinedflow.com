import { Inter } from 'next/font/google';
import { Poppins } from 'next/font/google';
import { Sora } from 'next/font/google';
import { Quicksand } from 'next/font/google';

import './globals.css';
import { ThemeProvider } from '@/context/ThemeContext';

const inter = Inter({ subsets: ['latin'] });
const poppins = Poppins({ subsets: ['latin'], weight: ['300'] });
const sora = Sora({ subsets: ['latin'], weight: ['300'] });
const quicksand = Quicksand({ subsets: ['latin'], weight: ['300'] });

export const metadata = {
  title: 'StreamlinedFlow - Custom AI Automated Solutions',
  description: 'We help businesses automate workflows and save time with custom AI solutions.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
        <script type="text/javascript" dangerouslySetInnerHTML={{ __html: `
          (function(d, t) {
            var v = d.createElement(t), s = d.getElementsByTagName(t)[0];
            v.onload = function() {
              window.voiceflow.chat.load({
                verify: { projectID: '67f3f250acda53691086d2a9' },
                url: 'https://general-runtime.voiceflow.com',
                versionID: 'production',
                voice: {
                  url: "https://runtime-api.voiceflow.com"
                }
              });
            }
            v.src = "https://cdn.voiceflow.com/widget-next/bundle.mjs"; v.type = "text/javascript"; s.parentNode.insertBefore(v, s);
          })(document, 'script');
        ` }} />
      </body>
    </html>
  );
}
