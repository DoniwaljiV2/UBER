import React from "react";
import { Link } from "react-router-dom";

const FinishRide = ({setFinishRidePanel}) => {
  return (
    <div>
      <h5
        onClick={() => setFinishRidePanel(false)}
        className="p-1 text-center absolute top-0 w-[93%]"
      >
        <i className="text-3xl text-gray-300 ri-arrow-down-wide-line "></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-5">
        Finish this Ride
      </h3>
      <div className="flex items-center justify-between p-4 border-yellow-400 border-2 rounded-xl mt-4">
        <div className="flex items-center gap-3 ">
          <img
            className="h-12 w-12 rounded-full object-cover"
            src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTJ8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fHww"
            alt=""
          />
          <h2 className="text-lg font-medium">Rahul Doniwal</h2>
        </div>
        <h5 className="text-lg font-semibold">2.2 KM</h5>
      </div>
      <div className="flex gap-2 flex-col  justify-between items-center">
        <div className="w-full mt-5 ">
          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className="text-lg ri-map-pin-user-fill"></i>
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-sm mt-1 text-gray-600 ">
                Ashoka Garden, Bhopal
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className="text-lg ri-map-pin-2-fill"></i>
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-sm mt-1 text-gray-600 ">
                Ashoka Garden, Bhopal
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3 ">
            <i className="text-lg ri-currency-line"></i>
            <div>
              <h3 className="text-lg font-medium">₹193.00</h3>
              <p className="text-sm mt-1 text-gray-600 ">Cash Cash</p>
            </div>
          </div>
        </div>

        <div className="mt-6 w-full">
        <Link
              to="/caption-home"
              className="w-full mt-5 flex justify-center bg-green-600 text-white text-lg font-semibold p-3 rounded-lg "
            >
              Finish Ride
            </Link>
            </div>
      </div>
    </div>
  );
};

export default FinishRide;
