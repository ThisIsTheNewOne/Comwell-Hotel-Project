import React, { useContext } from "react";

type RoomPackagesType = {
  name: string;
  price: number;
  description: string;
};

const RoomPackages: React.FC<RoomPackagesType> = (props: RoomPackagesType) => {
  const { name, price, description } = props;

  return (
    <div className=" flex flex-col justify-between border-[1px] border-gray-300 rounded-[6px] py-[15px] px-[15px] w-[60%]">
      <div className="flex">
        <div className="text-[20px] leading-[1.1] mb-[10px] mr-[30px]">
          {name}
        </div>
        <div>Sel</div>
      </div>

      <div>
        <div className="font-medium text-[13px] line-clamp-2 overflow-hidden ">
          {description}
        </div>
        <div className="mt-[10px]"> Read more about this package</div>
      </div>

      <div className="mt-3 text-[28px]">{price + " " + "kr."}</div>
    </div>
  );
};

export default RoomPackages;
