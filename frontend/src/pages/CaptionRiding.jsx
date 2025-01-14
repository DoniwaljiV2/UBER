import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import FinishRide from "../components/FinishRide";

const CaptionRiding = () => {
    const [finishRidePanel, setFinishRidePanel] = useState(false)
    const finishRidePanelRef = useRef(null)
  useGSAP(() => {
    if (finishRidePanel) {
      gsap.to(finishRidePanelRef.current, {
        transform: "translateY(0)",
      });
    } else {
      gsap.to(finishRidePanelRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [finishRidePanel]);
  return (
    <div className="h-screen ">
      <div className="fixed p-3 top-0 flex items-center justify-between w-screen">
        <img
          className="w-16"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt=""
        />
        <Link
          to="/caption-home"
          className="h-10 w-10 bg-white flex justify-center rounded-full items-center"
        >
          <i className="text-xl font-medium ri-logout-box-r-line"></i>
        </Link>
      </div>

      <div className="h-4/5 ">
        <img
          className="object-cover h-full w-full"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt=""
        />
      </div>

      <div className="h-1/5 p-6 bg-yellow-400 justify-between items-center flex relative"
      onClick={()=>{
        setFinishRidePanel(true)
      }}>
        <h5
          // onClick={() => setRidePopupPanel(false)}
          className="p-1 text-center absolute top-0 w-[93%]"
        >
          <i className="text-3xl text-gray-600 ri-arrow-up-wide-line "></i>
        </h5>
        <h4 className="text-xl font-semibold">4 KM away</h4>
        <button
          // onClick={() => {
          //   setConfirmRidePopupPanel(true);
          // }}
          className="  bg-green-600 text-white font-semibold p-3 px-10 rounded-lg "
        >
          Complete Ride
        </button>
      </div>
      <div
        ref={finishRidePanelRef}
        className="fixed w-full z-10 h-screen bottom-0 translate-y-full  bg-white px-3 py-6 pt-12"
      >
        <FinishRide setFinishRidePanel={setFinishRidePanel}
          />
      </div>
    </div>
  );
};

export default CaptionRiding;
