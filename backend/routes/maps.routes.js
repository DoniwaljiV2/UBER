const express = require('express');

const router = express.Router();
const authMiddleware=require("../middlewares/auth.middleware.js")
const mapController=require("../controllers/maps.controller.js")
const {query}= require("express-validator")

// http://localhost:4000/maps/get-coordinates?address={address}&key={apikey}

router.get('/get-coordinates',
    query("address").isString().isLength({min:3}),
    authMiddleware.authUser,mapController.getCoordinates
 );

//  http://localhost:4000/maps/get-distance-time?origin={origin}&destination={destination}&key={apikey}

router.get('/get-distance-time',
    query("origin").isString().isLength({min:3}),
    query("destination").isString().isLength({min:3}),
    authMiddleware.authUser,mapController.getDistanceTime
 );

//  http://localhost:4000/maps/get-suggestions?input={input}&key={apikey}

 router.get('/get-suggestions',
    query('input').isString().isLength({min:1}),
    authMiddleware.authUser,
    mapController.getAutoCompleteSuggestions
 )



module.exports = router;