import { FaTimes } from "react-icons/fa";
import Wrapper from "../assets/wrappers/SmallSidebar";
import { useDashboardContext } from "../pages/DashboardLayout";
import Logo from "./Logo";

import NavLinks from "./NavLinks";
const SmallSidebar = () => {
  const { showSidebar, toggleSidebar } = useDashboardContext();

  return (
    <Wrapper>
      <div
        className={
          showSidebar ? "sidebar-container show-sidebar" : "sidebar-container"
        }
      >
        <div className="content">
          <button type="button" className="close-btn" onClick={toggleSidebar}>
            <FaTimes />
          </button>
          <header>
            <Logo />
          </header>
          <NavLinks />
        </div>
      </div>
    </Wrapper>
  );
};
export default SmallSidebar;

// import Wrapper from "../assets/wrappers/SmallSidebar";
// import { FaTimes } from "react-icons/fa";
// import Logo from "./Logo";
// import { NavLink } from "react-router-dom";
// import links from "../utils/links";
// import { useDashboardContext } from "../pages/DashboardLayout";

// const SmallSidebar = () => {
//   const { showSidebar, toggleSidebar } = useDashboardContext();
//   return (
//     <Wrapper>
//       <div
//         className={
//           showSidebar ? "sidebar-container show-sidebar" : "sidebar-container"
//         }
//       >
//         <div className="content">
//           <button type="button" className="close-btn" onClick={toggleSidebar}>
//             <FaTimes />
//           </button>
//           <header>
//             <Logo />
//           </header>
//           <div className="nav-links">
//             {links.map((link) => {
//               const { text, path, icon } = link;

//               return (
//                 <NavLink
//                   to={path}
//                   key={text}
//                   className="nav-link"
//                   onClick={toggleSidebar}
//                   // will discuss in a second
//                   end
//                 >
//                   <span className="icon">{icon}</span>
//                   {text}
//                 </NavLink>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </Wrapper>
//   );
// };

// export default SmallSidebar;

// import React from "react";
// import Wrapper from "../assets/wrappers/SmallSidebar";
// import { useDashboardContext } from "../pages/DashboardLayout";

// const SmallSidebar = () => {
//     const data=  useDashboardContext();
//     console.log(data);
//   return <Wrapper>SmallSidebar</Wrapper>;
// };

// export default SmallSidebar;
