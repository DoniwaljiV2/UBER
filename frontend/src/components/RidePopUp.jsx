const RidePopUp = ({ setRidePopupPanel, setConfirmRidePopupPanel }) => {
  return (
    <div>
      <h5
        onClick={() => setRidePopupPanel(false)}
        className="p-1 text-center absolute top-0 w-[93%]"
      >
        <i className="text-3xl text-gray-300 ri-arrow-down-wide-line "></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-5">New Ride Available</h3>
      <div className="flex items-center justify-between p-3 bg-yellow-400 rounded-xl mt-4">
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
        <div className=" mt-5 flex w-full items-center justify-between">
          <button
            onClick={() => {
              setRidePopupPanel(false);
            }}
            className="  bg-gray-300 text-gray-700 font-semibold p-3 px-10 rounded-lg "
          >
            Ignore
          </button>
          <button
            onClick={() => {
              setConfirmRidePopupPanel(true);
            }}
            className="  bg-green-600 text-white font-semibold p-3 px-10 rounded-lg "
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
};

export default RidePopUp;
