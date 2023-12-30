import BookingContext from "@/hooks/useContext/BookingContext";
import React, { useContext, useState } from "react";

interface Props {
    isUnsavedChangesDialogOpen: boolean;
    setIsUnsavedChangesDialogOpen: (props: boolean) => void;
    setDrawerComponent: (drawerComponent: string) => void;
    setIsOpenBookingFlowDrawer: (isOpenBookingFlowDrawer: boolean) => void;
}

const DrawerModal = (props: Props) => {

const {isUnsavedChangesDialogOpen, setIsUnsavedChangesDialogOpen, setDrawerComponent, setIsOpenBookingFlowDrawer } = props
const {
    setSelectedPackage,
    setSelectedAddon,
    setTotalPrice,
    setGuestsInfo
  } = useContext(BookingContext);

  const handleClose = () => {
    setIsOpenBookingFlowDrawer(false) 
    setIsUnsavedChangesDialogOpen(false);
    setDrawerComponent("selectedRoom");
    setSelectedPackage(null);
    setSelectedAddon([]);
    setTotalPrice(0);
    setGuestsInfo({ name: "", email: "", telefon: "" })
  }; 

  console.log("Does it go here ???")

  return ( 
    <div >
      {isUnsavedChangesDialogOpen && (
        <div className="fixed top-[0] left-[0] w-full h-full bg-[rgba(0,_0,_0,_0.8)] justify-center items-center z-[9999]">
         <div className="w-full h-full flex flex-col justify-center items-center ">
         <div className="bg-[#fff] w-[21rem] p-[20px] flex flex-col rounded-[9px] font-semibold">
            <h1 className=" text-[22px] leading-[100%] text-center w-full" >Er du sikker på, du vil forlade din booking?</h1>
            <p className="pt-[10px] text-gray-500  text-[14px] text-center w-full my-[20px]">Hvis du vil fortsætte din booking senere, skal du begynde forfra.</p>
            <button  className="bg-[#fff] text-black border border-gray-300 p-[10px] mb-[10px] rounded-[25px] text-[16px]" onClick={() => setIsUnsavedChangesDialogOpen(false)}>
            Nej, forlad ikke
            </button>
            <button className="bg-theme2 text-white p-[13px] rounded-[25px] text-[16px]" onClick={handleClose}>Ja, forlad nu</button>
          </div> 
         </div>
        
        </div>
      )}

      {/* <h1>Page Content</h1> */}
    </div>
  );
};

export default DrawerModal;