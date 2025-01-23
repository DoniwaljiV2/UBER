const socketIo = require("socket.io");
const userModel = require("./models/user.model");
const captionModel = require("./models/caption.model");
let io;

function initializeSocket(server) {
  io = socketIo(server, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"],
    },
  });
  io.on("connection", (socket) => {
    console.log(`client connected: ${socket.id}`);

    socket.on("join", async (data) => {
      const { userId, userType } = data;
      if (userType === "user") {
        await userModel.findByIdAndUpdate(userId, { socketId: socket.id });
      } else if (userType === "caption") {
        await captionModel.findByIdAndUpdate(userId, { socketId: socket.id });
      }
    });

    socket.on("update-location-caption", async (data) => {
      const { userId, location } = data;
      // console.log("Updating caption location:", { userId, location });

      if (!location || !location.ltd || !location.lng) {
        return socket.emit("error", { message: "invalid location data" });
      }
      await captionModel.findByIdAndUpdate(userId, {
        location: {
          ltd: location.ltd,
          lng: location.lng,
        },
      });
    });

    socket.on("disconnect", () => {
      console.log(`Client disconnect ${socket.id}`);
    });
  });
}

function sendMessageToSocketId(socketId, messageObject) {
  // console.log("messageObject",messageObject);

  if (io) {
    io.to(socketId).emit(messageObject.event, messageObject.data);
  } else {
    console.log(`Sockket.io not initialize`);
  }
}

module.exports = { initializeSocket, sendMessageToSocketId };
