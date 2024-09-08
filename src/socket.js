import { io } from "socket.io-client";
const URL = process.env.NODE_ENV === 'production' ? 'https://sketchbook-server-a5s3.onrender.com' : 'http://localhost:5001'
export const socket = io(URL)