

// import React from "react";
// //import { Link } from "react-router-dom";
// import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
// import { FormRow, Logo } from "../components";
// import { Form, redirect, useNavigation, Link } from "react-router-dom";
// import customFetch from "../utils/customFetch";
// //import {action as register} from './../../../controllers/authController';
// export const action = async ({ request }) => {
//   const formData = await request.formData();
//   const data = Object.fromEntries(formData);
//   try{
//     await customFetch.post('/auth/register',data)
//     return null;
//   }catch(error){
//     console.log(error);
//     return error;
//   }
//   //console.log(data);
//   //return null;
// };
// // export const action = async ({ request }) => {
// //   const formData = await request.formData();
// //   const data = Object.fromEntries(formData);
// //   try {
// //     await customFetch.post("/auth/register", data);
// //     return redirect("/login");
// //   } catch (error) {
// //     return error;
// //   }
// // };

// //import { toast } from "react-toastify";

// // export const action = async ({ request }) => {
// //   const formData = await request.formData();
// //   const data = Object.fromEntries(formData);
// //   try {
// //     await customFetch.post("/auth/register", data);
// //     toast.success("Registration successful");
// //     return redirect("/login");
// //   } catch (error) {
// //     toast.error(error?.response?.data?.msg);
// //     return error;
// //   }
// // };
// const Register = () => {
//   const navigation = useNavigation();
//   const isSubmitting = navigation.state === "submitting";
//   return (
//     <Wrapper>
//       <Form method="post" className="form">
//         <Logo />
//         <h4>Register</h4>
//         <FormRow type="text" name="name" defaultValue="John" />
//         <FormRow
//           type="text"
//           name="LastName"
//           labelText="last name"
//           defaultValue="Smith"
//         />
//         <FormRow type="text" name="location" defaultValue="earth" />
//         <FormRow type="text" name="email" defaultValue="john@gmail.com" />
//         <FormRow type="password" name="password" defaultValue="secret123 " />
//         <button type="submit" className="btn btn-block" disabled={isSubmitting}>
//           {isSubmitting ? "submitting..." : "submit"}
//         </button>
//         <p>
//           Already a member?
//           <Link to="/login" className="member-btn">
//             Login
//           </Link>
//         </p>
//       </Form>
//     </Wrapper>
//   );
// };

// export default Register;


import React from "react";
import { Form, redirect,Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import { FormRow, Logo, SubmitBtn } from "../components";
import customFetch from "../utils/customFetch";
import { toast } from "react-toastify";


// export const action = async ({ request }) => {
//   const formData = await request.formData();
//   const data = Object.fromEntries(formData);
  
//   try {
//     await customFetch.post("/auth/register", data);
//     toast.success('Registration successful');
//     return redirect('/login');
//     //return null;
//   } catch (error) {
//     toast.error(error?.response?.data?.msg);

//     //console.log(error);
//     return error;
//   }
// };
export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    await customFetch.post("/auth/register", data);
    toast.success("Registration successful");
    return redirect("/login");
  } catch (error) {
    if (error.response && error.response.data && error.response.data.msg) {
      toast.error(error.response.data.msg); // Display the specific error message from the server
    } else {
      toast.error("Registration failed. Please try again."); // Fallback error message
    }
    console.log(error); // Log the error to see details in the console
    return error;
  }
};

const Register = () => {
  // const navigation = useNavigation();
  // const isSubmitting = navigation.state === "submitting";
  return (
    <Wrapper>
      <Form method="post" className="form">
        <Logo />
        <h4>Register</h4>
        <FormRow type="text" name="name" />
        <FormRow
          type="text"
          name="LastName"
          labelText="last name"
          
        />
        <FormRow type="text" name="location"  />
        <FormRow type="email" name="email"  />
        <FormRow type="password" name="password"  />
        <SubmitBtn />
        {/* <button type="submit" className="btn btn-block" disabled={isSubmitting}>
          {isSubmitting ? "submitting..." : "submit"}
        </button> */}
        <p>
          Already a member?
          <Link to="/login" className="member-btn">
            Login
          </Link>
        </p>
      </Form>
    </Wrapper>
  );
};

export default Register;
