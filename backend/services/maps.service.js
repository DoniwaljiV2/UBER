const axios = require("axios");
module.exports.getAddressCordinate = async (address) => {
  const apiKey = process.env.GOOGLE_MAPS_API;
  const encodedAddress = encodeURIComponent(address); // Corrected function name

  const url = `https://maps.gomaps.pro/maps/api/geocode/json?address=${encodedAddress}&key=${apiKey}`;
  try {
    const response = await axios.get(url);
    if (response.data.status === "OK") {
      const location = response.data.results[0].geometry.location;
      return {
        ltd: location.lat,
        lng: location.lng,
      };
    } else {
      throw new Error("Unable to fetch coordinates");
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
};

module.exports.getDistanceTime = async (origin, destination) => {
  if (!origin || !destination) {
    throw new Error("Origin and destination are required");
  }

  const apiKey = process.env.GOOGLE_MAPS_API;
  const encodedOrigin = encodeURIComponent(origin);
  const encodedDestination = encodeURIComponent(destination);

  const url = `https://maps.gomaps.pro/maps/api/distancematrix/json?origins=${encodedOrigin}&destinations=${encodedDestination}&key=${apiKey}`;
  //   try {
  //     const response = await axios.get(url);
  //     if (response.data.status === "OK") {
  //       if (response.data.row[0].elements[0].status === "ZERO_RESULTS") {
  //         throw new Error("No routes found");
  //       }
  //       return response.data.row[0].elements[0];
  //     } else {
  //       throw new Error("Unable to fetch distance and time");
  //     }
  //   } catch (error) {
  //     console.log(error);
  //     throw error;
  //   }

  try {
    const response = await axios.get(url);

    if (response.data.status === "OK") {
      const rows = response.data.rows;

      // Check if rows exist and have valid elements
      if (rows.length > 0 && rows[0].elements.length > 0) {
        const element = rows[0].elements[0];

        if (element.status === "ZERO_RESULTS") {
          throw new Error("No routes found");
        }

        return element; // Contains `distance` and `duration`
      } else {
        throw new Error("Invalid response format");
      }
    } else {
      throw new Error("Unable to fetch distance and time");
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
};

// module.exports.getAutoCompleteSuggestions=async(input)=>{
//     if(!input){
//         throw new Error("query is required")

//     }
//     const apiKey = process.env.GOOGLE_MAPS_API;
//     const encodedInput= encodeURIComponent(input);
//     // https://maps.gomaps.pro/maps/api/place/autocomplete/json?input=<string>&key=your api key from gomaps.proc

//     const url=`https://maps.gomaps.pro/maps/api/place/autocomplete/json?input=${encodedInput}&key=${apiKey}`
//     try {
//       const response= await axios.get(url);
//       if(response.data.status==='OK')
//         {
//           return response.data.predictions;
//         }
//       } catch (error) {
//         console.error(error);
//         throw error

//     }
// }

module.exports.getAutoCompleteSuggestions = async (input) => {
  if (!input) {
    throw new Error("query is required");
  }

  const encodedInput = encodeURIComponent(input);
  const apiKey = process.env.GOOGLE_MAPS_API;

  // https://maps.gomaps.pro/maps/api/place/autocomplete/json?input=<string>&key=your api key from gomaps.proc

  const url = `https://maps.gomaps.pro/maps/api/place/autocomplete/json?input=${encodedInput}&key=${apiKey}`;

  try {
    const response = await axios.get(url);
    if (response.data.status === "OK") {
      return response.data.predictions
        .map((prediction) => prediction.description)
        .filter((value) => value);
    } else {
      throw new Error("Unable to fetch suggestions");
    }
  } catch (err) {
    console.error(err);
    throw err;
  }
};
