import { Route, Routes } from "react-router-dom";
import Start from "./pages/Start";
import UserLogin from "./pages/UserLogin";
import UserSignup from "./pages/UserSignup";
import CaptionLogin from "./pages/CaptionLogin";
import CaptionSignup from "./pages/CaptionSignup";
import Home from "./pages/Home";
import UserProctectWrapper from "./pages/UserProctectWrapper";
import UserLogout from "./pages/UserLogout";
import CaptionHome from "./pages/CaptionHome";
import CaptionProtectWrapper from "./pages/CaptionProtectWrapper";
import CaptionLogout from "./pages/CaptionLogout";
import Riding from "./pages/Riding";
import CaptionRiding from "./pages/CaptionRiding";
import "remixicon/fonts/remixicon.css"
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route
          path="/home"
          element={
            <UserProctectWrapper>
              <Home />
            </UserProctectWrapper>
          }
        />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/riding" element={<Riding />} />
        <Route path="/signup" element={<UserSignup />} />
        <Route
          path="/user/logout"
          element={
            <UserProctectWrapper>
              <UserLogout />
            </UserProctectWrapper>
          }
        />
        <Route
          path="/caption-home"
          element={
            <CaptionProtectWrapper>
              <CaptionHome />
            </CaptionProtectWrapper>
          }
        />
        <Route path="/caption-login" element={<CaptionLogin />} />
        <Route path="/caption-signup" element={<CaptionSignup />} />
        <Route path="/caption-riding" element={<CaptionRiding />} />


        <Route
          path="/caption/logout"
          element={
            <UserProctectWrapper>
              <CaptionLogout />
            </UserProctectWrapper>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
