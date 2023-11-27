import React from "react";

type ContinueContainerType = {
  id: string;
  setDrawerComponent: (drawerComponent: string) => void;
  type?: string;
  nextPage?: string;
  price?: number;
};

const ContinueContainer: React.FC<ContinueContainerType> = (
  props: ContinueContainerType
) => {
  // All of the state
  const { id, setDrawerComponent, type, nextPage, price } = props;

  const selectNextComponent = () => {
    setDrawerComponent(nextPage || "selectRoom");
  };

  return (
    <div
      className="sticky bottom-0 left-0  w-full transition-all duration-[400ms] z-[1]"
      onClick={selectNextComponent}
    >
      <div className="relative  border-t border-gray-200 bg-white p-4 lg:py-6 before:absolute before:top-[-41px] before:left-0 before:h-[40px] before:w-full before:pointer-events-none">
        <div className="flex justify-between items-center gap-x-4">
          <div className="relative max-lg:transition-opacity md:ml-auto opacity-100 max-md:w-full">
            <button
              type="submit"
              form="guestForm"
              className="body w-full rounded-full font-semibold leading-none md:w-auto md:px-10 md:transition max-md:transition-opacity h-[52px] opacity-100 bg-theme text-white hover:lg:bg-theme-80"
            >
            <span className={`flex items-center ${type === "addon" ? "justify-between" : "justify-center"} gap-x-[7px] `}>
                {type === "addon" ? "Add to booking" : "Fortsæt"}
            {type === "addon" ? `${price + " "+ "kr"}` : "" }
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContinueContainer;
