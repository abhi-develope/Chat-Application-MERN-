import {server} from "socket.io";
import http from "http";
import express from "express";

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
    cors:{
        origin: "http://localhost:3001/",
        methods: ["GET", "POST"],
    }
})

// used to listen events on server side.
io.on("connected",(socket)=>{
    console.log("a user connected", socket.id);

    // used to listen client side events emitted by server and client
    socket.on("disconnect",()=>{
        console.log("a user disconnected", socket.id);
    })
})

export {app, io, server};