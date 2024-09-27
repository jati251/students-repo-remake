import { Ripple } from "primereact/ripple";
import React, { useState } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { featureLists } from "./list";

import AvatarTopRight from "../../../components/Avatar";

const SidebarPage: React.FC = () => {
  const [expandedItems, setExpandedItems] = useState<number[]>([]);

  const toggleExpand = (id: number) => {
    setExpandedItems((prev) =>
      prev.includes(id) ? prev.filter((itemId) => itemId !== id) : [...prev, id]
    );
  };

  const location = useLocation(); // Get the current location
  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="flex h-screen">
      <AvatarTopRight />

      <nav className="w-[35vh] bg-gradient-to-r from-[#14569E] to-[#13467c] text-white flex flex-col items-center ">
        {/* Logo and text container */}
        <div className="flex justify-center items-center mt-8 gap-2 sticky z-10 cursor-pointer">
          <img
            src="https://upload.wikimedia.org/wikipedia/id/thumb/8/80/Lambang_Universitas_Padjadjaran.svg/1200px-Lambang_Universitas_Padjadjaran.svg.png"
            alt="Logo"
            className="w-10 h-10"
          />
          <div>
            <h1 className="text-xl font-bold">Portal Students</h1>
            <p className="text-sm text-gray-200">Universitas Padjadjaran</p>
          </div>
        </div>
        <hr className="w-[90%] border-[#2c67a7] my-6 " />

        <ul className="flex-grow p-4 w-full overflow-y-auto max-h-[70vh]">
          {featureLists.map((item) => (
            <li key={item.value}>
              {item.subItems ? (
                <div
                  onClick={() => toggleExpand(item.id)}
                  className={
                    isActive(`/${item.value}`)
                      ? "bg-[#2575D3] px-6 py-4 my-2 rounded-3xl flex justify-between p-ripple items-center cursor-pointer"
                      : "px-6 py-4 my-2 p-ripple hover:bg-[#14569E] rounded-3xl flex justify-between items-center cursor-pointer"
                  }
                >
                  <div className="flex justify-start gap-5">
                    {<i className={`pi ${item.icon}`} />}
                    {item.label}
                  </div>
                  {item.subItems && (
                    <i
                      className={
                        expandedItems.includes(item.id) && item.subItems
                          ? "pi pi-chevron-down"
                          : "pi pi-chevron-up"
                      }
                    ></i>
                  )}
                  <Ripple />
                </div>
              ) : (
                <NavLink
                  to={`/${item.value}`}
                  onClick={() => toggleExpand(item.id)}
                  className={({ isActive }) =>
                    isActive
                      ? "bg-[#2575D3] px-6 py-4 my-2 rounded-3xl flex justify-start gap-5 p-ripple items-center"
                      : "px-6 py-4 my-2 p-ripple hover:bg-[#14569E] rounded-3xl flex justify-start gap-5 items-center"
                  }
                >
                  {<i className={`pi ${item.icon}`} />}
                  {item.label}
                  <Ripple />
                </NavLink>
              )}

              {expandedItems.includes(item.id) && item.subItems && (
                <ul className="ml-4 mt-2 space-y-1">
                  {item.subItems.map((subItem) => (
                    <li key={subItem.id}>
                      <NavLink
                        to={`/${subItem.value}`}
                        className={({ isActive }) =>
                          isActive
                            ? "bg-[#2575D3] px-3 py-4 block my-2 rounded-3xl p-ripple pl-8"
                            : "px-3 py-4 block my-2 p-ripple hover:bg-[#14569E] rounded-3xl pl-8"
                        }
                      >
                        {subItem.label}
                        <Ripple />
                      </NavLink>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
          <li>
            <NavLink
              onClick={() => localStorage.removeItem("authToken")}
              to="/login"
              className={({ isActive }) =>
                isActive
                  ? "bg-[#2575D3] px-6 py-4 block my-2 rounded-3xl"
                  : "px-6 py-4 block my-2 hover:bg-[#14569E] rounded-3xl"
              }
            >
              Logout
            </NavLink>
          </li>
        </ul>
      </nav>

      {/* Main Content */}
      <div className="w-full bg-[#F2F6F7] p-6 overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default SidebarPage;
