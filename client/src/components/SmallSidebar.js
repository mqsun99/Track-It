import Wrapper from "../assets/wrappers/SmallSidebar";
import { TiDeleteOutline } from "react-icons/ti";
import { useAppContext } from "../context/appContext";
import links from "../utils/links";
import Logo from "./Logo";
import NavLinks from "./NavLinks";

export const SmallSidebar = () => {
  const { showSidebar, toggleSidebar } = useAppContext();
  return (
    <Wrapper>
      <div
        className={
          showSidebar ? "sidebar-container show-sidebar" : "sidebar-container"
        }
      >
        <div className="content">
          <button className="close-btn" onClick={toggleSidebar}>
            <TiDeleteOutline />
          </button>
          <header>
            <Logo />
          </header>
          <div className="nav-links">
            <NavLinks toggleSidebar={toggleSidebar} />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default SmallSidebar;
