import MyContext from '@/hooks/useContext/MyContext'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  const contextValue = null; // initial value set to null

  return (
    <MyContext.Provider value={contextValue}>
       <Component {...pageProps} />
    </MyContext.Provider>
  );
}
