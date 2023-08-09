import StoreProvider from '@/redux/provider';
import '@/styles/globals.css';
import '@/styles/index.css';
import '@/styles/reset.css';

export default function App({ Component, pageProps }) {
  return (
    <StoreProvider>
      <Component {...pageProps} />
    </StoreProvider>
  );
}
