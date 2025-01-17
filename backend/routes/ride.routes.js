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

module.exports = router;
