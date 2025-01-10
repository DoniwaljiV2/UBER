import "remixicon/fonts/remixicon.css";
const LocationSearchPanel = ({ setPanelOpen, setVehiclePanel }) => {
  //sample array for loaction
  const locations = [
    "165, Near Vatika Garden,Play Club,Bhopal",
    "21, Near Kapoor Garden,Coding Club,Bhopal",
    "07, Near Indra Garden,Game Club,Bhopal",
    "105, Near Ashoka Garden,Gym Club,Bhopal",
  ];
  return (
    <div>
      {locations.map((elem, index) => (
        <div
          onClick={() => {
            setVehiclePanel(true);
            setPanelOpen(false);
          }}
          key={index}
          className="flex items-center justify-start   gap-4 border-2 p-3 border-gray-50 active:border-black  my-2 rounded-xl"
        >
          <h2 className="bg-[#eee] h-8 w-12 flex items-center justify-center rounded-full">
            <i className="ri-map-pin-fill "></i>
          </h2>
          <h4 className="font-medium">{elem}</h4>
        </div>
      ))}
    </div>
  );
};

export default LocationSearchPanel;
