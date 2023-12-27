import { useEffect } from "react";

interface Props {
   id: string;
   setDrawerComponent: (drawerComponent: string) => void;
}

const ReservationAdded = (props: Props) => {
   const { id, setDrawerComponent } = props;

   useEffect(() => {
      const timer = setTimeout(() => {
        setDrawerComponent('confirmation');
      }, 5000); // 5000 milliseconds = 5 seconds
  
      // Clean up the timer when the component is unmounted
      return () => clearTimeout(timer);
    }, [setDrawerComponent]);

   return (
      <div className="bg-orange-300 h-[103.5%] justify-center flex items-center -m-[2rem]">This is confirmation</div>
   )
}

export default ReservationAdded;