import "@/styles/globals.css";
import "react-modern-drawer/dist/index.css";
import { DefaultLayout } from "@/components/Layouts/DefaultLayout";
import MyContext from "@/hooks/useContext/MyContext";
import "@/styles/globals.css";
import "@/styles/hotelListDrawer.css";
import "@/styles/guestsDrawer.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  const contextValue = null; // initial value set to null

  return (
    <MyContext.Provider value={contextValue}>
      <DefaultLayout>
        <Component {...pageProps} />
      </DefaultLayout>
    </MyContext.Provider>
  );
}
