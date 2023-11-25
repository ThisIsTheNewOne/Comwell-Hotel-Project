import React from "react";

type BookingFacilitiesType = {
 
};

const BookingFacilities: React.FC<BookingFacilitiesType> = (
  props: BookingFacilitiesType
) => {
  return (
    <div className="flex flex-col md:flex-row md:items-center lg:max-w-[100%]">
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
        <div className="text-xs font-regular flex h-[22px] items-center gap-x-2 whitespace-nowrap border-r pr-3 last:border-r-0 md:last:border-r">
          <div className="icon h-[20px] w-[20px]">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.75 20.25H22V21.75H23.5V14.1283L22 9.62829V4.5C22 3.25736 20.9926 2.25 19.75 2.25H4.25C3.00736 2.25 2 3.25736 2 4.5V9.62829L0.5 14.1283V21.75H2V20.25H11.25V21.75H12.75V20.25ZM4.25 3.75C3.83579 3.75 3.5 4.08579 3.5 4.5V9.75H4.5V6.75C4.5 6.19772 4.94772 5.75 5.5 5.75H9.5C10.0523 5.75 10.5 6.19772 10.5 6.75V9.75H11.25V3.75H4.25ZM3.04057 11.25L2.04057 14.25H11.25V11.25H3.04057ZM9 9.75V7.25H6V9.75H9ZM19.75 3.75H12.75V9.75H13.5V6.75C13.5 6.19772 13.9477 5.75 14.5 5.75H18.5C19.0523 5.75 19.5 6.19772 19.5 6.75V9.75H20.5V4.5C20.5 4.08579 20.1642 3.75 19.75 3.75ZM18 9.75H15V7.25H18V9.75ZM12.75 11.25H20.9594L21.9594 14.25H12.75V11.25ZM11.25 15.75H2V18.75H11.25V15.75ZM12.75 18.75V15.75H22V18.75H12.75Z"
                fill="black"
              ></path>
            </svg>
          </div>
          <span>Twin seng</span>
        </div>

        <div className="text-xs font-regular flex h-[22px] items-center gap-x-2 whitespace-nowrap border-r pr-3 last:border-r-0 md:last:border-r">
          <div className="icon h-[20px] w-[20px]">
            <svg
              fill="none"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m21 3h-18c-.39782 0-.77936.15804-1.06066.43934s-.43934.66284-.43934 1.06066v12c0 .3978.15804.7794.43934 1.0607s.66284.4393 1.06066.4393h6v3h-3v1.5h12v-1.5h-3v-3h6c.3978 0 .7794-.158 1.0607-.4393s.4393-.6629.4393-1.0607v-12c0-.39782-.158-.77936-.4393-1.06066s-.6629-.43934-1.0607-.43934zm-7.5 18h-3v-3h3zm7.5-4.5h-18v-12h18z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
          <span>TV</span>
        </div>

        <div className="text-xs font-regular flex h-[22px] items-center gap-x-2 whitespace-nowrap border-r pr-3 last:border-r-0 md:last:border-r">
          <div className="icon h-[20px] w-[20px]">
            <svg
              fill="none"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clipRule="evenodd"
                d="m7.875 1.5c-3.51907 0-6.375 2.85404-6.375 6.375 0 3.0552 2.15034 5.6083 5.01839 6.2302l1.23049 4.3068c.18399.6439.77256 1.0879 1.44229 1.0879h.55883v.0001c0 .8284-.67157 1.5-1.5 1.5h-4.5v1.5h4.5c1.65685 0 3-1.3431 3-3v-.0001h.5242c.9856 0 1.7033-.9342 1.4494-1.8865l-1.0611-3.9792c.8786-.1803 1.8049-.3872 2.7215-.6019 2.7317-.6399 5.4029-1.3552 6.5191-1.6593.6593-.1796 1.0969-.7761 1.0969-1.44264v-4.4662c0-.68405-.4603-1.29227-1.1432-1.45496-1.133-.26992-3.7998-.89422-6.5212-1.45146-2.6867-.55015-5.53046-1.05774-6.9606-1.05774zm2.8109 12.4186c-.98947.1759-1.8892.301-2.56751.3266l1.07278 3.7547h2.58303zm-7.6859-6.0436c0-2.69225 2.18407-4.875 4.875-4.875 1.24631 0 3.9266.46761 6.6597 1.02725 2.6912.55106 5.3332 1.1693 6.4653 1.43894v4.462c-1.1146.30361-3.7592 1.01141-6.4581 1.64361-1.3534.3171-2.714.6135-3.8989.8303-1.19998.2195-2.17089.3479-2.768.3479-2.69093 0-4.875-2.1828-4.875-4.875zm6.75 0c0 1.03553-.83947 1.875-1.875 1.875s-1.875-.83947-1.875-1.875.83947-1.875 1.875-1.875 1.875.83947 1.875 1.875zm1.5 0c0 1.86396-1.51104 3.375-3.375 3.375s-3.375-1.51104-3.375-3.375 1.51104-3.375 3.375-3.375 3.375 1.51104 3.375 3.375z"
                fill="currentColor"
                fillRule="evenodd"
              ></path>
            </svg>
          </div>
          <span>Hårtørrer</span>
        </div>

        <div className="text-xs font-regular flex h-[22px] items-center gap-x-2 whitespace-nowrap border-r pr-3 last:border-r-0 md:last:border-r">
          <div className="icon h-[20px] w-[20px]">
            <svg
              fill="none"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clipRule="evenodd"
                d="m18.1846 2.99994 1.0715 3.75001h-4.0114l1.0714-3.75001zm1.5686 5.25001c.7474 0 1.2871-.71539 1.0817-1.43406l-1.2857-4.50001c-.138-.48297-.5794-.81594-1.0817-.81594h-2.4343c-.5023 0-.9437.33297-1.0817.81594l-1.2857 4.50001c-.2053.71867.3343 1.43406 1.0817 1.43406zm-3.2532.00011v3.75004h-4.5v-2.62504c0-.62132-.5037-1.125-1.125-1.125h-5.25c-.62132 0-1.125.50368-1.125 1.125v2.62494h-1.5v.0001h-1.50195v1.5h1.50195v8.9999h1.5v-5.25h15v5.25h1.5v-8.9999h1.4981v-1.5h-1.4981v-.0001h-1.5v.0001h-1.5v-3.75004zm3 7.49994v-2.2499h-15v2.2499zm-13.5-5.99994v2.25004h4.5v-2.25004z"
                fill="currentColor"
                fillRule="evenodd"
              ></path>
            </svg>
          </div>
          <span>Arbejdsplads</span>
        </div>

        <div className="text-xs font-regular flex h-[22px] items-center gap-x-2 whitespace-nowrap border-r pr-3 last:border-r-0 md:last:border-r">
          <div className="icon h-[20px] w-[20px]">
            <svg
              fill="none"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m21 18.0037v-1.5c-.0034-2.2555-.8529-4.4276-2.3804-6.087-1.5276-1.6594-3.6221-2.68534-5.8696-2.87501v-1.53803h2.25v-1.5h-6v1.5h2.25v1.53803c-2.24747.18967-4.342 1.21561-5.86957 2.87501-1.52758 1.6594-2.37702 3.8315-2.38043 6.087v1.5h-1.5v1.5h21v-1.5zm-9-9.00004c1.7281.00228 3.4027.60029 4.7413 1.69324 1.3387 1.0929 2.2596 2.614 2.6075 4.3068h-14.69768c.34792-1.6928 1.26882-3.2139 2.60749-4.3069 1.33866-1.09291 3.01319-1.69091 4.74139-1.69314zm-7.5 7.50004h15v1.5h-15z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
          <span>Roomservice</span>
        </div>
      </div>
    </div>
  );
};

export default BookingFacilities;
