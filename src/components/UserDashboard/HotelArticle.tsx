import React, { useState } from "react";
import Drawer from "react-modern-drawer";
import RoomArticle from "./RoomArticle";
import EditHotelDrawer from "./EditHotelDrawer";
import AddRoomDrawer from "./AddRoomDrawer";

interface HotelArticleProps {
    id: string;
    hotelName: string;
    city: string;
    isSelected: boolean;
    onClick: () => void;
  }

  const HotelArticle: React.FC<HotelArticleProps> = (props: HotelArticleProps) => {
  // All of the state
  const { id, hotelName, city, isSelected, onClick } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenEditHotelDrawer, setIsOpenEditHotelDrawer] = useState(false);
  const [isDeleteBoxVisible, setIsDeleteBoxVisible] = useState(false);
  const [isOpenAddRoomDrawer, setIsOpenAddRoomDrawer] = useState(false);
  const combinedClassName = `hotelButton ${isSelected ? "selected" : ""}`;


  function handleAddRoomDrawer() {
      console.log("edit hotel drawer", isOpenAddRoomDrawer);
      setIsOpenAddRoomDrawer(true);
    }

  function handleClick() {
    console.log("Hello from create new button", isOpen);
    setIsOpen(true);
  }

  function handleEditHotelDrawer() {
    console.log("edit hotel drawer", isOpenEditHotelDrawer);
    setIsOpenEditHotelDrawer(true);
  }
 
  function handleClose() {
    setIsOpen(false);
  }

  function handleDeleteClick() {
    setIsDeleteBoxVisible(true);
  }
  
  function handleCancelClick() {
    setIsDeleteBoxVisible(false);
  }

  const handleDeleteConfirmation = async () => {
    console.log(id);
    console.log(hotelName)

    try {
      const response = await fetch("http://localhost:3006/" + "hotel/" + id, {
          method: 'DELETE',
      });
      const result = await response.text();
      console.log(result);
      if(result.includes("deleted")){
          location.reload();
      }
      } catch (error) {
      console.error('Error deleting destination:', error);
      }   
  }

  return (
    <>
    <article className="hotelArticle relative col-span-6 md:col-span-2">
                <button className="absolute inset-0 z-10" onClick={handleClick}></button>
                <div className="relative aspect-[1.45/1] overflow-hidden rounded-[5px] md:aspect-[1.6/1] z-0">
                  <div className="relative block h-full w-full overflow-hidden bg-gray-200 inset-0">
                    <picture>
                    <img src="https://raw.githubusercontent.com/ThisIsTheNewOne/Comwell-Hotel-Project/homepage/public/images/hotels/aarhus/aarhus.webp" data-src="https://cdn.dwarf.dk/comwell-cms-production/img/containers/main/hoteller/caa/udefra/comwell-aarhus-bygning.jpg/a4f7ec8757855baeddf95828e22da17b.jpg" className="transition-transform group-hover:scale-[1.05] ease-in duration-150 h-full w-full object-cover lazyautosizes lazyloaded hotelImage" alt="" width="38" height="24" data-sizes="auto" loading="lazy" decoding="async" sizes="269px"/>
                    </picture>
                  </div>
                </div>
                <h3 className="hyphens-auto heading-mini mt-3">{hotelName}</h3>
                <span className="body-small mt-1 opacity-[0.45]">{city}</span>
            <Drawer open={isOpen} onClose={handleClose} direction="right" size={850} className="hotelDrawer">
            <div className="header">
              <div>
                <div className="flex">
                <h1>{hotelName}</h1>
                <div className="room-actions">
                <div className="hotelButtons mt-3 ml-3 flex gap-x-1">
            <button onClick={handleEditHotelDrawer} className="items-center gap-x-1 rounded-full py-2 pl-5 pr-5 bg-theme text-white transition-opacity hover:opacity-[0.7]">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M21.455 5.41601C21.55 5.56022 21.5923 5.7328 21.5749 5.9046C21.5574 6.0764 21.4811 6.23691 21.359 6.35901L12.166 15.551C12.072 15.645 11.9546 15.7123 11.826 15.746L7.997 16.746C7.87043 16.779 7.73743 16.7784 7.61119 16.7441C7.48496 16.7098 7.36989 16.6431 7.27739 16.5506C7.1849 16.4581 7.11821 16.3431 7.08393 16.2168C7.04965 16.0906 7.04899 15.9576 7.082 15.831L8.082 12.003C8.11119 11.8881 8.16626 11.7814 8.243 11.691L17.47 2.47001C17.6106 2.32956 17.8012 2.25067 18 2.25067C18.1988 2.25067 18.3894 2.32956 18.53 2.47001L21.359 5.29801C21.3949 5.33402 21.427 5.37355 21.455 5.41601ZM19.768 5.82801L18 4.06101L9.482 12.579L8.857 14.972L11.25 14.347L19.768 5.82801Z" fill="white"/>
                    <path d="M19.641 17.16C19.9143 14.824 20.0016 12.4699 19.902 10.12C19.8998 10.0646 19.9091 10.0094 19.9292 9.95782C19.9494 9.9062 19.9799 9.85928 20.019 9.82001L21.003 8.83601C21.0299 8.80897 21.064 8.79027 21.1013 8.78215C21.1385 8.77404 21.1773 8.77686 21.213 8.79027C21.2487 8.80368 21.2798 8.82712 21.3025 8.85776C21.3252 8.88841 21.3386 8.92495 21.341 8.96301C21.5262 11.7542 21.4559 14.5566 21.131 17.335C20.895 19.357 19.271 20.942 17.258 21.167C13.7633 21.554 10.2367 21.554 6.742 21.167C4.73 20.942 3.105 19.357 2.869 17.335C2.4544 13.7904 2.4544 10.2096 2.869 6.66501C3.105 4.64301 4.729 3.05801 6.742 2.83301C9.39437 2.53889 12.0667 2.46764 14.731 2.62001C14.7691 2.62275 14.8057 2.63635 14.8363 2.65922C14.8669 2.68209 14.8904 2.71325 14.9039 2.74903C14.9173 2.78481 14.9203 2.82369 14.9123 2.86108C14.9044 2.89847 14.8859 2.93281 14.859 2.96001L13.866 3.95201C13.8271 3.99076 13.7807 4.02113 13.7296 4.04125C13.6785 4.06137 13.6239 4.07082 13.569 4.06901C11.3458 3.99343 9.11996 4.07866 6.909 4.32401C6.26294 4.39552 5.65985 4.68273 5.19715 5.13926C4.73446 5.59579 4.43917 6.19497 4.359 6.84001C3.95805 10.2683 3.95805 13.7317 4.359 17.16C4.43917 17.805 4.73446 18.4042 5.19715 18.8608C5.65985 19.3173 6.26294 19.6045 6.909 19.676C10.264 20.051 13.736 20.051 17.092 19.676C17.7381 19.6045 18.3411 19.3173 18.8038 18.8608C19.2665 18.4042 19.5608 17.805 19.641 17.16Z" fill="white"/>
                </svg>
            </button>
            <EditHotelDrawer
        setIsOpenEditHotelDrawer={setIsOpenEditHotelDrawer}
        isOpenEditHotelDrawer={isOpenEditHotelDrawer}
      />
            <button onClick={handleDeleteClick} className="delete items-center gap-x-1 rounded-full py-2 pl-5 pr-5  text-white transition-opacity hover:opacity-[0.7]">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M7 21C6.45 21 5.97933 20.8043 5.588 20.413C5.19667 20.0217 5.00067 19.5507 5 19V6H4V4H9V3H15V4H20V6H19V19C19 19.55 18.8043 20.021 18.413 20.413C18.0217 20.805 17.5507 21.0007 17 21H7ZM17 6H7V19H17V6ZM9 17H11V8H9V17ZM13 17H15V8H13V17Z" fill="white"/>
                </svg>
            </button>

            {isDeleteBoxVisible && (
    <>
      <div className="overlay" onClick={handleCancelClick}></div>
      <div className="deleteBox">
        <h2>Are you sure you want to delete this hotel?</h2>
        <div className="flex gap-x-2 mt-6">
        <button onClick={handleDeleteConfirmation} data-_id={id} className="delete items-center gap-x-1 rounded-full py-2 pl-3 pr-3  text-white transition-opacity hover:opacity-[0.7]">Delete</button>
        <button onClick={handleCancelClick} className="items-center gap-x-1 rounded-full py-2 pl-3 pr-3 bg-theme  text-white transition-opacity hover:opacity-[0.7]">Cancel</button>
        </div>
      </div>
    </>
  )}
        </div>
                </div>
                </div>
                <h3>{city}</h3>
              </div>
          
          <button className="closeButton" onClick={handleClose}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 16 16"
              className="w-[16px] h-[16px]"
            >
              <path
                stroke="currentColor"
                stroke-width="1.5"
                d="M2.62 13.38 12.99 3.01M13.38 13.38 3.01 3.01"
              ></path>
            </svg>
          </button>
        </div>
        <h2 className="mt-8 text-3xl">
            Rooms
        </h2>
        <div className="room-list">
            <RoomArticle/>
            <RoomArticle/>
            <RoomArticle/>
            <RoomArticle/>
            <div className="addRoom">
                <button onClick={handleAddRoomDrawer} className="items-center gap-x-1 rounded-full py-2 pl-5 pr-5 bg-theme text-white transition-opacity hover:opacity-[0.7]">
                    Add room
                </button>
            </div>
            <AddRoomDrawer 
        setIsOpenAddRoomDrawer={setIsOpenAddRoomDrawer}
        isOpenAddRoomDrawer={isOpenAddRoomDrawer}/>
        </div>
        
            </Drawer>
              </article>
            
    </>
  );
};

export default HotelArticle;
