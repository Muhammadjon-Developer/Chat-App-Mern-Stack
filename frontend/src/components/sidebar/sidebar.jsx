import React from "react";
import SearchInput from './searchInput';
import Conversations from "./conversations";

const Sidebar = () => {
  return (
    <div>
      <SearchInput />
      <div className="divider px-3"></div>
      <Conversations/>
      {/* <LogoutButton/> */}
    </div>
  );
};

export default Sidebar;
