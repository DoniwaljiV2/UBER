import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CaptionDataContext } from "../context/CaptionContext";
import {useNavigate} from 'react-router-dom';
import axios from "axios";
const CaptionSignup = () => {
    const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [vehicleColor, setVehicleColor] = useState("");
  const [vehiclePlate, setVehiclePlate] = useState("");
  const [vehicleCapacity, setVehicleCapacity] = useState("");
  const [vehicleType, setVehicleType] = useState("");

  const { caption, setCaption } = useContext(CaptionDataContext);
  const submitHandler =async (e) => {
    e.preventDefault();

    const capionData = {
      fullname: {
        firstname: firstName,
        lastname: lastName,
      },
      email: email,
      password: password,
      vehicle: {
        color: vehicleColor,
        plate: vehiclePlate,
        capacity: vehicleCapacity,
        vehicleType: vehicleType,
      },
    };
    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/captions/register`,
      capionData
    );
    if (response.status === 201) {
      const data = response.data;
      setCaption(data.caption);
      console.log(data);
      
      localStorage.setItem("token", data.token);
      navigate('/caption-home')
    }
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setVehicleColor("");
    setVehiclePlate("");
    setVehicleCapacity("");
    setVehicleType("");
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
          <h3 className="text-lg font-medium mb-2">
            What's our Caption's name
          </h3>
          <div className="flex gap-4 mb-6">
            <input
              className="bg-[#eeeeee] w-1/2 rounded px-4 py-2 border  text-lg placeholder:text-base "
              type="text"
              required
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="First Name"
            />
            <input
              className="bg-[#eeeeee] w-1/2 rounded px-4 py-2 border  text-lg placeholder:text-base "
              type="text"
              required
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Last Name"
            />
          </div>
          <h3 className="text-lg font-medium mb-2">
            What's our Caption's email
          </h3>

          <input
            className="bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-lg placeholder:text-base "
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder=" email@example.com"
          />

          <h3 className="text-lg font-medium  mb-2">Enter password</h3>

          <input
            className="bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-lg placeholder:text-base "
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="password"
          />
          <h3 className="text-lg font-medium mb-2">Vehicle Information</h3>
          <div className="flex gap-4 mb-6">
            <input
              className="bg-[#eeeeee] rounded px-4 py-2 border w-full text-lg placeholder:text-base "
              type="text"
              value={vehicleColor}
              onChange={(e) => setVehicleColor(e.target.value)}
              required
              placeholder="Vehicle Color"
            />
            <input
              className="bg-[#eeeeee]  rounded px-4 py-2 border w-full text-lg placeholder:text-base "
              type="text"
              value={vehiclePlate}
              onChange={(e) => setVehiclePlate(e.target.value)}
              required
              placeholder="Vehicle Plate"
            />
          </div>
          <div className="flex gap-4 mb-6">
            <input
              className="bg-[#eeeeee]  rounded px-4 py-2 border w-full text-lg placeholder:text-base "
              type="number"
              value={vehicleCapacity}
              onChange={(e) => setVehicleCapacity(e.target.value)}
              required
              placeholder="Vehicle Capacity"
            />
            <select
              className="bg-[#eeeeee] rounded px-4 py-2 border w-full text-lg placeholder:text-base "
              value={vehicleType}
              onChange={(e) => setVehicleType(e.target.value)}
              required
            >
              <option value="" disabled>
                Select Vehicle Type
              </option>
              <option value="car">Car</option>
              <option value="auto">Auto</option>
              <option value="motorcycle">Motorcycle</option>
            </select>
          </div>

          <button className="bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2  w-full text-lg placeholder:text-base ">
            Create Caption Account
          </button>
        </form>
        <p className="text-center">
          Already have a account?{" "}
          <Link to="/caption-login" className=" text-blue-600">
            Login here
          </Link>
        </p>
      </div>

      <div>
        <p className="text-xs leading-tight text-justify">
          This site is protected by reCAPTCHA and the{" "}
          <span className="underline">Google Policy</span> and{" "}
          <span className="underline">Terms of Service apply</span>
        </p>
      </div>
    </div>
  );
};

export default CaptionSignup;
