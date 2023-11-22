import "@/styles/globals.css";
import "react-modern-drawer/dist/index.css";
import { DefaultLayout } from "@/components/Layouts/DefaultLayout";
import MyContext from "@/hooks/useContext/MyContext";
import "@/styles/globals.css";
import "@/styles/hotelListDrawer.css";
import "@/styles/guestsDrawer.css";
import { LanguageContextProvider } from "@/hooks/useContext/LanguageContext";
import "@/styles/bookingFlow.css";
import type { AppProps } from "next/app";
import { BookingContextProvider } from "@/hooks/useContext/BookingContext";

export default function App({ Component, pageProps }: AppProps) {
  const contextValue = null; // initial value set to null

  return (
    <MyContext.Provider value={contextValue}>
      <LanguageContextProvider>
        <BookingContextProvider>
          <DefaultLayout>
            <Component {...pageProps} />
          </DefaultLayout>
        </BookingContextProvider>
      </LanguageContextProvider>
    </MyContext.Provider>
  );
}
