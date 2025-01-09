import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { CaptionDataContext } from "../context/CaptionContext";
const CaptionLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { caption, setCaption } = useContext(CaptionDataContext);

  const submitHandler = async (e) => {
    e.preventDefault();

    const caption = {
      email: email,
      password: password,
    };
    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/captions/login`,
      caption
    );

    if (response.status === 200) {
      const data = response.data;
      setCaption(data.caption);
      localStorage.setItem("token", data.token);
      navigate("/caption-home");
    }

    setEmail("");
    setPassword("");
  };

  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <img
          className="w-20 mb-3"
          src="https://www.svgrepo.com/show/505031/uber-driver.svg"
          alt="uber-logo"
        />

        <form onSubmit={submitHandler}>
          <h3 className="text-lg  font-medium mb-2">What's your email</h3>

          <input
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder=" email@example.com"
          />

          <h3 className="text-lg  font-medium  mb-2">Enter password</h3>

          <input
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="password"
          />
          <button className="bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2  w-full text-lg placeholder:text-base">
            Login
          </button>
        </form>
        <p className="text-center">
          Join a fleet?{" "}
          <Link to="/caption-signup" className=" text-blue-600">
            Register as a Caption
          </Link>
        </p>
      </div>

      <div>
        <Link
          to="/login"
          className="flex items-center justify-center mb-5 bg-[#5c860c] text-white font-semibold mb-7 rounded px-4 py-2  w-full text-lg placeholder:text-base"
        >
          Sign in as User
        </Link>
      </div>
    </div>
  );
};

export default CaptionLogin;
