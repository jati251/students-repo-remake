// AvatarTopRight.tsx

import React, { useEffect, useRef, useState } from "react";
import { Avatar } from "primereact/avatar";
import { OverlayPanel } from "primereact/overlaypanel";

const AvatarTopRight: React.FC = () => {
  const handleLogout = () => {
    localStorage.removeItem("authToken");
    window.location.reload();
  };
  const menuAvatar = useRef<OverlayPanel>(null);

  const [isVisible, setIsVisible] = useState(true);
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);

  useEffect(() => {
    const scrollableElement = document.getElementById("main-content") || window;

    const handleScroll = () => {
      const scrolledBeyondThreshold =
        scrollableElement instanceof Window
          ? scrollableElement.scrollY > 30
          : scrollableElement.scrollTop > 30;

      if (scrolledBeyondThreshold) {
        setIsVisible(false);
        if (menuAvatar.current?.isVisible()) {
          menuAvatar.current.hide();
          setIsOverlayVisible(false);
        }
      } else {
        setIsVisible(true);
      }
    };

    scrollableElement.addEventListener("scroll", handleScroll);

    return () => {
      scrollableElement.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleOverlay = (event: React.MouseEvent) => {
    if (isOverlayVisible) {
      menuAvatar.current?.hide();
      setIsOverlayVisible(false);
    } else {
      menuAvatar.current?.show(event, event.currentTarget);
      setIsOverlayVisible(true);
    }
  };

  return (
    <>
      <div
        className={`z-50 fixed top-7 right-7 gap-4 bg-yellow-500 rounded-full shadow-lg p-3 flex flex-col items-center transition-opacity duration-300 ease-in-out ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <Avatar
          onClick={toggleOverlay}
          image="https://i.pinimg.com/originals/b2/ae/57/b2ae57d690edfcf09de7dadffc521052.jpg"
          style={{
            width: "50px",
            height: "50px",
            borderRadius: "50%",
            overflow: "hidden",
            cursor: "pointer",
            objectFit: "cover",
          }}
        />

        <Avatar
          onClick={handleLogout}
          icon="pi pi-sign-out"
          shape="circle"
          className="rounded-full cursor-pointer bg-[#fecc35b2] font-bold hover:bg-yellow-600"
          style={{
            width: "50px",
            height: "50px",
          }}
        />
      </div>

      <OverlayPanel
        ref={menuAvatar}
        className="animate-fade-in rounded-[14px] max-w-[230px] w-full flex flex-col "
        style={{ transform: "translateX(-75px)" }}
      >
        <ul className="p-4">
          <div className="mb-5">
            <h1 className="text-xl font-bold">Larry Wilson</h1>
            <p className="text-sm text-gray-600">180710242242</p>
          </div>
          <li className="flex items-center py-2 cursor-pointer hover:text-blue-500">
            <i className="pi pi-user mr-2"></i>
            Data Diri
          </li>
          <li className="flex items-center py-2 cursor-pointer hover:text-blue-500">
            <i className="pi pi-unlock mr-2"></i>
            Ganti Password
          </li>
          <li className="flex items-center py-2 cursor-pointer hover:text-blue-500">
            <i className="pi pi-cog mr-2"></i>
            Tentang
          </li>
        </ul>
      </OverlayPanel>
    </>
  );
};

export default AvatarTopRight;
