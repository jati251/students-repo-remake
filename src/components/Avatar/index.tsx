// AvatarTopRight.tsx

import React, { useRef } from "react";
import { Avatar } from "primereact/avatar";
import { OverlayPanel } from "primereact/overlaypanel";

const AvatarTopRight: React.FC = () => {
  const handleLogout = () => {
    localStorage.removeItem("authToken");
    window.location.reload(); // Or redirect to login page
  };
  const menuAvatar = useRef<OverlayPanel>(null);

  return (
    <>
      <div className="fixed top-7 right-7 gap-4 bg-yellow-500 rounded-full shadow-lg p-3 flex flex-col items-center">
        <Avatar
          onClick={(event) => menuAvatar?.current?.toggle(event)}
          image="https://i.pinimg.com/originals/b2/ae/57/b2ae57d690edfcf09de7dadffc521052.jpg"
          style={{
            width: "50px",
            height: "50px",
            borderRadius: "50%", // Forces the avatar to be a perfect circle
            overflow: "hidden", // Ensures that the image is clipped if necessary
            cursor: "pointer",
            objectFit: "cover", // Ensures the image is cropped to fit the container
          }}
        />

        <Avatar
          onClick={handleLogout}
          icon="pi pi-sign-out"
          shape="circle"
          className="rounded-full cursor-pointer bg-yellow-400 font-bold hover:bg-yellow-600"
          style={{
            width: "50px",
            height: "50px",
          }}
        />
      </div>
      {/* Popup with List */}

      <OverlayPanel
        ref={menuAvatar}
        className="animate-fade-in rounded-3xl max-w-[200px] w-full flex flex-col"
        style={{ transform: "translateX(-80px)", opacity: 0 }}
      >
        <ul className="p-4">
          <div className="mb-5">
            <h1 className="text-xl font-bold">Larry Wilson</h1>
            <p className="text-sm text-gray-600">180710242242</p>
          </div>
          <li className="flex items-center py-2 cursor-pointer hover:text-blue-500">
            <i className="pi pi-book mr-2"></i>
            Data Diri
          </li>
          <li className="flex items-center py-2 cursor-pointer hover:text-blue-500">
            <i className="pi pi-user mr-2"></i>
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
