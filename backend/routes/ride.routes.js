const express = require("express");
const { body,query } = require("express-validator");
const rideController = require("../controllers/ride.controller");
const authMiddleware = require("../middlewares/auth.middleware");
const router = express.Router();
router.post(
  "/create",
  authMiddleware.authUser,

  body("pickup")
    .isString()
    .isLength({ min: 3 })
    .withMessage("Invalid pickup address"),
  body("destination")
    .isString()
    .isLength({ min: 3 })
    .withMessage("Invalid destination address"),
  body("vehicleType")
    .isString()
    .isIn(["auto", "car", "moto"])
    .withMessage("Invalid vehicle type"),

  rideController.createRide
);

router.get("/get-fare",authMiddleware.authUser,
  query("pickup").isString().isLength({min:3}).withMessage("invalid pickup address"),
  query("destination").isString().isLength({min:3}).withMessage("invalid destination address"),

  rideController.getFare
)

router.post("/confirm",authMiddleware.authCaption,
  body("rideId").isMongoId().withMessage("invalid ride id"),
 
  rideController.confirmRide
)

router.get("/start-ride",
  authMiddleware.authCaption,
  query("rideId").isMongoId().withMessage("invalid ride id"),
  query("otp").isString().isLength({min:6,max:6}).withMessage("Invalid otp"),
 
  rideController.startRide
  
)

router.post("/end-ride",
  authMiddleware.authCaption,
  body("rideId").isMongoId().withMessage("Invalid ride id"),
  rideController.endRide
)


module.exports = router;
