// pages/_app.tsx
import { AppProps } from 'next/app';
import { Inter } from 'next/font/google';
import '../app/globals.css';
import ClientWrapper from '../app/components/ClientWrapper';

const inter = Inter({ subsets: ['latin'] });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={inter.className}>
      <ClientWrapper>
        <Component {...pageProps} />
      </ClientWrapper>
    </div>
  );
}

export default MyApp;
