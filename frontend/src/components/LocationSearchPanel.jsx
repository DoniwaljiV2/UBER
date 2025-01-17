// const LocationSearchPanel = ({suggestions,setPickup,setDestination,activeField, setPanelOpen, setVehiclePanel }) => {
//   //sample array for loaction
//   const handleSuggestionClick=(suggestion)=>{
//     if(activeField==='pickup'){
//       setPickup(suggestion)
//     }
//     else if(activeField==='destination'){
//       setDestination(suggestion);
//     }
//   }
//   // const locations = [
//   //   "165, Near Vatika Garden,Play Club,Bhopal",
//   //   "21, Near Kapoor Garden,Coding Club,Bhopal",
//   //   "07, Near Indra Garden,Game Club,Bhopal",
//   //   "105, Near Ashoka Garden,Gym Club,Bhopal",
//   // ];
//   return (
//     <div>
//       {suggestions.map((elem, index) => (
//         <div
//           onClick={() => {
//             // setVehiclePanel(true);
//             // setPanelOpen(false);
//             handleSuggestionClick(elem)
//           }}
//           key={index}
//           className="flex items-center justify-start   gap-4 border-2 p-3 border-gray-50 active:border-black  my-2 rounded-xl"
//         >
//           <h2 className="bg-[#eee] h-8 w-12 flex items-center justify-center rounded-full">
//             <i className="ri-map-pin-fill "></i>
//           </h2>
//           <h4 className="font-medium">{elem}</h4>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default LocationSearchPanel;

import React from "react";

const LocationSearchPanel = ({
  suggestions,
  setVehiclePanel,
  setPanelOpen,
  setPickup,
  setDestination,
  activeField,
}) => {
  const handleSuggestionClick = (suggestion) => {
    if (activeField === "pickup") {
      setPickup(suggestion);
    } else if (activeField === "destination") {
      setDestination(suggestion);
    }
    // setVehiclePanel(true)
    // setPanelOpen(false)
  };

  return (
    <div className="mt-7 ">
      {/* Display fetched suggestions */}
      {suggestions.map((elem, idx) => (
        <div
          key={idx}
          onClick={() => handleSuggestionClick(elem)}
          className="flex gap-4 border-2 p-3 border-gray-50 active:border-black rounded-xl items-center my-2 justify-start"
        >
          <h2 className="bg-[#eee] h-8 flex items-center justify-center w-12 rounded-full">
            <i className="ri-map-pin-fill"></i>
          </h2>
          <h4 className="font-medium">{elem}</h4>
        </div>
      ))}
    </div>
  );
};

export default LocationSearchPanel;
