import React, { useState } from 'react';
import Drawer from "react-modern-drawer";

interface Props {
   isOpenSecondDrawer: boolean;
   setIsOpenSecondDrawer: (isOpenSecondDrawer: boolean) => void;
}

const SecondDrawer: React.FC<Props> = (props:Props) => {
    const { isOpenSecondDrawer, setIsOpenSecondDrawer } = props;
 

    function handleClick() {
      setIsOpenSecondDrawer(true);
      }
    
      function handleClose() {
        setIsOpenSecondDrawer(false);
      }
    
     
  return (
    <nav>
      <h1>Business Cards</h1>
      <button onClick={handleClick}>Create new</button>
      <Drawer open={isOpenSecondDrawer} onClose={handleClose} direction="right" size="-60">
       WOOOOOOOOW
      </Drawer>
    </nav>
  );
};

export default SecondDrawer;