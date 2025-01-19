import { useContext } from "react";
import { CaptionDataContext } from "../context/CaptionContext";
const CaptionDetails = () => {
  const { caption } = useContext(CaptionDataContext);

  if (!caption) {
    return <div>Loading caption details...</div>; // Handle loading or missing caption
  }

  return (
    <div>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-5 justify-start">
          <img
            className="h-10 w-10 rounded-full object-cover"
            src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fFBFT1BMRXxlbnwwfHwwfHx8MA%3D%3D"
            alt=""
          />
          <h4 className="text-lg font-medium capitalize">
            {caption.fullname.firstname + " " + caption.fullname.lastname}
          </h4>
        </div>
        <div>
          <h4 className="text-xl font-semibold ">₹198.00</h4>
          <p className="text-sm text-gray-600">Earned</p>
        </div>
      </div>

      <div className="flex justify-center bg-gray-100 rounded-xl items-start gap-5 p-5 mt-6">
        <div className="text-center ">
          <i className=" text-3xl mb-2 font-thin ri-timer-2-line"></i>
          <h5 className="text-lg font-medium">10.2</h5>
          <p className="text-sm text-gray-600">Hours Online</p>
        </div>
        <div className="text-center ">
          <i className="text-3xl mb-2 font-thin ri-speed-up-line"></i>
          <h5 className="text-lg font-medium">10.2</h5>
          <p className="text-sm text-gray-600">Hours Online</p>
        </div>
        <div className="text-center ">
          <i className="text-3xl mb-2 font-thin ri-booklet-line"></i>
          <h5 className="text-lg font-medium">10.2</h5>
          <p className="text-sm text-gray-600">Hours Online</p>
        </div>
      </div>
    </div>
  );
};

export default CaptionDetails;
