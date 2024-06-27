import styled from "styled-components";
import Wrapper from "../assets/wrappers/LandingPage";
import main from "../assets/images/main.svg";
import { Link } from "react-router-dom";
import { Logo } from "../components";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            I'm baby wayfarers hoodie next level taiyaki brooklyn cliche blue
            bottle single-origin coffee chia. Aesthetic post-ironic venmo,
            quinoa lo-fi tote bag adaptogen everyday carry meggings +1 brunch
            narwhal.
          </p>
          <Link to="/register" className="btn register-link">
            Register
          </Link>
          <Link to="/login" className="btn ">
            Login / Demo User
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;

// import React from "react";
// import Wrapper from '../assets/wrappers/LandingPage';
// import styled from "styled-components";
// import main from '../assets/images/main.svg';
// import logo from '../assets/images/logo.svg';
// import { Link } from "react-router-dom";
// const Landing = () => {
//   return (
//     <Wrapper>
//       <nav>
//         <Logo />
//         {/* <img src={logo} alt="samarth" className="logo" /> */}
//       </nav>
//       <div className="container page">
//         <div className="info">
//           <h1>
//             job <span>tracking</span> app
//           </h1>
//           <p>
//             I'm baby typewriter man bun blackbird spyplane listicle grailed
//             cornhole pour-over tumblr shoreditch tilde four loko yuccie.
//             Jianbing whatever poutine, waistcoat ugh semiotics sustainable raw
//             denim green juice. Williamsburg narwhal hoodie meditation whatever,
//             lomo artisan bitters keffiyeh jawn bicycle rights banjo XOXO.
//             Try-hard lyft direct trade poke hexagon woke fanny pack chicharrones
//             VHS scenester crucifix Brooklyn. JOMO kale chips pug, cupping irony
//             disrupt plaid squid hot chicken banjo vice woke ethical adaptogen
//             lomo. Ramps four loko crucifix shoreditch jianbing kitsch
//             flexitarian ugh bicycle rights. Authentic sus fit small batch
//             helvetica.
//           </p>
//           <Link to="/register" className="btn register-link">
//             Register
//           </Link>
//           <Link to="/login" className="btn ">
//             Login / Demo User
//           </Link>
//         </div>
//         <img src={main} alt="job hunt" className="img main-img" />
//       </div>
//     </Wrapper>
//   );
// };

// export default Landing;
