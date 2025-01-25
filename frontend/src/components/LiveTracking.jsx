// import React, { useEffect, useState } from "react";
// import { LoadScript, GoogleMap, Marker } from "@react-google-maps/api";

// const containerStyle = {
//   width: "100%",
//   height: "100%",
// };

// const center = {
//   lat: -3.745,
//   lng: -38.523,
// };

// const LiveTracking = () => {
//   const [currentPosition, setCurrentPosition] = useState(center);

//   useEffect(() => {
//     navigator.geolocation.getCurrentPosition((position) => {
//       const { latitude, longitude } = position.coords;
//       setCurrentPosition({
//         lat: latitude,
//         lng: longitude,
//       });
//     });

//     const watchId = navigator.geolocation.watchPosition((position) => {
//       const { latitude, longitude } = position.coords;
//       setCurrentPosition({
//         lat: latitude,
//         lng: longitude,
//       });
//     });
//     return () => navigator.geolocation.clearWatch(watchId);
//   }, []);

//   useEffect(() => {
//     const updatePosition = () => {
//       navigator.geolocation.getCurrentPosition((position) => {
//         const { latitude, longitude } = position.coords;
//         setCurrentPosition({
//           lat: latitude,
//           lng: longitude,
//         });
//       });
//     };
//     updatePosition();
//     const intervalId = setInterval(updatePosition, 10000);
//     return () => clearInterval(intervalId);
//   }, []);
//   return (
//     <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
//       <GoogleMap
//         mapContainerStyle={containerStyle}
//         center={currentPosition}
//         zoom={15}
//       >
//         <Marker position={currentPosition} />
//       </GoogleMap>
//     </LoadScript>
//   );
// };

// export default LiveTracking;
import React, { useEffect, useState, useRef } from "react";
import { useLoadScript, GoogleMap } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "100%",
};

const center = {
  lat: -3.745,
  lng: -38.523,
};

const LiveTracking = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  });
  const [currentPosition, setCurrentPosition] = useState(center);
  const mapRef = useRef(null);
  const markerRef = useRef(null);

  useEffect(() => {
    const updatePosition = (position) => {
      const { latitude, longitude } = position.coords;
      setCurrentPosition({
        lat: latitude,
        lng: longitude,
      });
    };

    const handleError = (error) => {
      console.error("Error getting location:", error);
    };

    navigator.geolocation.getCurrentPosition(updatePosition, handleError);

    const watchId = navigator.geolocation.watchPosition(updatePosition, handleError);
    return () => navigator.geolocation.clearWatch(watchId);
  }, []);

  useEffect(() => {
    if (
      mapRef.current &&
      window.google &&
      window.google.maps &&
      window.google.maps.marker &&
      window.google.maps.marker.AdvancedMarkerElement
    ) {
      const { AdvancedMarkerElement } = window.google.maps.marker;

      if (!markerRef.current) {
        markerRef.current = new AdvancedMarkerElement({
          map: mapRef.current,
          position: currentPosition,
        });
      } else {
        markerRef.current.position = currentPosition;
      }
    }
  }, [currentPosition]);

  if (!isLoaded) return <div>Loading Maps...</div>;

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={currentPosition}
      zoom={15}
      onLoad={(map) => (mapRef.current = map)}
    />
  );
};

export default LiveTracking;
