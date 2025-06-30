
import { Html, Head, Main, NextScript } from 'next/document';

const SetInitialTheme = () => {
  const code = `
    (function() {
      try {
        function getInitialTheme() {
          const persistedColorPreference = window.localStorage.getItem('darkMode');
          if (typeof persistedColorPreference === 'string') {
            return persistedColorPreference === 'true';
          }
          const mql = window.matchMedia('(prefers-color-scheme: dark)');
          if (typeof mql.matches === 'boolean') {
            return mql.matches;
          }
        }
        const isDark = getInitialTheme();
        if (isDark) {
          document.documentElement.classList.add('dark');
        }
      } catch (e) {
        // Silently fail in case of any error
      }
    })();
  `;
  return <script dangerouslySetInnerHTML={{ __html: code }} />;
};


export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Orbitron:wght@400;500;700;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <SetInitialTheme />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
