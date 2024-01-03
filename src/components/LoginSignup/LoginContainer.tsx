import React, { useState, ChangeEvent, FormEvent, useContext, useEffect, useRef } from "react";
import Drawer from "react-modern-drawer";
import SignupDrawer from "./SignupDrawer";
import { loginUser, logoutUser } from "@/services/firebase-service";
import BookingContext from "@/hooks/useContext/BookingContext";
import { useCurrentUser } from "@/hooks/userStorage";

interface Props {
  setShowLoginContainer: (props: any) => void;
}

const LoginContainer: React.FC<Props> = (props: Props) => {
  const { setShowLoginContainer } = props;
  const [isOpenSignupDrawer, setIsOpenSignupDrawer] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setGuestsInfo, guestInfo } = useContext(BookingContext);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const currentUser = useCurrentUser();

  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const loginContainerRef = useRef<HTMLDivElement>(null);
  const emptyGuestObject = {
    name: "",
    email: "",
    telefon: ""
  }


  function handleClick() {
    setIsOpenSignupDrawer(true);
  }

  function handleClose() {
    setIsOpenSignupDrawer(false);
  }

  const handleEmailChange = (event: any) => {
    const newEmail = event.target.value;
    setEmail(newEmail);
  

    if (!/\S+@\S+\.\S+/.test(newEmail)) {
      setEmailError('Please enter a valid email.');
    } else {
      setEmailError('');
    }
  };

  const handlePasswordChange = (event: any) => {
    const newPassword = event.target.value;
    setPassword(newPassword);
  
    if (newPassword.length < 8) {
      setPasswordError('Password should be at least 8 characters long.');
    } else {
      setPasswordError('');
    }
  };

  const handleSubmit = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    const data = {
      email,
      password,
    };

    const response = await loginUser(data);

    console.log("This is the error", response)

    if( response === undefined) {
      setPasswordError('Wrong password or email.');
      return
    } 

    const user = response.user

 

    const name = user.fullname
    const email2 = user.userId
    const phone2 = user.phoneNr
    const newGuestInfo = {
      name: name,
      email: email2,
      telefon: phone2
    }

    setGuestsInfo(newGuestInfo)
    // const user2 = currentUser; 
    setIsLoggedIn(true);
    setShowLoginContainer(false)
   
  }

  const handleLogout = () => {
    logoutUser();
    setGuestsInfo(emptyGuestObject)
    setIsLoggedIn(false);
    setShowLoginContainer(false)
    window.location.replace("./")
  }

  useEffect(() => {
    const user = currentUser; 
    
    if (user) {
     setIsLoggedIn(true);
     setShowLoginContainer(false)
    } else {
     setGuestsInfo(emptyGuestObject)
     setIsLoggedIn(false);
     setShowLoginContainer(false)
    }
  }, [currentUser]);
      
  function handleGoToDashboard() {
     window.location.replace("./hotels");
  }

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (loginContainerRef.current && !loginContainerRef.current.contains(event.target as Node)) {
        setShowLoginContainer(false);
      }
    }
  
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className={`fixed top-[84px] left-[0] w-full h-full ${!isOpenSignupDrawer ? 'bg-[rgba(0,0,0,0.8)]' : 'bg-transparent'} justify-center items-center z-[9999]`}>
        <div ref={loginContainerRef}  className="fixed left-[93%]  logInMainContainer">
          {isLoggedIn ? (
            // If user is logged in, show buttons for dashboard and logout
            <div className="logInContainer font-semibold absolute">
              <div className="py-5 flex flex-col w-full px-8 gap-y-4">
                <div className="contents">
                  {/* <h2 className="text-black mb-5">Hi, {currentUser?.fullname}</h2> */}
                  <h2 className="text-black mb-5">Hi, {currentUser?.fullname ?? guestInfo.name}</h2>
                  <button onClick={handleGoToDashboard} className="body w-full rounded-full font-semibold leading-none md:w-auto md:px-10 md:transition max-md:transition-opacity h-[52px] opacity-100 bg-theme text-white hover:lg:bg-theme-80">
                    <span className="flex items-center gap-x-[7px] justify-center">
                      <span>Go to dashboard</span>
                    </span>
                  </button>
                  <button onClick={handleLogout} className="body w-full rounded-full font-semibold leading-none md:w-auto md:px-10 md:transition max-md:transition-opacity h-[52px] opacity-100 bg-red-400 text-white hover:lg:bg-theme-80">
                    <span className="flex items-center gap-x-[7px] justify-center">
                      <span>Log out</span>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          ) : (
            // If user is not logged in, show the login form and signup drawer
            <div>
              <div className="logInContainer font-semibold absolute">
                <form id="loginForm">
                  {/* <input type="email" name="email" placeholder="Email" value={email} onChange={handleEmailChange} />
                  <input type="password" name="password" placeholder="Adgangskode" value={password} onChange={handlePasswordChange} /> */}
                  <input type="email" name="email" placeholder="Email" value={email} onChange={handleEmailChange} />
                    {emailError && <div className="error-message">{emailError}</div>}

                  <input type="password" name="password" placeholder="Adgangskode" value={password} onChange={handlePasswordChange} />
                    {passwordError && <div className="error-message">{passwordError}</div>}
                  <div className="flex flex-col gap-y-1 text-sm">
                    <span>Har du glemt din adgangskode?</span>
                    <button type="button" className="text-theme whitespace-nowrap text-left underline">
                      Nulstil adgangskode
                    </button>
                  </div>
                </form>
                <div className="input-status text-sm mt-2 mb-2">
                  <div className="flex gap-y-1 flex-col">
                    <span>Har du ikke en profil?</span>
                    <button onClick={handleClick} type="button" className="text-theme whitespace-nowrap text-left underline">
                      Tilmeld dig Comwell Club
                    </button>
                  </div>
                </div>
                <div className="py-5 flex flex-col w-full px-8 gap-y-4">
                  <div className="contents">
                    <button onClick={(e) => handleSubmit(e)} className="body w-full rounded-full font-semibold leading-none md:w-auto md:px-10 md:transition max-md:transition-opacity h-[52px] opacity-100 bg-theme text-white hover:lg:bg-theme-80">
                      <span className="flex items-center gap-x-[7px] justify-center">
                        <span>Log ind</span>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
              <Drawer className="signupDrawer font-semibold" open={isOpenSignupDrawer} onClose={handleClose} direction="right" size={390}>
            <div className="signupContainer">
              <div className="header">
                <div className="top">
                  <h1>Tilmeld dig Comwell Club</h1>
                  <button className="closeButton" onClick={handleClose}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" className="w-[16px] h-[16px]">
                      <path stroke="currentColor" strokeWidth="1.5" d="M2.62 13.38 12.99 3.01M13.38 13.38 3.01 3.01"></path>
                    </svg>
                  </button>
                </div>
                <p className="text-sm">Bliv gratis medlem af vores Comwell Club, og få point hver gang du bor hos os. Du modtager også 25 point, når du opretter dig.</p>
              </div>
              <SignupDrawer />
            </div>
              </Drawer>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default LoginContainer;
