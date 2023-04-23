import { React, useState } from "react";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import { SidebarData } from "../../assets/sidebar-data";
import "../../styles/navbar.css";
import { IconContext } from "react-icons";

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);

  const viewSidebar = () => {
    setSidebar(!sidebar);
  };

  return (
    <>
      <IconContext.Provider value={{color:"#fff"}} >
        <div className="navbar bg-gosporty-blue flex justify-between items-center">
          <Link to="#" className="menu-bars open">
            <FaIcons.FaBars onClick={viewSidebar} />
          </Link>
          <Link to="#">
            <div className="flex flex-row justify-end py-4">
              <button className="h-12 mx-4 px-2 rounded-xl text-white font-poppins font-bold bg-gosporty-green drop-shadow-md">
                Agregar cancha
              </button>
            </div>
          </Link>
        </div>
        <nav className={sidebar ? "nav-menu active bg-gosporty-blue" : "nav-menu bg-gosporty-blue"}>
          <ul className="nav-menu-items" onClick={viewSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <FaIcons.FaTimes className="bg-gosporty-green rounded-full drop-shadow-md p-1" />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName + " font-montserrat font-bold"}>
                  <Link to={item.path}>
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
