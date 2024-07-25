import React from "react";
import SearchInput from './searchInput';

const Sidebar = () => {
  return (
    <div>
      <SearchInput />
      <div className="divider px-3"></div>
      {/* <Conversations/>
      <LogoutButton/> */}
    </div>
  );
};

export default Sidebar;
