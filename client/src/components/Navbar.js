import Wrapper from "../assets/wrappers/Navbar";
import { BiAlignLeft, BiUserCircle, BiCaretDownCircle } from "react-icons/bi";
import { useAppContext } from "../context/appContext";
import Logo from "./Logo";
import { useState } from "react";

const Navbar = () => {
  const { toggleSidebar, logoutUser, user } = useAppContext();
  const [showLogout, setShowLogout] = useState(false);

  return (
    <Wrapper>
      <div className="nav-center">
        <button className="toggle-btn" onClick={toggleSidebar}>
          <BiAlignLeft />
        </button>

        <div>
          <Logo />
          <h3 className="logo-text">dashboard</h3>
        </div>

        <div className="btn-container">
          <button className="btn" onClick={() => setShowLogout(!showLogout)}>
            <BiUserCircle />
            {user?.name}
            <BiCaretDownCircle />
          </button>
          <div className={showLogout ? "dropdown show-dropdown" : "dropdown"}>
            <button onClick={logoutUser} className="dropdown-btn">
              logout
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Navbar;
