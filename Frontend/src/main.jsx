import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Authprovider } from "./context/Authprovider.jsx";
import { BrowserRouter } from "react-router-dom";
import { SocketProvider } from "./context/SocketContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(

   <BrowserRouter>
    <Authprovider>
      <SocketProvider>
        <App />
      </SocketProvider>
    </Authprovider>
  </BrowserRouter>
 
);
