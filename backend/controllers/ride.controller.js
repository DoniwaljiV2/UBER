const rideService = require("../services/ride.service");
const mapService = require("../services/maps.service");
const { validationResult } = require("express-validator");
const { sendMessageToSocketId } = require("../socket");
const rideModel = require("../models/ride.model");

module.exports.createRide = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { pickup, destination, vehicleType } = req.body;

  try {
    const ride = await rideService.createRide({
      user: req.user._id,
      pickup,
      destination,
      vehicleType,
    });

    const pickupCoordinates = await mapService.getAddressCordinate(pickup);
    res.status(201).json(ride);
    // console.log("pickupCoordinates :", pickupCoordinates);

    const captionsInRadius = await mapService.getCaptionInTheRadius(
      pickupCoordinates.ltd,
      pickupCoordinates.lng,
      5000
    );
    // console.log("captionsInRadius: ", captionsInRadius);

    ride.otp = "";

    const rideWithUser = await rideModel
      .findOne({
        _id: ride._id,
      })
      .populate("user");
    captionsInRadius.map((caption) => {
      sendMessageToSocketId(caption.socketId, {
        event: "new-ride",
        data: rideWithUser,
      });
    });
  } catch (error) {
    console.error("Error in createRide:", error.message);
    return res.status(500).json({ message: error.message });
  }
};

module.exports.getFare = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { pickup, destination } = req.query;
  try {
    const fare = await rideService.getFare(pickup, destination);
    return res.status(200).json(fare);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports.confirmRide = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { rideId } = req.body;
  try {
    const ride = await rideService.confirmRide({
      rideId,
      caption: req.caption,
    });

    sendMessageToSocketId(ride.user.socketId, {
      event: "ride-confirmed",
      data: ride,
    });
    return res.status(200).json(ride);
  } catch (error) {
    console.log("confirmRide: ", error);

    return res.status(500).json({ message: error.message });
  }
};

module.exports.startRide = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  // console.log("ride Controller startRide");

  const { rideId, otp } = req.query;
  try {
    const ride = await rideService.startRide({
      rideId,
      otp,
      caption: req.caption,
    });
    // console.log("ride",ride);
    sendMessageToSocketId(ride.user.socketId, {
      event: "ride-started",
      data: ride,
    });
    return res.status(200).json(ride);
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

module.exports.endRide = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }


  const {rideId}= req.body;
  try {
    const ride= await rideService.endRide({rideId,caption:req.caption})
    sendMessageToSocketId(ride.user.socketId,{
      event:"ride-ended",
      data:ride
    })
    
    return res.status(200).json(ride)
  } catch (error) {
    return res.status(500).json({message:error.message}) 
  }
};
