import { LOGO_URL } from "../utils/constant";
import { useState } from "react";

const Header = () => {
  const [btnButton, setBtnButton] = useState("Login");
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <button className="login" onClick={() => setBtnButton("Logout")}>
            {btnButton}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
