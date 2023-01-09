const app = require("express")();
const server = require("http").createServer(app);
const cors = require("cors");
const io = require("socket.io")(server, {
  cors: {
    origin: "*",
    credentials: true,
  },
});

io.on("connection", (socket) => {
  socket.on("submit_message", ({ name, message }) => {
    io.emit("new_message", { name, message });
  });
});

server.listen(4000, function () {
  console.log("listening on port 4000");
});
