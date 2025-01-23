import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import UserContext from "./context/userContext.jsx";
import CaptionContext from "./context/CaptionContext.jsx";
import SocketProvider from "./context/SocketContext.jsx";
createRoot(document.getElementById("root")).render(
  <CaptionContext>
    <UserContext>
      <SocketProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </SocketProvider>
    </UserContext>
  </CaptionContext>
);
