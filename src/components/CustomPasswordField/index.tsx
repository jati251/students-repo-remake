import React, { useState } from "react";
import { InputText } from "primereact/inputtext";

const PasswordField: React.FC<{
  id: string;
  className?: string;
  placeholder?: string;
}> = ({ id, className, placeholder }) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <div className="relative">
      <InputText
        id={id}
        type={isPasswordVisible ? "text" : "password"}
        className={`w-full p-3 h-13 border border-gray-300 rounded-lg shadow-sm focus:outline-none text-xl focus:ring-2 focus:ring-blue-400 ${className}`}
        placeholder={placeholder}
      />
      <button
        type="button"
        onClick={togglePasswordVisibility}
        className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-600"
        aria-label={isPasswordVisible ? "Hide password" : "Show password"}
      >
        {isPasswordVisible ? (
          <span
            className="pi pi-eye-slash"
            style={{ fontSize: "1.5rem" }}
          ></span>
        ) : (
          <span className="pi pi-eye" style={{ fontSize: "1.5rem" }}></span>
        )}
      </button>
    </div>
  );
};

export default PasswordField;
