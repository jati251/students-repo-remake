import React from "react";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import PasswordField from "../../../components/CustomPasswordField";
// import ReCAPTCHA from "react-google-recaptcha";

const LoginPage: React.FC = () => {
  // const [captchaValue, setCaptchaValue] = useState<string | null>(null);
  // const [isFormValid, setIsFormValid] = useState(false);

  // const handleCaptchaChange = (value: string | null) => {
  //   setCaptchaValue(value);
  //   setIsFormValid(value !== null);
  // };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // if (isFormValid) {
    //   console.log("Form submitted", captchaValue);
    // } else {
    //   console.log("Please complete the CAPTCHA");
    // }
    console.log("Form submitted");
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="flex w-full h-[70vh] max-w-[1400px] shadow-lg rounded-2xl overflow-hidden">
        <div className="flex-1 flex flex-col bg-white p-10 relative">
          {/* Logo */}
          <div className="absolute top-7 left-7">
            <img
              src="https://v2-students.unpad.ac.id/assets/logo/logo_unpad_letter.svg"
              alt="Logo"
              className="w-100 h-10-0"
            />
          </div>
          <div className="w-full max-w-md mt-[10vh]">
            <h3 className="text-3xl font-semibold text-gray-500 mb-2 text-left">
              Masuk
            </h3>
            <h2 className="text-4xl font-bold text-gray-800 mb-4 text-left">
              STUDENT UNPAD - ReMake
            </h2>
          </div>
          <div className="w-full max-w-xl mt-3 flex flex-col justify-center items-center border-2 rounded-xl p-10">
            <div className="w-full max-w-lg ">
              <div className="mb-6">
                <label
                  htmlFor="username"
                  className="block text-xl font-medium text-gray-500 mb-2 text-left"
                >
                  Email UNPAD
                </label>
                <InputText
                  id="username"
                  type="email"
                  placeholder="Silahkan login dengan email unpad"
                  className="w-full p-3 border text-xl rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div className="mb-8 w-full">
                <label
                  htmlFor="password"
                  className="block text-lg font-medium text-gray-500 mb-2"
                >
                  Password
                </label>
                <PasswordField
                  id="password"
                  className="w-full"
                  placeholder="Masukan kata sandi anda"
                />
              </div>

              {/* <div className="mb-8 w-full">
                <ReCAPTCHA
                  sitekey="YOUR_RECAPTCHA_SITE_KEY"
                  onChange={handleCaptchaChange}
                />
              </div> */}

              <Button
                onClick={handleSubmit}
                label="Masuk melalui Unpad ID"
                icon="pi pi-sign-in"
                className="w-full p-3 text-lg rounded-3xl bg-[#ffae00] hover:bg-[#e69a00] text-white font-semibold shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
              />
            </div>
          </div>
        </div>

        {/* Right Section: Background Image */}

        <div
          className="flex-1 bg-cover bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://v2-students.unpad.ac.id/assets/illustration/ill_unpad.svg')",
            backgroundRepeat: "no-repeat", // Prevent repeating
            backgroundPositionX: "-50px",
            backgroundPositionY: "0px",
            backgroundSize: "cover",
            height: "100%",
            width: "100%",
          }}
        >
          {/* Background image content */}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
