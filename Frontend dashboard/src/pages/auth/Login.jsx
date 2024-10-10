// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { images } from "../../utils/images";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/20/solid";
import InputField from "../../components/input/InputField";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate=useNavigate()
  const [showPassword, setShowPassword] = useState(false);
  const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const submitValue = async (e) => {
    e.preventDefault();
    // console.log("data",formData);
    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData)
      });
      console.log(res);
      
      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || "Login failed");
      }
      const data = await res.json();
      const { token } = data;

      // Store the token in local storage
      localStorage.setItem('token', token);
      console.log(token);
      

      // Redirect to a different page or update application state
      console.log('Login successful!', data);
      navigate('/dashboard')
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerHeight < 600) {
        setIsKeyboardVisible(true);
        console.log("true");
      } else {
        setIsKeyboardVisible(false);
        console.log("false");
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="h-screen bg-[#006FEE]">
      {/* <div className="relative flex flex-col-reverse md:flex-row w-screen h-screen"> */}
      <div className="w-screen h-screen  flex  flex-col-reverse md:flex-row relative ">
        <div className="w-1/2 flex items-center justify-center  ">
          <div className="flex flex-col items-center">
            {/* Empty div to center content */}
          </div>
        </div>
        <div className="w-screen bg-white rounded-tl-3xl  h-[30rem] md:h-screen rounded-tr-3xl md:rounded-tr-none md:rounded-bl-3xl flex flex-col items-center justify-center md:px-10">
          <div className="m-auto  md:w-2/5 md:h-0 flex flex-col justify-center">
            <form className="md:space-y-6 space-y-4">
              <InputField
                label="Email"
                id="email"
                type="email"
                placeholder="Enter email address"
                name="email" // Specify the input name
                value={formData.email}
                handleChange={handleChange}
                className={
                  "mt-1 w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-[#006FEE] focus:border-[#006FEE]"
                }
              />
              <InputField
                label="Password"
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter password"
                value={formData.password}
                handleChange={handleChange}
                relative="relative"
                className={
                  "mt-1 w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-[#006FEE] focus:border-[#006FEE]"
                }
              >
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 flex pt-6 items-center px-3"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeSlashIcon className="h-5 w-5 text-gray-500" />
                  ) : (
                    <EyeIcon className="h-5 w-5 text-gray-500" />
                  )}
                </button>
              </InputField>

              <div>
                <button
                  // type="submit"
                  onClick={submitValue}
                  className="w-full py-3 bg-[#006FEE] text-white rounded-full font-semibold hover:bg-blue-700 focus:outline-none"
                >
                  Log In
                </button>
              </div>
            </form>
          </div>
        </div>
        <div
          className={`absolute ${
            isKeyboardVisible ? "top-10 scale-75" : "top-1/4 md:top-1/2"
          } md:left-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300`}
        >
          <div
            className={`${
              isKeyboardVisible
                ? "w-[10rem] h-[10rem]"
                : "md:w-[25rem] md:h-[25rem] h-1/2"
            } bg-[#338CF1] rounded-full flex items-center justify-center`}
          >
            <img
              src={images.logo}
              alt="Logo"
              className={`${isKeyboardVisible ? "h-32" : "md:h-60 h-40"}`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
