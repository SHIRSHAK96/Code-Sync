import { io } from "socket.io-client";

export const initSocket = async () => {
  const options = {
    "force new connection": true,
    reconnectionAttempt: "Infinity",
    timeout: 10000,
    transports: ["websocket","polling"],
  };
  const socket = io("https://gamechangers.onrender.com/", options);
  return socket;
};