import Wrapper from "../assets/wrappers/Navbar";
import { FaAlignLeft } from "react-icons/fa";
import Logo from "./Logo";
import { useDashboardContext } from "../pages/DashboardLayout";
import LogoutContainer from "./LogoutContainer";
import ThemeToggle from "./ThemeToggle";
const Navbar = () => {
  const { toggleSidebar } = useDashboardContext();
  return (
    <Wrapper>
      <div className="nav-center">
        <button type="button" className="toggle-btn" onClick={toggleSidebar}>
          <FaAlignLeft />
        </button>
        <div>
          <Logo />
          <h4 className="logo-text">dashboard</h4>
        </div>
        <div className="btn-container">
          <ThemeToggle />
          <LogoutContainer />
        </div>
      </div>
    </Wrapper>
  );
};
export default Navbar;

// import Wrapper from "../assets/wrappers/Navbar";
// import { FaAlignLeft } from "react-icons/fa";
// import Logo from "./Logo";

// import { useDashboardContext } from "../pages/DashboardLayout";
// import LogoutContainer from "./LogoutContainer";
// import ThemeToggle from "./ThemeToggle";
// const Navbar = () => {
//   const { toggleSidebar } = useDashboardContext();
//   return (
//     <Wrapper>
//       <div className="nav-center">
//         <button type="button" className="toggle-btn" onClick={toggleSidebar}>
//           <FaAlignLeft />
//         </button>
//         <div>
//           <Logo />
//           <h4 className="logo-text">dashboard</h4>
//         </div>
//         <div className="btn-container">
//           <ThemeToggle />
//           <LogoutContainer />

//         </div>
//       </div>
//     </Wrapper>
//   );
// };

// export default Navbar;

// import Wrapper from "../assets/wrappers/Navbar";
// import { FaAlignLeft } from "react-icons/fa";
// import Logo from "./Logo";
// import { useDashboardContext } from "../pages/DashboardLayout";
// // import LogoutContainer from "./LogoutContainer";
// // import ThemeToggle from "./ThemeToggle";
// const Navbar = () => {
//   const { toggleSidebar } = useDashboardContext();
//   return (
//     <Wrapper>
//       <div className="nav-center">
//         <button type="button" className="toggle-btn" onClick={toggleSidebar}>
//           <FaAlignLeft />
//         </button>
//         <div>
//           <Logo />
//           <h4 className="logo-text">dashboard</h4>
//         </div>
//         {/* <div className="btn-container">
//           <ThemeToggle />
//           <LogoutContainer />
//         </div> */}
//       </div>
//     </Wrapper>
//   );
// };
// export default Navbar;

// import React from "react";
// import Wrapper from "../assets/wrappers/Navbar";
// import { FaHome } from "react-icons/fa";
// import {FaAlineLeft}

// const Navbar = () => {
//   return (
//     <Wrapper>
//       <H2>navbar</H2>
//       <FaHome />
//     </Wrapper>
//   );
// };

// export default Navbar;
