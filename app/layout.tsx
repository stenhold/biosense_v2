// pages/_app.tsx
import { AppProps } from 'next/app';
import { Inter } from 'next/font/google';
import '../app/globals.css';
import ClientWrapper from './components/ClientWrapper';

const inter = Inter({ subsets: ['latin'] });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientWrapper>
          <Component {...pageProps} />
        </ClientWrapper>
      </body>
    </html>
  );
}

export default MyApp;
