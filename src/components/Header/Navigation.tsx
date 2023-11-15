import React from 'react';

const Navigation: React.FC = () => {
  return (
    <nav className="z-[5] ml-auto w-52">
      <ul className="flex items-center justify-between md:gap-x-7">
        <div>Location</div>
        <div>Profile</div>
        <div>Menu</div>
      </ul>
    </nav>
  );
};

export default Navigation;