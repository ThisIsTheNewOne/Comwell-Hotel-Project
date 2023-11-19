import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
// import BookingWidget from "../BookingWidget/BookingWidget";

interface Props {
  children: React.ReactNode;
}
 
export const DefaultLayout: React.FC<Props> = (props: Props) => {
  const { children } = props;

  return (
    <div className="w-full h-screen">
      <Header />
      {/* <BookingWidget /> */}
      {children}
      <Footer />
    </div>
  );
};
