import {
  Link,
  Form,
  redirect,
  //useNavigation,
  useActionData,
  useNavigate,
} from "react-router-dom";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import { FormRow, Logo, SubmitBtn } from "../components";
import customFetch from "../utils/customFetch";
import { toast } from "react-toastify";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const errors = { msg: "" };
  if (data.password.length < 3) {
    errors.msg = "Password too short";
    return errors;
  }
  try {
    await customFetch.post("/auth/login", data);
    toast.success("Login successful");
    return redirect("/dashboard");
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const Login = () => {
  const errors = useActionData();
  // const navigation = useNavigation();
  // const isSubmitting = navigation.state === "submitting";
  
  const navigate = useNavigate()
  const loginDemoUser = async()=>{
    const data={
      email:'test@test.com',
      password:'secret123',
    };
    try {
      await customFetch.post("/auth/login", data);
      toast.success("Take a test drive");
      navigate("/dashboard");
    } catch (error) {
      toast.error(error?.response?.data?.msg);
      return error;
      
    }
  }
  
  return (
    <Wrapper>
      <Form method="post" className="form">
        <Logo />
        <h4>Login</h4>
        {errors?.msg && <p style={{ color: "red" }}>{errors.msg}</p>}
        <FormRow type="email" name="email" />
        <FormRow type="password" name="password" />
        <SubmitBtn formBtn />
        {/* <button type="submit" className="btn btn-block" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit"}
        </button> */}
        <button type="button" className="btn btn-block" onClick={loginDemoUser}>
          Explore the app
        </button>
        <p>
          Not a member yet?
          <Link to="/register" className="member-btn">
            Register
          </Link>
        </p>
      </Form>
    </Wrapper>
  );
};

export default Login;

// import {
//   Link,
//   Form,
//   redirect,
//   //useNavigation,
//   //useActionData,
// } from "react-router-dom";
// import Wrapper from "../assets/wrappers/RegisterAndLoginPage.js";
// import { FormRow, Logo, SubmitBtn } from "../components";
// import customFetch from "../utils/customFetch.js";
// import { toast } from "react-toastify";

// export const action = async ({ request }) => {
//   const formData = await request.formData();
//   const data = Object.fromEntries(formData);
//   const errors = { msg: " " };
//   if (data.password.length < 3) {
//     errors.msg = "password too short";
//     return errors;
//   }
//   try {
//     await customFetch.post("/auth/login", data);
//     toast.success("Login successful");
//     return redirect("/dashboard");
//   } catch (error) {
//     toast.error(error?.response?.data?.msg);
//     return error;
//   }
// };

// const Login = () => {
//   //const errors = useActionData();
//   // const navigation = useNavigation();
//   // const isSubmitting = navigation.state === "submitting";
//   return (
//     <Wrapper>
//       <Form method="post" className="form">
//         <Logo />
//         <h4>login</h4>
//         {errors?.msg && <p style={{ color: "red" }}>{errors.msg}</p>}
//         <p></p>
//         <FormRow type="email" name="email" defaultValue="john@gmail.com" />
//         <FormRow type="password" name="password" defaultValue="secret123" />
//         <SubmitBtn formBtn />
//         {/* <button type="submit" className="btn btn-block" disabled={isSubmitting}>
//           {isSubmitting ? "submitting..." : "submit"}
//         </button> */}
//         <button type="button" className="btn btn-block">
//           explore the app
//         </button>
//         <p>
//           Not a member yet?
//           <Link to="/register" className="member-btn">
//             Register
//           </Link>
//         </p>
//       </Form>
//     </Wrapper>
//   );
// };
// export default Login;

// import React from "react";
// import { Link } from "react-router-dom";
// import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
// import { FormRow, Logo } from "../components";
// //import AddJob from "./AddJob";
// const Login = () => {
//   return (
//     <Wrapper>
//       <form className="form">
//         <Logo />
//         <h4>Login</h4>
//         <FormRow type="email" name="email" defaultValue="john@gmail.com" />
//         <FormRow type="password" name="password" defaultValue="secret123" />
//         <button type="submit" className="btn btn-block">
//           Submit
//         </button>
//         <button type="button" className="btn btn-block">
//           Explore The App
//         </button>
//         <p>
//           Not a member yet?
//           <Link to="/register" className="member-btn">
//             Register
//           </Link>
//         </p>
//       </form>
//     </Wrapper>
//     // <div>
//     //   <h2>Login Page</h2>
//     //   <Link to='/register'>Register Page</Link>
//     // </div>
//   );
// };

// export default Login;
