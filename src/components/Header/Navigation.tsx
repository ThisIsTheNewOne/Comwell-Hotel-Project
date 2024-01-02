import React, { useRef, useEffect, useContext } from "react";
import LoginContainer from "../LoginSignup/LoginContainer";
import BookingContext from "@/hooks/useContext/BookingContext";
import { currentUser } from "@/hooks/userStorage";

interface Props {
  showLoginContainer: boolean
  setShowLoginContainer:(props: any) => void
}

const Navigation: React.FC<Props> = (props: Props) => {
  // const [showLoginContainer, setShowLoginContainer] = useState(false);
  const {showLoginContainer, setShowLoginContainer} = props
  const { guestInfo } = useContext(BookingContext)
  const containerRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
  
    function handleClickOutside(event: MouseEvent) {
     console.log("Whatmight this be in the end??", event.target)
      if (containerRef.current && event.target instanceof Node && !containerRef.current.contains(event.target)) {
        setShowLoginContainer(false);
      } else  if(guestInfo.name.length > 0) {
        setShowLoginContainer(false);
      }

     
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [guestInfo]);

  return (
    <nav className="flex justify-end pr-10 font-medium text-white">
      <ul className="flex items-center gap-9">
        <li>Lokationer</li>
        <li className="relative">
          <button className="flex items-center gap-x-1.5 pl-4 pr-2 md:px-0 py-4" onClick={() => setShowLoginContainer(!showLoginContainer)}>
            <div className="whitespace-nowrap">
            <span>{currentUser?.fullname || "Profil"}</span>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" className="w-5 lg:w-4">
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M8.334.75a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5ZM6.743 2.909a2.25 2.25 0 1 1 3.181 3.182 2.25 2.25 0 0 1-3.181-3.182Zm.09 5.841a3.75 3.75 0 0 0-3.75 3.75v2.75h10.501V12.5a3.75 3.75 0 0 0-3.75-3.75h-3Zm5.25 5V12.5a2.249 2.249 0 0 0-2.25-2.25h-3a2.25 2.25 0 0 0-2.25 2.25v1.25h7.5Z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          <dialog ref={containerRef} open={showLoginContainer}>
            <LoginContainer />
          </dialog>

          {/* <button type="button" aria-label="Luk profil menu" className="fixed top-[85px] left-0 w-full h-full bg-black/80 transition !duration-100 !ease-out !scale-100 !delay-[0] opacity-0 pointer-events-none invisible" data-v-636226b5=""></button> */}
        </li>
        <li>Menu</li>
      </ul>
    </nav>
  );
};

export default Navigation;
