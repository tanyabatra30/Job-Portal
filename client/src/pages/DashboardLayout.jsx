import React, { createContext, useState, useContext } from "react";
import {
  Outlet,
  redirect,
  useLoaderData,
   useNavigate,
  // useNavigation,
} from "react-router-dom";
import Wrapper from "../assets/wrappers/Dashboard";
import { BigSidebar, Navbar, SmallSidebar } from "../components";
//import { createContext, useContext, useEffect, useState } from "react";
// import customFetch from '../utils/customFetch';
// import {toast} from 'react-toastify';
import { checkDefaultTheme } from "../App";
import customFetch from "../utils/customFetch";

export const loader=async()=>{
  try{
    const {data}=await customFetch.get('/users/current-user');
    return data;
  }catch(error){
    return redirect('/');

  }// to be used ideally
  //return 'hello world';  --->use when dashboard is not coming/ reverting back to login page
  // try{
  //   const {data}=await
  // }catch(error){

  // }
};

const DashboardContext = createContext();

const DashboardLayout = ({isDarkThemeEnabled}) => {
  const data=useLoaderData();
  console.log(data);
  //temp
  // const navigate = useNavigate();
  // const navigation = useNavigation();
  //const isPageLoading = navigation.state === "loading";
  const {user}=useLoaderData();
  //const user = { name: "john" };
  const navigate=useNavigate();
  const [showSidebar, setShowSidebar] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(checkDefaultTheme()); //to get the default theme from the system of the user
  //const [isAuthError, setIsAuthError] = useState(false);

  const toggleDarkTheme = () => {
    const newDarkTheme = !isDarkTheme;
    setIsDarkTheme(newDarkTheme);
    document.body.classList.toggle("dark-theme", newDarkTheme);
    localStorage.setItem("darkTheme", newDarkTheme);

    //console.log("toggle dark theme");
  };

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const logoutUser = async () => {
     navigate('/');
     await customFetch.get('/auth/Logout');
     toast.success('Logging out...');
    // console.log("logout user");
  };

  return (
    <DashboardContext.Provider
      value={{
        user,
        showSidebar,
        isDarkTheme,
        toggleDarkTheme,
        toggleSidebar,
        logoutUser,
      }}
    >
      <Wrapper>
        <main className="dashboard">
          <SmallSidebar />
          <BigSidebar />
          <div>
            <Navbar />
            <div className="dashboard-page">
              <Outlet context={{user}} />
            </div>
          </div>
        </main>
      </Wrapper>
    </DashboardContext.Provider>
  );
};

export const useDashboardContext = () => useContext(DashboardContext);

export default DashboardLayout;

// import React, { useState } from "react";
// import { Outlet } from "react-router-dom";
// import Wrapper from "../assets/wrappers/Dashboard";
// import { BigSidebar, Navbar, SmallSidebar } from "../components";
// import { useState } from "react";
// import DashboardLayout from './DashboardLayout';
//const DashboardLayout = () => {

//   const user = {name:'john'}
//   const [showSidebar, setShowSidebar] = useState(false)
//   const [isDarkTheme, setIsDarkTheme] = useState(false)

//   const toggleDarkTheme=()=>{
//     console.log('toggle dark theme');
//   };
//   const toggleSidebar = () =>{
//     setShowSidebar(!ShowSidebar);
//   };
//   const logoutUser = async = () =>{
//     console.log('logout user');
// };

//   return (
//     <Wrapper>
//       <main className="dashboard">
//         <SmallSidebar />
//         <BigSidebar />
//         <div>
//           <Navbar />
//           <div className="dashboard-page">
//             <Outlet />
//           </div>
//         </div>
//       </main>
//     </Wrapper>
//   );
// };

// export default DashboardLayout;
