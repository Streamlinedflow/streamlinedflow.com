import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(d, t) {
                var v = d.createElement(t), s = d.getElementsByTagName(t)[0];
                v.onload = function() {
                  if (!document.getElementById('root')) {
                    var root = d.createElement('div');
                    root.id = 'root';
                    d.body.appendChild(root);
                  }
                  if (window.myChatWidget && typeof window.myChatWidget.load === 'function') {
                    window.myChatWidget.load({
                      id: '179bb6d1-0875-4434-ac35-2b8e69cafe34',
                    });
                  }
                };
                v.src = "https://agentivehub.com/production.bundle.min.js";
                v.type = "text/javascript";
                s.parentNode.insertBefore(v, s);
              })(document, 'script');
            `
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
} 