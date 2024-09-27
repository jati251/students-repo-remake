import React from "react";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import PasswordField from "../../../components/CustomPasswordField";
import { useNavigate } from "react-router-dom";

const LoginPage: React.FC = () => {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted");
    localStorage.setItem("authToken", "masuk");
    navigate("/");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
      <div className="flex flex-col lg:flex-row w-full max-w-[1000px] h-full lg:h-auto shadow-lg rounded-2xl overflow-hidden">
        {/* Left Section */}
        <div className="flex-1 flex flex-col bg-white p-6 lg:p-10 relative">
          {/* Logo */}
          <div className="absolute top-4 left-4 lg:top-7 lg:left-7">
            <img
              src="https://v2-students.unpad.ac.id/assets/logo/logo_unpad_letter.svg"
              alt="Logo"
              className="w-24 h-auto"
            />
          </div>

          {/* Text Section */}
          <div className="w-full max-w-md mt-[10vh] lg:mt-[10vh]">
            <h3 className="text-2xl lg:text-3xl font-semibold text-gray-500 mb-2">
              Masuk
            </h3>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              STUDENT UNPAD - ReMake
            </h2>
          </div>

          {/* Form Section */}
          <div className="w-full max-w-xl mt-3 flex flex-col justify-center items-center border-2 rounded-xl p-6 lg:p-10">
            <form className="w-full max-w-lg" onSubmit={handleSubmit}>
              <div className="mb-6">
                <label
                  htmlFor="username"
                  className="block text-lg lg:text-xl font-medium text-gray-500 mb-2"
                >
                  Email UNPAD
                </label>
                <InputText
                  id="username"
                  type="email"
                  placeholder="Silahkan login dengan email unpad"
                  className="w-full p-3 border text-lg lg:text-xl rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div className="mb-6 lg:mb-8 w-full">
                <label
                  htmlFor="password"
                  className="block text-lg lg:text-xl font-medium text-gray-500 mb-2"
                >
                  Password
                </label>
                <PasswordField
                  id="password"
                  className="w-full"
                  placeholder="Masukan kata sandi anda"
                />
              </div>

              <Button
                type="submit"
                label="Masuk melalui Unpad ID"
                icon="pi pi-sign-in"
                className="w-full p-3 text-lg lg:text-xl rounded-3xl bg-[#ffae00] hover:bg-[#e69a00] text-white font-semibold shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
              />
            </form>
          </div>
        </div>

        {/* Right Section: Background Image */}
        <div
          className="hidden lg:flex flex-1 bg-cover bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://v2-students.unpad.ac.id/assets/illustration/ill_unpad.svg')",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        />
      </div>
    </div>
  );
};

export default LoginPage;
