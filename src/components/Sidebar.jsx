import { Link, NavLink } from "react-router-dom";
import { sidebarData } from "../data";
import Toggle from "./toggle/Toggle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="sidebar z-40 relative bg-lightColor">
      <div
        className={`mobile-nav  min-[1300px]:w-96 left-0 ${
          isOpen ? "max-[1024px]:left-0" : "max-[1024px]:-left-full "
        } bg-lightColor fixed top-0 transition-[.3s] ease-in-out duration-[.3s] h-full flex flex-col py-10 justify-center`}
      >
        <FontAwesomeIcon
          className="hidden max-[1024px]:block text-2xl cursor-pointer absolute top-5 right-5  text-blackColor"
          onClick={() => {
            setIsOpen(false);
          }}
          icon={faXmark}
        />

        <ul className="p-6 min-[1024px]:mb-10">
          <li className=" mb-14">
            <Link to="/" className="text-2xl font-bold text-blackColor">
              Khaled Yousry
            </Link>
          </li>

          {sidebarData.map((link) => {
            return (
              <li className="p-[12px] text-textLightColor" key={link.id}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    [
                      "flex font-[500] items-center gap-3 capitalize hover:pl-2 transition-[0.3s] duration-[0.3s]",
                      isActive ? " text-blackColor  pl-2" : "",
                    ]
                      .filter(Boolean)
                      .join(" ")
                  }
                  onClick={() => {
                    setIsOpen(false);
                  }}
                >
                  <FontAwesomeIcon className="text-[15px]" icon={link.icon} />
                  {link.title}
                </NavLink>
              </li>
            );
          })}
        </ul>

        <div className="italic text-blackColor capitalize text-sm p-6 mb-14">
          <span className=" block text-sm">&copy; 2024 </span>
          <h1>
            this code written by <span className="font-semibold">khaled</span>
          </h1>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <Toggle />

        {/* Menu Icon */}
        <FontAwesomeIcon
          className="text-2xl hidden max-[1024px]:block cursor-pointer text-blackColor"
          onClick={() => {
            setIsOpen(true);
          }}
          icon={faBars}
        />
      </div>
    </div>
  );
}

export default Sidebar;
