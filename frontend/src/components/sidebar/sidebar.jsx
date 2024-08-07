import Conversations from "./conversations";
import LogoutButton from "./logoutButton";
import SearchInput from "./searchInput";

const Sidebar = () => {
	return (
		<div className='border-r border-slate-500 p-4 flex flex-col'>
			<SearchInput />
			<div className='divider px-3'></div>
			<Conversations />
			<LogoutButton />
		</div>
	);
};
export default Sidebar;

// BOSHLANG'ICH KOD
// import React from "react";
// import SearchInput from './searchInput';
// import Conversations from "./conversations";
// import LogoutButton from "./logoutButton";

// const Sidebar = () => {
//   return (
//     <div className="border-r border-slate-500 p-4 flex flex-col ">
//       <SearchInput />
//       <div className="divider px-3"></div>
//       <Conversations/>
//       <LogoutButton/>
//     </div>
//   );
// };

// export default Sidebar;
